import axios from "axios";

export const identifyUser = async () => {
  const { data } = await axios.get("/api/users/identify");

  return data;
};
