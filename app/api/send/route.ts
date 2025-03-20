import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';
import { LRUCache } from 'lru-cache';


// Initialize Resend with your API key
const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

// Rate limit settings using LRU cache (3 requests per 15 minutes)
const rateLimit = new LRUCache<string, number>({
  max: 1000, // Max entries in the cache
  ttl: 15 * 60 * 1000, // 15 minutes
});

export async function POST(req: NextRequest) {
  try {
    // Get the IP address of the user
    const ip = req.headers.get('x-forwarded-for') || req.ip || 'unknown';

    // Rate limiting check
    if (ip !== 'unknown') {
      const requestCount = rateLimit.get(ip) || 0;
      if (requestCount >= 3) { // Limit to 3 requests per 15 min per IP
        return NextResponse.json({ error: 'Too many requests, please try again later' }, { status: 429 });
      }
      rateLimit.set(ip, requestCount + 1);
    }

    const body = await req.json();

    // Validation schema
    const contactFormSchema = z.object({
      reason: z.enum(['Job Opportunity', 'Project Collaboration', 'Feedback', 'Just Saying Hi']),
      jobLink: z.string().optional(),
      companyName: z.string().optional(),
      projectDescription: z.string().optional(),
      timeline: z.string().optional(),
      message: z.string().optional(),
      name: z.string().min(1, 'Please enter your name'),
      email: z.string().email('Please enter a valid email'),
    });

    // Validate request body
    const data = contactFormSchema.parse(body);

    // Prepare the email content
    let emailContent = `<p><strong>Name:</strong> ${data.name}</p><p><strong>Email:</strong> ${data.email}</p>`;
    if (data.reason === 'Job Opportunity') {
      emailContent += `<p><strong>Job Link:</strong> ${data.jobLink}</p><p><strong>Company Name:</strong> ${data.companyName}</p>`;
    } else if (data.reason === 'Project Collaboration') {
      emailContent += `<p><strong>Project Description:</strong> ${data.projectDescription}</p><p><strong>Timeline:</strong> ${data.timeline}</p>`;
    } else {
      emailContent += `<p><strong>Message:</strong> ${data.message}</p>`;
    }

    // Send the email via Resend
    const emailResponse = await resend.emails.send({
      from: "enquiries@sekaraa.com",
      to: "rgcsekaraa@gmail.com",
      subject: `New Contact Form Submission: ${data.reason}`,
      html: emailContent,
    });

    return NextResponse.json({ success: true, data: emailResponse });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues.map(issue => issue.message).join(', ') }, { status: 400 });
    }
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
