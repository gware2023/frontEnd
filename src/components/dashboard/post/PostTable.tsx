import React, { useEffect, useState } from "react";
import { getPosts } from "../../../api/post/post";
import PostList from "./PostList";
import { sample_posts } from "../../../sample";

export default function PostTable() {
  const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   getPosts(1, 1).then(data => {
  //     setPosts([...data])
  //   })
  // }, [posts])

  return (
    <div className="p-8 border-solid shadow-lg rounded-3xl overflow-hidden max-h-[380px]">
      <span className="hidden">게시글 간단 요약 테이블</span>
      <div className="mb-5 text-2xl font-bold pl-7 text-green2">Posts</div>
      <PostList posts={sample_posts.slice().reverse()} />
    </div>
  );
}
