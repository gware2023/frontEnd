interface CommentInputProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}
export default function CommentInput({ onSubmit }: CommentInputProps) {
  return (
    <div>
      <form className="flex gap-5" onSubmit={onSubmit}>
        <textarea
          className="w-full px-3 py-2 basis-5/6 bg-gray1 rounded-xl"
          placeholder="Please Write Comment."
        />
        <button
          type="submit"
          className="text-lg font-bold text-white rounded-xl basis-1/6 hover:bg-green3 bg-green2"
        >
          Done
        </button>
      </form>
    </div>
  );
}
