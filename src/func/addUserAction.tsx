import axios from "axios";

export const addUserAction = async (formData: any) => {
  try {
    const { data } = await axios.post("/api/users/admin/addUser", formData);
    console.log(data);
    return data;
  } catch (error) {
    throw new Error("failed to create user");
  }
};
