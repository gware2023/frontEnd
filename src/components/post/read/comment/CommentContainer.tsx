import CommentList from "./CommentList";
import CommentInput from "./CommentInput";

export default function CommentContainer() {
  return (
    <div>
      <div>
        <CommentInput />
      </div>
      <div>
        <CommentList />
      </div>
    </div>
  );
}
