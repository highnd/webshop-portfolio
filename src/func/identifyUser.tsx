import axios from "axios";

export const identifyUser = async () => {
  try {
    const { data } = await axios.get("/api/users/identify");

    return data;
  } catch (error) {
    throw new Error("failed to identify token");
  }
};
