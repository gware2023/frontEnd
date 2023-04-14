interface MyMenuProps {
  onToggle: (e: React.MouseEvent<HTMLButtonElement>) => void;
  moveToProfile: () => void;
  moveToAdmin: () => void;
}

export default function MyMenu({
  moveToProfile,
  moveToAdmin,
  onToggle,
}: MyMenuProps) {
  return (
    <div className="flex items-center ml-4">
      <span className="hidden">마이 메뉴</span>
      <div className="relative ml-3">
        <div>
          <button
            onClick={onToggle}
            type="button"
            className="flex items-center rounded-full bg-green3 text-sm text-gray1 p-1.5 focus:ring-1 ring-opacity-5"
          >
            My
          </button>
        </div>
        <div className="absolute right-0 z-10 hidden w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 toggle-my">
          <button
            onClick={moveToProfile}
            className="block px-4 py-2 text-sm text-gray3"
          >
            My profile
          </button>
          <button
            onClick={moveToAdmin}
            className="block px-4 py-2 text-sm text-gray3"
          >
            Admin
          </button>
          <button className="block px-4 py-2 text-sm text-gray3">
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
}
