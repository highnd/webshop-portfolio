import { getDataFromToken } from "@/helpers/getDataFromToken";
import { connect } from "@/db/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(request: NextRequest) {
  try {
    const UserId = await getDataFromToken(request);
    const userData = await User.findById(UserId);

    const response = NextResponse.json({
      message: "user identified successfully",
      success: true,
      userData,
    });
    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
