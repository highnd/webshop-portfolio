import { connect } from "@/db/dbConfig";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { page, searchQuery } = reqBody;
    const ITEM_PER_PAGE = 5;

    //  check for user role
    // const UserId = await getDataFromToken(request);
    // const userData = await User.findById(UserId);
    // if (userData.role != "admin") {
    //   return NextResponse.json(
    //     { error: "only admin can see users" },
    //     { status: 500 }
    //   );
    // }

    // search // "i" : case insensitive
    const regex = new RegExp(searchQuery, "i");

    let query: any = { username: { $regex: regex } };
    let total: number;
    let users: any[];

    if (searchQuery) {
      // If there's a search query, fetch all matching users
      users = await User.find(query);
      total = users.length;
    } else {
      // If there's no search query, apply pagination
      total = await User.find(query).count();
      users = await User.find(query)
        .limit(ITEM_PER_PAGE)
        .skip(ITEM_PER_PAGE * (page - 1));
    }

    if (!users) {
      return NextResponse.json({ error: "there is no user" }, { status: 404 });
    }

    const response = NextResponse.json({
      message: "list of users",
      success: true,
      users,
      total,
    });

    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
