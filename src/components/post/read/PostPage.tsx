import { sample_posts } from "../../../sample";
import { getPost } from "../../../api/post/post";
import { useEffect, useState } from "react";

interface PostPageProps {
  postId: string | string[] | undefined;
}

export default function PostPage({ postId }: PostPageProps) {
  const [currentPost, setCurrentPost] = useState(null);

  // useEffect(() => {
  //   typeof postId == "string" &&
  //     getPost(parseInt(postId)).then((data) => {
  //       console.log(data);
  //     });
  // }, []);

  return <div>{postId}</div>;
}
