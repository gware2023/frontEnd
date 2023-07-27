import MainTemplate from "../../../components/main/MainTemplate";
import PostForm from "../../../components/post/write/PostForm";

export default function PostWrite() {
  return (
    <div>
      <MainTemplate title="Post" elements={["Post", "Project", "Organization"]}>
        <PostForm />
      </MainTemplate>
    </div>
  );
}
