import axios from "axios";

export const getSingleUser = async (id: any) => {
  try {
    const { data } = await axios.post("/api/users/getSingleUser", { id });

    return data;
  } catch (error) {
    throw new Error("failed to find this user");
  }
};
