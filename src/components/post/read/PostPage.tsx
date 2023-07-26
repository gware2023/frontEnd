import { sample_posts } from "../../../sample";
import { getPost } from "../../../api/post/post";
import Image from "next/image";

interface PostPageProps {
  postId: number;
}

export default function PostPage({ postId }: PostPageProps) {
  const currentPost = sample_posts[postId];

  return (
    <div className="flex flex-col px-20">
      <div className="mb-10">
        <div className="mb-1 text-3xl font-bold text-green2">
          {currentPost.title}
        </div>
        <div className="flex place-content-between text-green1">
          <div className="flex">
            {currentPost.userName} &#183;{" "}
            <Image
              className="w-auto h-4 mt-1 ml-2 mr-1"
              src="/view.png"
              alt="view-count"
              width={10}
              height={10}
            />
            {currentPost.viewCount}
          </div>
          <div>{currentPost.createDatetime}</div>
        </div>
      </div>
      <div className="text-lg text-green3">{currentPost.content}</div>
      <div className="mx-auto mt-20 text-green3">
        {currentPost.recommendationCount}
      </div>
    </div>
  );
}
