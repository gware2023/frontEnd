interface AdminProps {
  moveToMain: () => void;
}

export default function AdminLogo({ moveToMain }: AdminProps) {
  return (
    <div>
      <button
        onClick={moveToMain}
        className="inline-block px-3 py-2 italic font-medium underline text-green3 hover:no-underline hover:rounded-md hover:text-gray1 hover:bg-green3"
      >
        <span className="hidden">메인으로 돌아가는 버튼</span>
        Go to Main
      </button>
      <div className="inline-block ml-5 text-xl font-bold text-gray1">
        Admin
      </div>
    </div>
  );
}
