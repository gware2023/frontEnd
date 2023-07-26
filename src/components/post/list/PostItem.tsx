interface PostItemProps {
  title: string;
  content: string;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export default function PostItem({ title, content, onClick }: PostItemProps) {
  return (
    <div
      className="p-5 mb-5 rounded-lg hover:shadow-lg hover:bg-gray1"
      onClick={onClick}
    >
      <div className="mb-2 text-lg font-bold text-green3">{title}</div>
      <div className="text-ellipsis line-clamp-2">{content}</div>
    </div>
  );
}
