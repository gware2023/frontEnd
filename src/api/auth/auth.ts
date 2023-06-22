import axios, { AxiosError } from "axios";
import setToken from "../../lib/auth/setToken";

interface LoginProps {
  userId: string;
  password: string;
}

export const signIn = async ({ userId, password }: LoginProps) => {
  try {
    const response = await axios.post("api/signin", {
      userId,
      password,
    });

    setToken({ key: "accessToken", value: response.data.access_token });

    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const message = error.response?.data.message;
      throw new Error(message);
    }
  }
};
