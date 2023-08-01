export const sample_posts = Array.from(Array(126), (v, i) => makePost(i));

export const sample_comments = Array.from(Array(23), (v, i) => makeComment(i));

function makePost(num: number) {
  return {
    postId: num + 1,
    title: `Post ${num + 1}`,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam cupiditate, saepe sunt distinctio porro eligendi libero aliquid doloribus necessitatibus dolore similique nulla placeat esse consectetur laudantium in quam fugit? Optio.",
    userId: num + 1,
    userName: `User_Post_${num + 1}`,
    createDatetime: "2023-07-10 10:42:30",
    viewCount: 0,
    recommendationCount: 0,
  };
}

function makeComment(num: number) {
  return {
    commentId: num + 1,
    content: `Comment ${num + 1}`,
    userName: `User_Comment_${num + 1}`,
    createDatetime: "2023-08-01 12:47:41",
  };
}
