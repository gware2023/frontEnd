import axios, { AxiosError } from "axios";
import { PostParams } from "../../types/post/post";
import { PostListParams } from "../../types/post/postList";
import { SearchParams } from "../../types/post/search";
import { VoteParams } from "../../types/post/vote";

export const createPost = async ({
  postReq,
  attachedFile,
  imgFile,
  surveyReq,
}: PostParams) => {
  const postBlob = new Blob([JSON.stringify(postReq)], {
    type: "application/json",
  });
  const surveyBlob = new Blob([JSON.stringify(surveyReq)], {
    type: "application/json",
  });

  const formData = new FormData();
  formData.append("req", postBlob);
  formData.append("attachedFiles", attachedFile, "file.txt");
  formData.append("imgFiles", imgFile, "img.png");
  formData.append("surveyReq", surveyBlob);

  try {
    const response = await axios.post("api/posts", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  } catch (error) {
    if (error instanceof AxiosError) {
      const message = error.response?.data.message;
      throw new Error(message);
    }
  }
};

export const getPost = async (postId: number) => {
  try {
    const response = await axios.get(`/api/posts/${postId}`);

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
    const response = await axios.get(`api/posts/${postId}/attached-files`);
  } catch (error) {
    if (error instanceof AxiosError) {
      const message = error.response?.data.message;
      throw new Error(message);
    }
  }
};

export const getPostImgFiles = async (postId: number) => {
  try {
    const response = await axios.get(`api/posts/${postId}/img-files`);
  } catch (error) {
    if (error instanceof AxiosError) {
      const message = error.response?.data.message;
      throw new Error(message);
    }
  }
};

export const downloadAttachedFile = async (storeFileName: string) => {
  try {
    const response = await axios.get(
      `api/posts/attached-files/${storeFileName}`
    );

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
    const response = await axios.get(`api/posts/img-files/${storeFileName}`);

    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const message = error.response?.data.message;
      throw new Error(message);
    }
  }
};

export const getPosts = async ({ boardId, pageNum }: PostListParams) => {
  try {
    const response = await axios.get("api/posts", {
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

export const updatePost = async ({
  postId,
  postReq,
  attachedFile,
  imgFile,
  surveyReq,
}: PostParams) => {
  const postBlob = new Blob([JSON.stringify(postReq)], {
    type: "application/json",
  });
  const surveyBlob = new Blob([JSON.stringify(surveyReq)], {
    type: "application/json",
  });

  const formData = new FormData();
  formData.append("req", postBlob);
  formData.append("attachedFiles", attachedFile, "changedFile.txt");
  formData.append("imgFiles", imgFile, "changedImg.png");
  formData.append("surveyReq", surveyBlob);

  try {
    const response = await axios.put(`api/posts/${postId}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
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

export const deletePost = async (postId: number) => {
  try {
    const response = await axios.delete(`api/posts/${postId}`);

    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const message = error.response?.data.message;
      throw new Error(message);
    }
  }
};

export const searchPost = async ({
  boardId,
  type,
  keyword,
  page,
}: SearchParams) => {
  try {
    const response = await axios.get("api/posts/search", {
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
    const response = await axios.patch(`api/posts/${postId}/recommend`);

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
    const response = await axios.patch(
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

export const voteSurvey = async ({
  surveyId,
  votedQuestionIdList,
}: VoteParams) => {
  try {
    const response = await axios.patch("api/posts/vote", {
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
    const response = await axios.get(`api/posts/${postId}/survey`);

    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const message = error.response?.data.message;
      throw new Error(message);
    }
  }
};
