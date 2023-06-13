import connectDB from "@/utils/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "@/models/User";

export const POST = async (request) =>{
const {name, email, password} = await request.json();

await connectDB();

const hashedPassword = await bcrypt.hash(password, 6);

const newUser = new User(
    {
        name,
        email,
        password: hashedPassword,
    }
);

try{

    await newUser.save();

    return new NextResponse({message: "User created successfully"}, {status: 201});
}catch(err){
    return new NextResponse(err.message, {status: 500})
}
}