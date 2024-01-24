import axios from "axios";

export const getSingleProduct = async (id: any) => {
  try {
    const { data } = await axios.post("/api/products/getSingleProduct", { id });

    return data;
  } catch (error) {
    throw new Error("failed to find this product");
  }
};
