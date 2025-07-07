import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "../../../../../lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const { email, password,contact } = await request.json();

    if (!email || !password || !contact) {
      return NextResponse.json(
        { error: "Email and password and contact are required" },
        { status: 400 },
      );
    }
    const userIndb = await prisma.user.findUnique({
      where: { email },
    });
    if (userIndb) {
      return NextResponse.json(
        { error: "Email already exists" },
        { status: 400 },
      );
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        contact,
        password: hashedPassword,
      },
    });

    return NextResponse.json(
      { message: "User registered successfully", user },
      { status: 201 },
    );
  } catch (error: any) {
    console.error("Error creating user:", error);
    if (error.code === "P2002") {
      return NextResponse.json(
        { error: "Email already exists" },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
