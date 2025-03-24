import bcrypt from "bcryptjs";
// bcryptjs is a library to hash passwords
import dbConnect from "@/lib/dbConnect";

export const loginUser = async (payload) => {
    const { email, password } = payload;
    if (!email || !password) {
        return null;
    };
    const user = await dbConnect("users").findOne({ email });
    if (!user) return null;
    const PassMatch = await bcrypt.compare(password, user.password);
    if (!PassMatch) {
        return null;
    }
    return user;
}