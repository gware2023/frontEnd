interface MyProfileProps {
  moveToMain: () => void;
}

export default function MyProfileLogo({ moveToMain }: MyProfileProps) {
  return (
    <div>
      <button
        onClick={moveToMain}
        className="inline-block text-green3 font-medium italic underline hover:no-underline px-3 py-2 hover:rounded-md hover:text-gray1 hover:bg-green3"
      >
        <span className="hidden">메인으로 돌아가는 버튼</span>
        Go to Main
      </button>
      <div className="text-gray1 inline-block text-xl font-bold ml-5">
        My Profile
      </div>
    </div>
  );
}
