import API from "../main/main";

export const getPosts = async () => {
  try {
    const response = await API.get(`/api/boards`, {
      headers: {
        // Authorization: `Bearer ${localStorage.getItem("user")}`, >> jwt 필요할 시 사용
        "Content-Length": 202,
      },
    });
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error(String(error));
    }
  }
};
