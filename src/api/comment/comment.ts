import axios, { AxiosError } from "axios";
import { CommentParams } from "../../types/comment/comment";

export const createComment = async ({ content, postId }: CommentParams) => {
  try {
    const response = await axios.post("api/comments", {
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

export const getComments = async (postId: number) => {
  try {
    const response = await axios.get("api/comments", {
      params: {
        postId,
      },
    });

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
    const response = await axios.delete(`api/comments/${commentId}`);

    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const message = error.response?.data.message;
      throw new Error(message);
    }
  }
};
