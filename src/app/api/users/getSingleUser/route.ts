import { getDataFromToken } from "@/helpers/getDataFromToken";
import { connect } from "@/db/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { id } = reqBody;
    const userData = await User.findById(id);

    const response = NextResponse.json({
      message: "user fined successfully",
      success: true,
      userData,
    });
    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
