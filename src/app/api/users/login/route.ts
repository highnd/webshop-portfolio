import { connect } from "@/db/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;
    // check if user exist
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { error: "user does not exist" },
        { status: 400 }
      );
    }
    //  check if password is correct
    const validPassword = await bcryptjs.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json({ error: "password is wrong" }, { status: 400 });
    }

    // create jwt token data
    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
    };
    // create token and send it from cookie
    const token = await jwt.sign(tokenData, process.env.SECRET_TOKEN!, {
      expiresIn: "1d",
    });

    const response = NextResponse.json({
      message: "welcome! login successful",
      success: true,
      user,
    });
    response.cookies.set("token", token, { httpOnly: true });

    return response;

    // catch errors
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
