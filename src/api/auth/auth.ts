import { AxiosError } from "axios";
import API from "../main/main";

interface LoginProps {
  userId: string;
  password: string;
}

export const signIn = async ({ userId, password }: LoginProps) => {
  try {
    const response = await API.post("api/signin", {
      userId,
      password,
    });

    const token = response.data.access_token;
    token && localStorage.setItem("accessToken", token);

    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      const message = error.response?.data.message;
      throw new Error(message);
    }
  }
};
