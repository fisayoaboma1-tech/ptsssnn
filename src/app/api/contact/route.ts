import { NextResponse } from "next/server";

let resend: any = null;

function getResendClient() {
  if (!resend && process.env.RESEND_API_KEY) {
    const { Resend } = require("resend");
    resend = new Resend(process.env.RESEND_API_KEY);
  }
  return resend;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, reason, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, and message are required" },
        { status: 400 }
      );
    }

    const resendClient = getResendClient();
    
    if (!resendClient) {
      console.error("Resend API key not configured");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    // Send email using Resend
    const data = await resendClient.emails.send({
      from: "noreply@ptssn.id", // Your verified domain
      to: ["support@ptssn.id"], // Where you want to receive the emails
      subject: `New Contact Form Submission - ${reason || "General Inquiry"}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>New Contact Form Submission</title>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #FDAA3E; color: #1a1a1a; padding: 20px; border-radius: 8px 8px 0 0; }
              .content { background: #f9f9f9; padding: 20px; border: 1px solid #e0e0e0; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #555; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; }
              .value { color: #333; font-size: 14px; margin-top: 5px; }
              .footer { background: #1a1a1a; color: #fff; padding: 15px; border-radius: 0 0 8px 8px; text-align: center; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="header">
              <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Full Name</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">Email Address</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              <div class="field">
                <div class="label">Phone Number</div>
                <div class="value">${phone || "Not provided"}</div>
              </div>
              <div class="field">
                <div class="label">Reason for Contact</div>
                <div class="value">${reason || "Not specified"}</div>
              </div>
              <div class="field">
                <div class="label">Message</div>
                <div class="value" style="white-space: pre-wrap;">${message}</div>
              </div>
            </div>
            <div class="footer">
              <p style="margin: 0;">This message was sent from your website contact form</p>
              <p style="margin: 5px 0 0 0;">PT SSN Compliance Services</p>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json(
      { message: "Email sent successfully", data },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}