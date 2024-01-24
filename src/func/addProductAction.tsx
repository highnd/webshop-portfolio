import axios from "axios";

export const addProductAction = async (formData: any) => {
  try {
    const { data } = await axios.post(
      "/api/products/admin/addProduct",
      formData
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("failed to create product");
  }
};
