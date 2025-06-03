// src/app/api/send_intake/route.js
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const ownerEmail = 'info@the-digital-era.com'; // Owner's email
const fromEmail = 'onboarding@resend.dev'; // As requested

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      fullName,
      email,
      businessStage,
      businessStageOther,
      lookingFor,
      whyAgency,
      packageKnowledge,
      selectedPackage
    } = body;

    // Basic validation (you might want more robust validation)
    if (!fullName || !email || !businessStage || !lookingFor) {
      return new Response(JSON.stringify({ error: 'Missing required fields.' }), { status: 400 });
    }

    const subject = `New Intake Form Submission: ${fullName} - ${selectedPackage || 'Package Inquiry'}`;

    let htmlBody = `
      <h1>New Business Development Intake Form</h1>
      <p><strong>Selected Package:</strong> ${selectedPackage || 'Not specified / Inquiry'}</p>
      <hr>
      <p><strong>Full Name:</strong> ${fullName}</p>
      <p><strong>Email Address:</strong> ${email}</p>
      <p><strong>Business Stage:</strong> ${businessStage === 'Other' ? `Other - ${businessStageOther}` : businessStage}</p>
      <p><strong>What they're looking for/struggling with:</strong></p>
      <p>${lookingFor.replace(/\n/g, '<br>')}</p>
    `;

    if (whyAgency) {
      htmlBody += `
        <p><strong>Why they feel Digital Era is the right agency:</strong></p>
        <p>${whyAgency.replace(/\n/g, '<br>')}</p>
      `;
    }

    if (packageKnowledge) {
        htmlBody += `<p><strong>Package Knowledge:</strong> ${packageKnowledge}</p>`;
    }

    const { data, error } = await resend.emails.send({
      from: `Digital Era Onboarding <${fromEmail}>`,
      to: [ownerEmail],
      reply_to: email, // Set reply-to to the user's email
      subject: subject,
      html: htmlBody,
    });

    if (error) {
      console.error('Resend Error:', error);
      return new Response(JSON.stringify({ error: 'Failed to send email.' }), { status: 500 });
    }

    // console.log('Email sent successfully:', data);
    return new Response(JSON.stringify({ message: 'Intake form submitted successfully!' }), { status: 200 });

  } catch (error) {
    console.error('API Error:', error);
    return new Response(JSON.stringify({ error: 'An unexpected error occurred.' }), { status: 500 });
  }
}   