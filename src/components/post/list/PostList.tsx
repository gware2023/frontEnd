import React, { ButtonHTMLAttributes, useEffect, useState } from "react";
import PostItem from "./PostItem";
import { sample_posts } from "../../../sample";
import { useRouter } from "next/router";

export default function PostList() {
  const posts = sample_posts.slice().reverse();
  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = Math.ceil(posts.length / 10);
  const router = useRouter();

  const changePage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCurrentPage(parseInt(e.currentTarget.innerText));
  };

  const changeLeft = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (currentPage - 5 > 0) setCurrentPage(currentPage - 5);
    else setCurrentPage(1);
  };

  const changeRight = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (totalPage - currentPage > 5) setCurrentPage(currentPage + 5);
    else setCurrentPage(totalPage);
  };

  useEffect(() => {
    const postPagination = document.querySelectorAll(".post-pagination");
    postPagination.forEach((page) => {
      if (parseInt(page.innerHTML) === currentPage)
        page.classList.add("font-bold");
      else page.classList.remove("font-bold");
    });
  }, [currentPage]);

  return (
    <div>
      <div>
        {posts
          .slice((currentPage - 1) * 10, currentPage * 10)
          .map((post, i) => (
            <PostItem
              title={post.title}
              content={post.content}
              createDatetime={post.createDatetime}
              key={i}
              onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                router.push(`/post/${post.postId}`);
              }}
            />
          ))}
      </div>
      <div className="flex justify-center gap-5 mt-10">
        <button onClick={changeLeft}>
          <span className="hidden">5페이지씩 넘기기</span>
          &lt;
        </button>
        {Array.from(Array(5), (v, i) =>
          currentPage <= 3
            ? i + 1
            : totalPage - currentPage < 3
            ? totalPage - 4 + i
            : currentPage - 2 + i
        ).map((page, i) => (
          <button
            onClick={changePage}
            key={i}
            className="text-lg post-pagination text-green3"
          >
            {page}
          </button>
        ))}
        <button onClick={changeRight}>
          <span className="hidden">5페이지씩 넘기기</span>
          &gt;
        </button>
      </div>
    </div>
  );
}
