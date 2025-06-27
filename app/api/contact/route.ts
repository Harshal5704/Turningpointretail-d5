import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import { z } from "zod"

const resend = new Resend("re_NBEjEnDn_Ar1eb2NHioM9RX3czfiXTA9U")

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate the request body
    const validatedData = contactSchema.parse(body)

    const { name, email, company, phone, message } = validatedData

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "info@turningpointretail.com",
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Contact Form Submission</title>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #059669, #0d9488); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center; }
              .content { background: #f8fafc; padding: 30px; border-radius: 0 0 10px 10px; }
              .field { margin-bottom: 20px; padding: 15px; background: white; border-radius: 8px; border-left: 4px solid #059669; }
              .field-label { font-weight: bold; color: #059669; margin-bottom: 5px; }
              .field-value { color: #374151; }
              .message-box { background: white; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb; margin-top: 10px; }
              .footer { text-align: center; margin-top: 30px; padding: 20px; color: #6b7280; font-size: 14px; }
              .reply-button { display: inline-block; background: #059669; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 20px 0; }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>New Contact Form Submission</h1>
              <p>Turning Point Retail Solutions</p>
            </div>
            
            <div class="content">
              <div class="field">
                <div class="field-label">Name:</div>
                <div class="field-value">${name}</div>
              </div>
              
              <div class="field">
                <div class="field-label">Email:</div>
                <div class="field-value">
                  <a href="mailto:${email}" style="color: #059669; text-decoration: none;">${email}</a>
                </div>
              </div>
              
              ${
                company
                  ? `
              <div class="field">
                <div class="field-label">Company:</div>
                <div class="field-value">${company}</div>
              </div>
              `
                  : ""
              }
              
              ${
                phone
                  ? `
              <div class="field">
                <div class="field-label">Phone:</div>
                <div class="field-value">${phone}</div>
              </div>
              `
                  : ""
              }
              
              <div class="field">
                <div class="field-label">Message:</div>
                <div class="message-box">${message.replace(/\n/g, "<br>")}</div>
              </div>
              
              <div style="text-align: center; margin: 30px 0;">
                <a href="mailto:${email}" class="reply-button">Reply to ${name}</a>
              </div>
            </div>
            
            <div class="footer">
              <p>This email was sent from the contact form on turningpointretail.com</p>
              <p>You can reply directly to this email to respond to ${name}</p>
            </div>
          </body>
        </html>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json({ error: "Failed to send email. Please try again later." }, { status: 500 })
    }

    return NextResponse.json({ message: "Email sent successfully!", data }, { status: 200 })
  } catch (error) {
    console.error("Contact form error:", error)

    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Validation failed", details: error.errors }, { status: 400 })
    }

    return NextResponse.json({ error: "Internal server error. Please try again later." }, { status: 500 })
  }
}
