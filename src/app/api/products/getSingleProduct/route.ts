import { getDataFromToken } from "@/helpers/getDataFromToken";
import { connect } from "@/db/dbConfig";
import Product from "@/models/productModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { id } = reqBody;
    const productData = await Product.findById(id);

    const response = NextResponse.json({
      message: "product fined successfully",
      success: true,
      productData,
    });
    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
