import useTimeRemaining from "../../../hooks/useTimeRemaining";

interface PostItemProps {
  title: string;
  content: string;
  createDatetime: string;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export default function PostItem({
  title,
  content,
  createDatetime,
  onClick,
}: PostItemProps) {
  return (
    <div
      className="p-5 rounded-lg hover:shadow-lg hover:bg-gray1"
      onClick={onClick}
    >
      <div className="flex place-content-between">
        <div className="mb-2 text-lg font-bold text-green3">{title}</div>
        <div className="text-sm leading-7 text-green3">
          {useTimeRemaining(createDatetime)}
        </div>
      </div>
      <div className="text-ellipsis line-clamp-2">{content}</div>
    </div>
  );
}
