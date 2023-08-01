import CommentList from "./CommentList";
import CommentInput from "./CommentInput";
import { deleteComment } from "../../../../api/comment/comment";

export default function CommentContainer() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const deleteComment = (e: React.MouseEvent<HTMLButtonElement>) => {
    // deleteComment();
  };

  return (
    <div>
      <div className="mb-10">
        <CommentInput onSubmit={onSubmit} />
      </div>
      <div>
        <CommentList onClick={deleteComment} />
      </div>
    </div>
  );
}
