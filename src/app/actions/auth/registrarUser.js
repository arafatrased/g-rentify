'use server'

import dbConnect from "@/lib/dbConnect"
import bcrypt from "bcrypt"

export const registrarUser = async (payload) => {
    const { name, email, password } = payload;
    if (!name || !email || !password) {
        throw new Error("Please provide all the required fields");
    };
    const user = await dbConnect("users").findOne({ email });
    if (!user) {
        const hashedPassword = await bcrypt.hash(password, 10);
        payload.password = hashedPassword;
        const result = await dbConnect("users").insertOne(payload);
        result.insertedId = result.insertedId.toString();
        return result;
    }
    return { success: false};
}