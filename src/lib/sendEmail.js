// lib/sendEmail.js
import nodemailer from 'nodemailer';

export default async function sendEmail({ to, subject, html }) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    service: 'Gmail',
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.NODEMAILER_USER,
    to,
    subject,
    html,
  });
}
