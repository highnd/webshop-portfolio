import { connect } from "@/db/dbConfig";
import Messages from "@/models/messages";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { name, email, message, subject, userId } = reqBody;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Incomplete information in the request body" },
        { status: 400 }
      );
    }
    const newMessage = new Messages({
      name,
      email,
      subject: subject || "",
      userId: userId || null,
      message,
    });
    const savedMessage = await newMessage.save();

    const user = await User.findOne({ email });
    if (user) {
      await User.findByIdAndUpdate(user._id, {
        $push: { messages: savedMessage._id },
      });
    }
    //  save info to database

    return NextResponse.json(
      {
        message: "message sent successfully",
        success: true,
        user: user || "unknown",
      },
      { status: 201 }
    );

    // catch errors
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
