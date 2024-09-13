// import type { NextApiRequest, NextApiResponse } from 'next';
// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method === 'POST') {
//     const { name, email, contactReason, jobLink, companyName, projectDescription, message, timeline } = req.body;

//     try {
//       const data = await resend.emails.send({
//         from: 'chan <onboarding@resend.dev>',
//         to: ['rgcsekaraa@gmail.com'],
//         subject: `New Contact Form Submission: ${contactReason}`,
//         html: `
//           <h1>New Contact Form Submission</h1>
//           <p><strong>Name:</strong> ${name}</p>
//           <p><strong>Email:</strong> ${email}</p>
//           <p><strong>Contact Reason:</strong> ${contactReason}</p>
//           ${jobLink ? `<p><strong>Job Link:</strong> ${jobLink}</p>` : ''}
//           ${companyName ? `<p><strong>Company Name:</strong> ${companyName}</p>` : ''}
//           ${projectDescription ? `<p><strong>Project Description:</strong> ${projectDescription}</p>` : ''}
//           ${timeline ? `<p><strong>Timeline:</strong> ${timeline}</p>` : ''}
//           <p><strong>Message:</strong> ${message}</p>
//         `,
//       });

//       console.log('Email sent:', data);
//       res.status(200).json({ message: 'Email sent successfully' });
//     } catch (error) {
//       console.error('Error sending email:', error);
//       res.status(500).json({ message: 'Error sending email' });
//     }
//   } else {
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }