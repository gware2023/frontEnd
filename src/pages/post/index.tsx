import MainTemplate from "../../components/main/MainTemplate";
import PostContainer from "../../components/post/PostContainer";

export default function Posts() {
  return (
    <div>
      <MainTemplate title="Post" elements={["Post", "Project", "Organization"]}>
        <PostContainer />
      </MainTemplate>
    </div>
  );
}
