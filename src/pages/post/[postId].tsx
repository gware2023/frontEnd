import MainTemplate from "../../components/main/MainTemplate";
import { useRouter } from "next/router";
import { getPost } from "../../api/post/post";
import PostPage from "../../components/post/read/PostPage";

export default function Post() {
  const router = useRouter();
  const postId =
    typeof router.query.postId === "string"
      ? parseInt(router.query.postId) - 1
      : -1;

  return (
    <div>
      <MainTemplate title="Post" elements={["Post", "Project", "Organization"]}>
        {postId >= 0 && <PostPage postId={postId} />}
      </MainTemplate>
    </div>
  );
}
