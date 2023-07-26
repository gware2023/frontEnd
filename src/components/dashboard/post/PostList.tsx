import PostItem from "./PostItem";
import { useRouter } from "next/router";

interface PostListProps {
  posts: any[];
}

export default function PostList({ posts }: PostListProps) {
  const router = useRouter();

  return (
    <div className="grid grid-cols-2 gap-6 ">
      {posts.map((post) => (
        <PostItem
          title={post.title}
          content={post.content}
          createDatetime={post.createDatetime}
          key={post.postId}
          onClick={(e: React.MouseEvent<HTMLDivElement>) => {
            router.push(`/post/${post.postId}`);
          }}
        />
      ))}
    </div>
  );
}
