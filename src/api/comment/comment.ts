import { AxiosError } from "axios";
import API from "../main/main";

export const createComment = async (content: string, postId: number) => {
  try {
    const response = await API.post("api/comments", {
      content,
      postId,
    });

    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const message = error.response?.data.message;
      throw new Error(message);
    }
  }
};

export const getComments = async () => {
  try {
    const response = await API.get("api/comments");

    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const message = error.response?.data.message;
      throw new Error(message);
    }
  }
};

export const deleteComment = async (commentId: number) => {
  try {
    const response = await API.delete(`api/comments/${commentId}`);

    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const message = error.response?.data.message;
      throw new Error(message);
    }
  }
};
