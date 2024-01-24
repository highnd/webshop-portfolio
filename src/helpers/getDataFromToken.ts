import { NextRequest } from "next/server";
import Jwt from "jsonwebtoken";

export const getDataFromToken = (request: NextRequest) => {
  try {
    const token = request.cookies.get("token")?.value || "";
    const decodedtoken: any = Jwt.verify(token, process.env.SECRET_TOKEN!);
    return decodedtoken.id;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
