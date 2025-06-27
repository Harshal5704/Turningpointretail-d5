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
    const emailResponse = await resend.emails.send({
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
            .header { background: linear-gradient(135deg, #059669, #047857); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .field { margin-bottom: 20px; padding: 15px; background: white; border-radius: 8px; border-left: 4px solid #059669; }
            .field-label { font-weight: bold; color: #047857; margin-bottom: 5px; }
            .field-value { color: #333; }
            .message-box { background: white; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb; margin-top: 20px; }
            .footer { text-align: center; margin-top: 30px; padding: 20px; color: #666; border-top: 1px solid #e5e7eb; }
            .reply-button { display: inline-block; background: #059669; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 20px 0; }
            .contact-info { background: #ecfdf5; padding: 15px; border-radius: 8px; margin: 15px 0; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>🎯 New Contact Form Submission</h1>
            <p>Turning Point Retail Solutions</p>
          </div>
          
          <div class="content">
            <div class="contact-info">
              <h3>📧 Quick Reply</h3>
              <p>Click reply to respond directly to: <strong><a href="mailto:${email}">${email}</a></strong></p>
            </div>

            <div class="field">
              <div class="field-label">👤 Full Name:</div>
              <div class="field-value">${name}</div>
            </div>

            <div class="field">
              <div class="field-label">📧 Email Address:</div>
              <div class="field-value"><a href="mailto:${email}">${email}</a></div>
            </div>

            ${
              company
                ? `
            <div class="field">
              <div class="field-label">🏢 Company:</div>
              <div class="field-value">${company}</div>
            </div>
            `
                : ""
            }

            ${
              phone
                ? `
            <div class="field">
              <div class="field-label">📞 Phone Number:</div>
              <div class="field-value"><a href="tel:${phone}">${phone}</a></div>
            </div>
            `
                : ""
            }

            <div class="message-box">
              <div class="field-label">💬 Message:</div>
              <div class="field-value" style="white-space: pre-wrap; margin-top: 10px;">${message}</div>
            </div>

            <div class="footer">
              <p><strong>Turning Point Retail Solutions</strong></p>
              <p>Office no: 2602, 26th floor, Diamond twin towers, Koh Pich, Phnom Penh, Cambodia</p>
              <p>📧 sarvajithadyanthaya@gmail.com | 🌐 <a href="https://turningpointretail.com">turningpointretail.com</a></p>
              <p><em>Transforming Retail Excellence Across Southeast Asia</em></p>
            </div>
          </div>
        </body>
        </html>
      `,
    })

    if (emailResponse.error) {
      console.error("Resend error:", emailResponse.error)
      return NextResponse.json({ error: "Failed to send email. Please try again later." }, { status: 500 })
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your message! We will get back to you within 24 hours.",
        emailId: emailResponse.data?.id,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Contact form error:", error)

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Please check your form data and try again.", details: error.errors },
        { status: 400 },
      )
    }

    return NextResponse.json({ error: "Something went wrong. Please try again later." }, { status: 500 })
  }
}
