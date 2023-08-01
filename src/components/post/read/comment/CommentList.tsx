import CommentItem from "./CommentItem";
import { getComments } from "../../../../api/comment/comment";
import { sample_comments } from "../../../../sample";
import useTimeRemaining from "../../../../hooks/useTimeRemaining";

interface CommentListProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function CommentList({ onClick }: CommentListProps) {
  return (
    <div>
      {sample_comments.map((comment) => (
        <div className="px-2 py-5 my-3 border-b-2 " key={comment.commentId}>
          <CommentItem
            content={comment.content}
            userName={comment.userName}
            createDatetime={useTimeRemaining(comment.createDatetime)}
            onClick={onClick}
          />
        </div>
      ))}
    </div>
  );
}
