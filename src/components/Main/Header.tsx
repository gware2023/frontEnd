interface HeaderProps {
  currentComponent: string;
}

export default function Header({ currentComponent }: HeaderProps) {
  return (
    <header className="shadow bg-gray1">
      <span className="hidden">헤더 바</span>
      <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray3">
          {currentComponent}
        </h1>
      </div>
    </header>
  );
}
