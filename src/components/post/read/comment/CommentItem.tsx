interface CommentItemProps {
  content: string;
  userName: string;
  createDatetime: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function CommentItem({
  content,
  userName,
  createDatetime,
  onClick,
}: CommentItemProps) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <div className="font-bold text-green2">{userName}</div>
        <div className="text-green1">{createDatetime}</div>
      </div>
      <div>{content}</div>
    </div>
  );
}
