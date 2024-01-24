import axios from "axios";

export const deleteUserAction = async (id: any) => {
  try {
    const { data } = await axios.post("/api/users/admin/deleteUser", {
      id,
    });
    console.log(data);
    return data;
  } catch (error) {
    throw new Error("failed to delete user");
  }
};
