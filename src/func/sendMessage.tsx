import axios from "axios";

export const sendMessage = async (formData: any) => {
  try {
    const { data } = await axios.post("/api/users/sendMessage", formData);
    console.log(data);
    return data;
  } catch (error) {
    throw new Error("failed to send message");
  }
};
