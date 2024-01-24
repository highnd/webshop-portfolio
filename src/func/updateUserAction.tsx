import axios from "axios";

export const updateUserAction = async (formData: any) => {
  try {
    const { data } = await axios.put(
      "/api/products/admin/updateUser",
      formData
    );

    return data;
  } catch (error) {
    console.log(error);
    throw new Error("failed to update user");
  }
};
