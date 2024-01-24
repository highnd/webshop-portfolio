import axios from "axios";

export const updateProductAction = async (formData: any) => {
  try {
    const { data } = await axios.put(
      "/api/products/admin/updateProduct",
      formData
    );

    return data;
  } catch (error) {
    console.log(error);
    throw new Error("failed to update product");
  }
};
