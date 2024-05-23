import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import User from "@/models/User";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import UserInfo from "@/models/UserInfo";

export async function PUT(req) {
  mongoose.connect(process.env.MONGODB_URI);
  const data = await req.json();
  const session = await getServerSession(authOptions);
  const email = session.user.email;

    await User.updateOne({ email }, { name: data.name });

  return Response.json(true);

}
export async function GET() {
  mongoose.connect(process.env.MONGODB_URI);
  const session = await getServerSession(authOptions);
  const email = session.user.email;
  return Response.json(
    await User.findOne({ email },)
  );


}
