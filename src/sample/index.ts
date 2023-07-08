export const sample_posts = Array.from(
  Array(126),
  (v, i) =>
    new Object({
      postId: i + 1,
      title: `Post ${i + 1}`,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam cupiditate, saepe sunt distinctio porro eligendi libero aliquid doloribus necessitatibus dolore similique nulla placeat esse consectetur laudantium in quam fugit? Optio.",
    })
);
