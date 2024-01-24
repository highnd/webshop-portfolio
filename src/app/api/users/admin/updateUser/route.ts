import { connect } from "@/db/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
// import bcryptjs from "bcryptjs";
// import jwt from "jsonwebtoken";

connect();

export async function PUT(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { _id, username, email, phone, address, isAdmin, isActive } = reqBody;

    // Check if the user exists
    const existingUser = await User.findById(_id);

    if (!existingUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Only update allowed fields
    existingUser.set({
      username: username || existingUser.username,
      email: email || existingUser.email,
      phone: phone || existingUser.phone,
      address: address || existingUser.address,
      isAdmin: isAdmin !== undefined ? isAdmin : existingUser.isAdmin,
      isActive: isActive !== undefined ? isActive : existingUser.isActive,
    });

    // Save the updated user to the database
    const updatedUser = await existingUser.save();

    return NextResponse.json(
      {
        message: "User updated successfully",
        success: true,
        user: updatedUser,
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
