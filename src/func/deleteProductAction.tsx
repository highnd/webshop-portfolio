import axios from "axios";

export const deleteProductAction = async (id: any) => {
  try {
    const { data } = await axios.post("/api/products/admin/deleteProduct", {
      id,
    });
    console.log(data);
    return data;
  } catch (error) {
    throw new Error("failed to delete product");
  }
};
