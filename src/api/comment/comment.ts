import axios, { AxiosError } from "axios";

export const createComment = async (content: string, postId: number) => {
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

export const getComments = async () => {
  try {
    const response = await axios.get("api/comments");

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
