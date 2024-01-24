import axios from "axios";
import React from "react";

export const getAllProducts = async (page: any, searchQuery: any) => {
  try {
    const { data } = await axios.post("/api/products/getallProducts", {
      page,
      searchQuery,
    });
    console.log(data);
    return data;
  } catch (error) {
    throw new Error("failed to get all products ");
  }
};
