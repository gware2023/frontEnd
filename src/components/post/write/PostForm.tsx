import React, { useState, useCallback, useMemo } from "react";
import { createPost } from "../../../api/post/post";
import { useRouter } from "next/router";

export default function () {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  const onChangeTitle = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(e.target.value);
    },
    []
  );

  const onChangeContent = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setContent(e.target.value);
    },
    []
  );

  const cancelToPost = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push("/post");
  }, []);

  const onSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let newPost = { boardId: 1, title: title, content: content };
    // createPost({}).then((data) => {
    //   router.push("/post");
    // });
  }, []);

  return (
    <div className="flex justify-center">
      <div className="w-full p-10 mx-20  rounded-3xl min-w-[760px]">
        <div className="mb-10 text-3xl font-bold text-center text-green2">
          New Post
        </div>
        <form className="flex flex-col" onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Title"
            className="px-3 py-1 mb-5 text-lg rounded-xl bg-gray1"
            name="title"
            value={title}
            onChange={onChangeTitle}
          />
          <textarea
            placeholder="Content"
            className="mb-5 py-1 min-h-[400px] rounded-xl px-3 text-lg bg-gray1"
            value={content}
            onChange={onChangeContent}
          />

          <button
            type="submit"
            className="py-2 mb-5 text-lg font-bold text-white rounded-lg bg-green2 hover:bg-green3"
          >
            Submit
          </button>
          <button
            type="button"
            className="py-2 text-lg font-bold text-white rounded-lg bg-gray2 hover:bg-red-500"
            onClick={cancelToPost}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}
