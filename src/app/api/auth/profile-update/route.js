"use server";

import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";


// export const dynamic = 'force-dynamic'; // Force revalidation for this route
// export const revalidate = 0; // Disable static generation for this route

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get('email');
    if (!email) return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    const user = await dbConnect('users').findOne({ email });
    if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 });
    return NextResponse.json(user);
}

export async function POST(req) {
    const { email, name, address, role, photoURL, phone, bio, govtId } = await req.json();
    const user = await dbConnect('users').findOne({ email });
    if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 });
    await dbConnect('users').updateOne(
        { email },
        {
            $set: {
                name,
                address,
                photoURL,
                phone,
                bio,
                govtId,
                role,
                updatedAt: new Date()

            }
        },
        { upsert: true } // Create if not exists
    );
    return NextResponse.json({ message: 'Profile updated successfully' });
    // return NextResponse.json({message: 'Profile updated successfully'}, {status: 200}); 
}

//patch for user update
export async function PATCH(req) {
    const { email, ...updateData } = await req.json();

    if (!email) return NextResponse.json({ error: 'Email is required' }, { status: 400 });

    const user = await dbConnect('users').findOne({ email });
    if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 });

    await dbConnect('users').updateOne(
        { email },
        {
            $set: {
                ...updateData,
                updatedAt: new Date()
            }
        }
    );

    return NextResponse.json({ message: 'Profile partially updated successfully' });
}