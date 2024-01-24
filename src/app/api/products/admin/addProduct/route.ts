import { connect } from "@/db/dbConfig";
import Product from "@/models/productModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { title, desc, price, stock, color, size } = reqBody;

    //  check for user role
    // const UserId = await getDataFromToken(request);
    // const userData = await User.findById(UserId);
    // if (userData.role != "admin") {
    //   return NextResponse.json(
    //     { error: "only admin can add users" },
    //     { status: 500 }
    //   );
    // }

    //  save info to database
    const newProduct = new Product({
      title,
      desc,
      price,
      stock,
      color,
      size,
    });
    const savedProduct = await newProduct.save();

    return NextResponse.json(
      {
        message: "product created successfully",
        success: true,
        user: savedProduct,
      },
      { status: 201 }
    );

    // catch errors
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
