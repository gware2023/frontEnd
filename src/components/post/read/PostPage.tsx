import { sample_posts } from "../../../sample";
import { getPost } from "../../../api/post/post";
import { useEffect, useState } from "react";

interface PostPageProps {
  postId: number;
}

export default function PostPage({ postId }: PostPageProps) {
  const [currentPost, setCurrentPost] = useState(sample_posts[postId]);

  return (
    <div>
      <div>{currentPost.title}</div>
      <div>{currentPost.content}</div>
    </div>
  );
}
