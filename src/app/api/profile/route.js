import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import User from "@/models/User";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server"; // Не забудьте импортировать NextResponse

export async function PUT(req) {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    const data = await req.json();
    const session = await getServerSession(authOptions);
    const email = session.user.email;

    if ('name' in data) {
      await User.updateOne({ email }, { name: data.name });
    }
    return NextResponse.json({ message: "User updated." }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error updating user." }, { status: 500 });
  }
}

export async function GET() {
  mongoose.connect(process.env.MONGODB_URI);
  const session = await getServerSession(authOptions);
  const email = session.user.email;
  return Response.json(
    await User.findOne({ email })
  )
}
