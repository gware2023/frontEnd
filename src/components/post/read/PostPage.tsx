import { sample_posts } from "../../../sample";
import { getPost } from "../../../api/post/post";
import { recommendPost, cancelRecommendPost } from "../../../api/post/post";
import Image from "next/image";
import CommentContainer from "./comment/CommentContainer";

interface PostPageProps {
  postId: number;
}

export default function PostPage({ postId }: PostPageProps) {
  const currentPost = sample_posts[postId];

  const recommendUp = (e: React.MouseEvent<HTMLButtonElement>) => {
    recommendPost(postId);
  };

  const recommendDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    cancelRecommendPost(postId);
  };

  return (
    <div className="flex flex-col px-20">
      <div className="mb-10">
        <div className="mb-1 text-3xl font-bold text-green2">
          {currentPost.title}
        </div>
        <div className="flex place-content-between text-green1">
          <div className="flex">
            <div>{currentPost.userName} &#183;</div>
            <div className="mt-1.5 ml-2 mr-1 ">
              <Image src="/view.png" alt="view-count" width={12} height={12} />
            </div>
            <div>{currentPost.viewCount}</div>
          </div>
          <div>{currentPost.createDatetime}</div>
        </div>
      </div>
      <div className="text-lg text-green3">{currentPost.content}</div>
      <div className="flex mx-auto mt-20 mb-20 text-xl text-green3">
        <button onClick={recommendUp}>
          <Image src="/up-arrow.png" alt="up_arrow" width={12} height={12} />
        </button>
        <div className="mx-4">{currentPost.recommendationCount}</div>
        <button onClick={recommendDown}>
          <Image
            src="/down-arrow.png"
            alt="down_arrow"
            width={12}
            height={12}
          />
        </button>
      </div>
      <div>
        <CommentContainer />
      </div>
    </div>
  );
}
