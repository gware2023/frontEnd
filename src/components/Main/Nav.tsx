import React from "react";
import Link from "next/link";

interface NavProps {
  children: React.ReactNode;
  elements: string[];
}

export default function Nav({ elements, children }: NavProps) {
  return (
    <nav className="bg-green2">
      <span className="hidden">상단 바 (로고 + 네비게이터 + 마이 프로필)</span>
      <div className="px-4 mx-auto max-w-7xl">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-green3">
              <span className="hidden">메인 페이지로 이동</span>
              G. Ware
            </Link>
            <div className="flex items-baseline ml-10 space-x-4">
              <span className="hidden">네비게이터</span>
              {elements.map((element, i) => (
                <Link
                  href={element.toLowerCase()}
                  className="px-3 py-2 text-sm font-medium rounded-md text-gray1 navi"
                  key={i}
                >
                  {element}
                </Link>
              ))}
            </div>
          </div>
          <span className="hidden">메인 페이지네션 & 마이 프로필 로고</span>
          {children}
        </div>
      </div>
    </nav>
  );
}
