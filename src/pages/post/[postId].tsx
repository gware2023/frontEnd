import MainTemplate from "../../components/main/MainTemplate";
import { useRouter } from "next/router";
import { getPost } from "../../api/post/post";
import PostPage from "../../components/post/read/PostPage";

export default function Post() {
  const router = useRouter();

  return (
    <div>
      <MainTemplate title="Post" elements={["Post", "Project", "Organization"]}>
        <PostPage postId={router.query.postId} />
      </MainTemplate>
    </div>
  );
}
