import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, concern } = body;

    // Validate required fields
    if (!name || !phone || !concern) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Email content
    const subject = `New Appointment Request from ${name}`;
    const emailBody = `New Appointment Request

Patient Details:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: ${name}
Phone: ${phone}

Patient Concern:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${concern}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
This email was sent from the Kinetara Physiotherapy website contact form.`;

    const resendApiKey = process.env.RESEND_API_KEY;
    
    if (!resendApiKey) {
      return NextResponse.json(
        { error: "RESEND_API_KEY is not configured. Please add it to your environment variables." },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);
    
    const { data, error } = await resend.emails.send({
      from: "Kinetara Website <onboarding@resend.dev>", // You can verify your domain later
      to: "kinetaraphysiotherapy@gmail.com",
      subject: subject,
      html: `
        <h2>New Appointment Request</h2>
        <p><strong>Patient Name:</strong> ${name}</p>
        <p><strong>Phone Number:</strong> ${phone}</p>
        <h3>Patient Concern:</h3>
        <p>${concern.replace(/\n/g, "<br>")}</p>
        <hr>
        <p><em>This email was sent from the Kinetara Physiotherapy website contact form.</em></p>
      `,
      text: emailBody,
    });

    if (error) {
      throw new Error(error.message || "Failed to send email");
    }
    
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}

