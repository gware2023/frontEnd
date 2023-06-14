import axios, { AxiosError } from "axios";
import API from "../main/main";
import { headers } from "next/dist/client/components/headers";
import { contextType } from "react-quill";

export const createPost = async (
  boardId: number,
  title: string,
  content: string
) => {
  const formData = new FormData();

  try {
    const response = await API.post(
      "api/posts",
      {
        boardId,
        title,
        content,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  } catch (error) {
    if (error instanceof AxiosError) {
      const message = error.response?.data.message;
      throw new Error(message);
    }
  }
};

export const getPost = async (postId: number) => {
  try {
    const response = await API.get(`/api/posts/${postId}`);

    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const message = error.response?.data.message;
      throw new Error(message);
    }
  }
};

export const getPostAttachedFiles = async (postId: number) => {
  try {
    const response = await API.get(`api/posts/${postId}/attached-files`);
  } catch (error) {
    if (error instanceof AxiosError) {
      const message = error.response?.data.message;
      throw new Error(message);
    }
  }
};

export const getPostImgFiles = async (postId: number) => {
  try {
    const response = await API.get(`api/posts/${postId}/img-files`);
  } catch (error) {
    if (error instanceof AxiosError) {
      const message = error.response?.data.message;
      throw new Error(message);
    }
  }
};

export const downloadAttachedFile = async (storeFileName: string) => {
  try {
    const response = await API.get(`api/posts/attached-files/${storeFileName}`);

    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const message = error.response?.data.message;
      throw new Error(message);
    }
  }
};

export const downloadImgFile = async (storeFileName: string) => {
  try {
    const response = await API.get(`api/posts/img-files/${storeFileName}`);

    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const message = error.response?.data.message;
      throw new Error(message);
    }
  }
};

export const getPosts = async (boardId: number, pageNum: number) => {
  try {
    const response = await API.get("api/posts", {
      params: {
        boardId,
        pageNum,
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

export const updatePost = async (postId: number) => {
  try {
    const response = await API.put(`api/posts/${postId}`, {});

    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const message = error.response?.data.message;
      throw new Error(message);
    }
  }
};

export const deletePost = async (postId: number) => {
  try {
    const response = await API.delete(`api/posts/${postId}`);

    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const message = error.response?.data.message;
      throw new Error(message);
    }
  }
};

export const searchPost = async (
  boardId: number,
  type: number,
  keyword: string,
  page: number
) => {
  try {
    const response = await API.get("api/posts/search", {
      params: {
        boardId,
        type,
        keyword,
        page,
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

export const recommendPost = async (postId: number) => {
  try {
    const response = await API.patch(`api/posts/${postId}/recommend`);

    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const message = error.response?.data.message;
      throw new Error(message);
    }
  }
};

export const cancelRecommendPost = async (postId: number) => {
  try {
    const response = await API.patch(
      `api/posts/${postId}/cancel-recommendation`
    );

    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const message = error.response?.data.message;
      throw new Error(message);
    }
  }
};

export const voteSurvey = async (
  surveyId: number,
  votedQuestionIdList: number[]
) => {
  try {
    const response = await API.patch("api/posts/vote", {
      surveyId,
      votedQuestionIdList,
    });

    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const message = error.response?.data.message;
      throw new Error(message);
    }
  }
};

export const getSurvey = async (postId: number) => {
  try {
    const response = await API.get(`api/posts/${postId}/survey`);

    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const message = error.response?.data.message;
      throw new Error(message);
    }
  }
};
