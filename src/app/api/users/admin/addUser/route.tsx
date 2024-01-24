import { connect } from "@/db/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { username, email, password, phone, address, isAdmin, isActive } =
      reqBody;

    //  check for user role
    // const UserId = await getDataFromToken(request);
    // const userData = await User.findById(UserId);
    // if (userData.role != "admin") {
    //   return NextResponse.json(
    //     { error: "only admin can add users" },
    //     { status: 500 }
    //   );
    // }

    //    check if user already signed up
    const isUserExist = await User.findOne({ email });
    if (isUserExist) {
      return NextResponse.json(
        { error: "user already exist" },
        { status: 400 }
      );
    }

    // hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    //  save info to database
    const newUser = new User({
      username,
      email,
      phone,
      address,
      isAdmin,
      isActive,
      password: hashedPassword,
    });
    const savedUser = await newUser.save();

    return NextResponse.json(
      { message: "user created successfully", success: true, user: savedUser },
      { status: 201 }
    );

    // catch errors
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
