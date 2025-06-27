import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend("re_NBEjEnDn_Ar1eb2NHioM9RX3czfiXTA9U")

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, phone, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required" }, { status: 400 })
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "sarvajithadyanthaya@gmail.com",
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #1f2937; margin-bottom: 20px; border-bottom: 3px solid #10b981; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            
            <div style="margin-bottom: 25px;">
              <h3 style="color: #374151; margin-bottom: 15px;">Contact Details:</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #4b5563; width: 120px;">Name:</td>
                  <td style="padding: 8px 0; color: #1f2937;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Email:</td>
                  <td style="padding: 8px 0;">
                    <a href="mailto:${email}" style="color: #10b981; text-decoration: none;">${email}</a>
                  </td>
                </tr>
                ${
                  company
                    ? `
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Company:</td>
                  <td style="padding: 8px 0; color: #1f2937;">${company}</td>
                </tr>
                `
                    : ""
                }
                ${
                  phone
                    ? `
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Phone:</td>
                  <td style="padding: 8px 0; color: #1f2937;">${phone}</td>
                </tr>
                `
                    : ""
                }
              </table>
            </div>

            <div style="margin-bottom: 25px;">
              <h3 style="color: #374151; margin-bottom: 15px;">Message:</h3>
              <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; border-left: 4px solid #10b981;">
                <p style="color: #1f2937; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
              </div>
            </div>

            <div style="background-color: #ecfdf5; padding: 20px; border-radius: 8px; border: 1px solid #10b981;">
              <h4 style="color: #065f46; margin: 0 0 10px 0;">Quick Reply:</h4>
              <p style="color: #047857; margin: 0; font-size: 14px;">
                Click reply to respond directly to <strong>${name}</strong> at 
                <a href="mailto:${email}" style="color: #10b981;">${email}</a>
              </p>
            </div>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center;">
              <p style="color: #6b7280; font-size: 12px; margin: 0;">
                This email was sent from the contact form on 
                <a href="https://turningpointretail.com" style="color: #10b981;">turningpointretail.com</a>
              </p>
            </div>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json({ error: "Failed to send email. Please try again later." }, { status: 500 })
    }

    return NextResponse.json({ message: "Email sent successfully", data }, { status: 200 })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Internal server error. Please try again later." }, { status: 500 })
  }
}
