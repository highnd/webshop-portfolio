import axios from "axios";

export const getAllUsers = async (page: any, searchQuery: any) => {
  try {
    const { data } = await axios.post("/api/users/getusers", {
      page,
      searchQuery,
    });
    console.log(data);
    return data;
  } catch (error) {
    throw new Error("failed to get all users ");
  }
};
