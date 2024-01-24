import { connect } from "@/db/dbConfig";
import Product from "@/models/productModel";
import { NextRequest, NextResponse } from "next/server";
// import bcryptjs from "bcryptjs";
// import jwt from "jsonwebtoken";

connect();

export async function PUT(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { title, desc, price, stock, color, size, _id } = reqBody;

    // Check if the user exists
    const existingProduct = await Product.findById(_id);

    if (!existingProduct) {
      return NextResponse.json({ error: "product not found" }, { status: 404 });
    }

    // Only update allowed fields
    existingProduct.set({
      title: title || existingProduct.title,
      desc: desc || existingProduct.desc,
      price: price || existingProduct.price,
      stock: stock || existingProduct.stock,
      color: color !== undefined ? color : existingProduct.color,
      size: size !== undefined ? size : existingProduct.size,
    });

    // Save the updated user to the database
    const updatedProduct = await existingProduct.save();

    return NextResponse.json(
      {
        message: "product updated successfully",
        success: true,
        product: updatedProduct,
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
