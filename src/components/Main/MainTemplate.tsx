// 웹앱의 메인 바탕이 되는 컴포넌트
import React, { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/router";

const MainTemplate: React.FC = () => {
  const [currentComponent, setCurrentComponent] = useState("Dashboard");
  const [toggle, setToggle] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // 초기 렌더링시, 유저 데이터 받아오기
  }, []);

  // 네비게이션에서 선택
  const onClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      setCurrentComponent(e.currentTarget.innerHTML);
      changeFocus(e.currentTarget.innerHTML);
    },
    [currentComponent]
  );

  const changeFocus = useCallback((target: string) => {
    const navigators = document.querySelectorAll(".navi");
    navigators.forEach((navi) => {
      if (navi.innerHTML === target) navi.classList.add("bg-green3");
      else navi.classList.remove("bg-green3");
    });
  }, []);

  // 마이 프로필 토글
  const onToggle = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      setToggle(!toggle);
      setVisible();
    },
    [toggle]
  );

  const setVisible = useCallback(() => {
    const myProfile = document.querySelector(".toggle-my");
    if (myProfile?.classList.contains("hidden"))
      myProfile?.classList.remove("hidden");
    else myProfile?.classList.add("hidden");
  }, []);

  // 마이 프로필 페이지로 이동
  const moveToMyPage = useCallback(() => {
    router.push("/profile");
  }, []);

  // 로그아웃
  // const signOut = useCallback(() => {

  // }, []);

  return (
    <div className="min-h-full">
      <nav className="bg-green2">
        {/* 상단 바 (로고 + 네비게이터 + 마이 프로필) */}
        <div className="px-4 mx-auto max-w-7xl">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-green3">
                {/* 로고 */}
                G. Ware
              </div>
              {/* 네비게이터 */}
              <div className="flex items-baseline ml-10 space-x-4">
                <button
                  onClick={onClick}
                  className="px-3 py-2 text-sm font-medium rounded-md text-gray1 navi bg-green3"
                >
                  Dashboard
                </button>
                <button
                  onClick={onClick}
                  className="px-3 py-2 text-sm font-medium rounded-md text-gray1 navi"
                >
                  Posts
                </button>
                <button
                  onClick={onClick}
                  className="px-3 py-2 text-sm font-medium rounded-md text-gray1 navi"
                >
                  Projects
                </button>
                <button
                  onClick={onClick}
                  className="px-3 py-2 text-sm font-medium rounded-md text-gray1 navi"
                >
                  Organization
                </button>
              </div>
            </div>
            {/* 마이 프로필 */}
            <div className="flex items-center ml-4">
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
                    onClick={moveToMyPage}
                    className="block px-4 py-2 text-sm text-gray3"
                  >
                    My profile
                  </button>
                  <button className="block px-4 py-2 text-sm text-gray3">
                    Sign out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <header className="shadow bg-gray1">
        {/* 헤더 바 */}
        <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray3">
            {/* 현재 컴포넌트 이름 */}
            {currentComponent}
          </h1>
        </div>
      </header>

      <main className="min-h-[40vh]">
        {/* 메인 바 */}
        <div className="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* 현재 컴포넌트 */}
        </div>
      </main>

      <footer className="mt-20 text-gray-600 bg-gray1">
        {/* 푸터 바 */}
        <div className="relative w-4/5 mx-auto my-0">
          <strong className="block text-lg h-28 leading-[112px] border-b-2 font-bold border-gray2">
            G. Ware 2023
          </strong>
          <a
            href="https://github.com/gware2023"
            target="_blank"
            className="absolute right-0 top-12"
          >
            <img className="h-6" src="icon_github.png" />
          </a>
          <div className="flex justify-between">
            <div className="my-10">
              <dl>
                <dt className="inline-block mr-1 ">사명</dt>
                <dd className="inline-block ml-1 mr-5 text-gray-500">
                  (주) G. Ware
                </dd>
                <dt className="inline-block mr-1">구성원</dt>
                <dd className="inline-block ml-1 text-gray-500">neuma573</dd>
                <dd className="inline-block ml-1 text-gray-500">sung3441</dd>
                <dd className="inline-block ml-1 text-gray-500">codeehh</dd>
                <dd className="inline-block ml-1 text-gray-500">tankboyy</dd>
                <dd className="inline-block ml-1 text-gray-500">ijaesin</dd>
              </dl>
              <dl>
                <dt className="inline-block mr-1">업무</dt>
                <dd className="inline-block ml-1 mr-5 text-gray-500">
                  웹 애플리케이션 제작
                </dd>
                <dt className="inline-block mr-1">주소</dt>
                <dd className="inline-block ml-1 text-gray-500">서울특별시</dd>
              </dl>
            </div>

            <small className="mt-10 ml-10">
              Copyright &copy;G.Ware. All Rights Reserved.
            </small>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainTemplate;
