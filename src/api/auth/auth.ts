import API from "../main/main";

interface LoginProps {
  userId: string;
  password: string;
}

export const login = async ({ userId, password }: LoginProps) => {
  try {
    const response = await API.post("url", {
      userId,
      password,
    });
    const token = response.data.access_token;
    token && localStorage.setItem("user", token);
    return response;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error(String(error));
    }
  }
};
