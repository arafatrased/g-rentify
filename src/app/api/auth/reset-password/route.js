// /app/api/auth/reset-password/route.js
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import bcrypt from 'bcrypt';

export async function POST(req) {
  const { token, password } = await req.json();
  console.log(token, password);
  const user = await dbConnect('users').findOne({
    passwordResetToken: token,
    passwordResetExpires: { $gt: new Date() },
  });

  if (!user) return NextResponse.json({ error: 'Invalid or expired token' }, { status: 400 });

  const hashedPassword = await bcrypt.hash(password, 10);

  await dbConnect('users').updateOne(
    { _id: user._id },
    {
      $set: {
        password: hashedPassword,
      },
      $unset: {
        passwordResetToken: '',
        passwordResetExpires: '',
      },
    }
  );

  return NextResponse.json({ message: 'Password updated successfully' });
}
