'use server'
// /app/api/auth/request-reset/route.js
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import { v4 as uuidv4 } from 'uuid';
import sendEmail from '@/lib/sendEmail'; // nodemailer or similar

export async function POST(req) {
  const { email } = await req.json();
  const user = await dbConnect('users').findOne({ email });
  if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 });

  const token = uuidv4();
  const expires = new Date(Date.now() + 1000 * 60 * 60); // 1 hour expiry

  await dbConnect('users').updateOne(
    { email },
    {
      $set: {
        passwordResetToken: token,
        passwordResetExpires: expires,
      },
    },
    { upsert: true } // Create if not exists
  );

  const resetUrl = `${process.env.NEXT_PUBLIC_APP_URL}/reset-password?token=${token}`;
  await sendEmail({
    to: email,
    subject: 'Reset Your Password',
    html: `<p>Click <a href="${resetUrl}">here</a> to reset your password.</p>
    <p>This link will expire in 1 hour.</p>
    <p>If you did not request this, please ignore this email.</p>
    <p>Thank you!</p>`,
  });

  return NextResponse.json({ message: 'Reset link sent' });
}
