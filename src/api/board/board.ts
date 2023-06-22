import axios, { AxiosError } from "axios";

export const createBoard = async (name: string) => {
  try {
    const response = await axios.post("api/boards", {
      name,
    });

    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const message = error.response?.data.message;
      throw new Error(message);
    }
  }
};

export const getBoards = async () => {
  try {
    const response = await axios.get("api/boards");

    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const message = error.response?.data.message;
      throw new Error(message);
    }
  }
};

export const deleteBoard = async (boardId: number) => {
  try {
    const response = await axios.delete(`api/boards/${boardId}`);
  } catch (error) {
    if (error instanceof AxiosError) {
      const message = error.response?.data.message;
      throw new Error(message);
    }
  }
};
