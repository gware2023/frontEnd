export const sample_posts = Array.from(Array(126), (v, i) => makeObj(i));

function makeObj(num: number) {
  return {
    postId: num + 1,
    title: `Post ${num + 1}`,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam cupiditate, saepe sunt distinctio porro eligendi libero aliquid doloribus necessitatibus dolore similique nulla placeat esse consectetur laudantium in quam fugit? Optio.",
  };
}
