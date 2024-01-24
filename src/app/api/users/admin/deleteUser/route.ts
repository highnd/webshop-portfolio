import { connect } from "@/db/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { id } = reqBody;

    //  check for user role
    // const UserId = await getDataFromToken(request);
    // const userData = await User.findById(UserId);
    // if (userData.role != "admin") {
    //   return NextResponse.json(
    //     { error: "only admin can add users" },
    //     { status: 500 }
    //   );
    // }
    const user = await User.findById(id);

    if (!user) {
      return NextResponse.json(
        { error: "user does not exist or deleted already" },
        { status: 400 }
      );
    }

    await User.findByIdAndDelete(id);

    return NextResponse.json(
      {
        message: "User deleted successfully",
        success: true,
      },
      { status: 201 }
    );

    // catch errors
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
