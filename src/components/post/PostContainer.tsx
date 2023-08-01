import Link from "next/link";
import PostList from "./list/PostList";

export default function PostContainer() {
  return (
    <div className="flex flex-col w-full px-20">
      <Link
        href="/post/write"
        className="w-full p-5 mb-10 text-xl font-bold text-center shadow-md border-1text-green2 hover:bg-green2 text-green2 hover:text-gray1 rounded-xl"
      >
        Write New Post
      </Link>
      <PostList />
    </div>
  );
}
