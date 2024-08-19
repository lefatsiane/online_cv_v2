import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const fromEmail = process.env.FROM_EMAIL;
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  try {
    const info = await transporter.sendMail({
      from: fromEmail,
      to: ["lefataleni@gmail.com", email],
      subject: subject,
      html: `
        <h1>${subject}</h1>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ messageId: info.messageId });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
