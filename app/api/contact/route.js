import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    // Validation
    if (!name || !email || !message) {
      return Response.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Send email to ICAN
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'ican.connects@outlook.com',
      subject: `New Message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    // Optional: Send confirmation email to the sender
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
      subject: 'We received your message',
      html: `
        <h2>Thank you for contacting ICAN!</h2>
        <p>Hi ${name},</p>
        <p>We have received your message and will get back to you soon.</p>
        <p>Best regards,<br>ICAN Team</p>
      `,
    });

    return Response.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email error:', error);
    return Response.json(
      { success: false, error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
