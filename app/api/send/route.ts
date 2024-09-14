// /app/api/email/send.ts
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

// Initialize Resend with your API key
const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

// Validation schema for the request body
const contactFormSchema = z.object({
  reason: z.enum(['Job Opportunity', 'Project Collaboration', 'Feedback', 'Just Saying Hi']),
  jobLink: z.string().optional(),
  companyName: z.string().optional(),
  projectDescription: z.string().optional(),
  timeline: z.string().optional(),
  message: z.string().optional(),
  name: z.string().min(1, 'Please enter your name'),
  email: z.string().email('Please enter a valid email')
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validate the request body using Zod
    const data = contactFormSchema.parse(body);

    // Prepare the email content based on the reason
    let emailContent = `<p><strong>Name:</strong> ${data.name}</p><p><strong>Email:</strong> ${data.email}</p>`;
    if (data.reason === 'Job Opportunity') {
      emailContent += `<p><strong>Job Link:</strong> ${data.jobLink}</p><p><strong>Company Name:</strong> ${data.companyName}</p>`;
    } else if (data.reason === 'Project Collaboration') {
      emailContent += `<p><strong>Project Description:</strong> ${data.projectDescription}</p><p><strong>Timeline:</strong> ${data.timeline}</p>`;
    } else if (data.reason === 'Feedback' || data.reason === 'Just Saying Hi') {
      emailContent += `<p><strong>Message:</strong> ${data.message}</p>`;
    }

    // Send the email via Resend
    const emailResponse = await resend.emails.send({
      from: "enquiries@sekaraa.com", // Use a verified sender email
      to: "rgcsekaraa@gmail.com",    // The receiver email (e.g., your support email)
      subject: `New Contact Form Submission: ${data.reason}`,
      html: emailContent,
    });

    // Return success response
    return NextResponse.json({ success: true, data: emailResponse });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues.map(issue => issue.message).join(', ') }, { status: 400 });
    }

    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
