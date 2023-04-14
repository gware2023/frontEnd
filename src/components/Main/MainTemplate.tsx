// 웹앱의 메인 바탕이 되는 컴포넌트
import React, { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";
import MyMenu from "./MyMenu";

export default function MainTemplate() {
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

  // 마이 메뉴 토글
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
  const moveToProfile = useCallback(() => {
    router.push("/profile");
  }, []);

  // 관리자 페이지로 이동
  const moveToAdmin = useCallback(() => {
    router.push("/admin");
  }, []);

  // 로그아웃
  // const signOut = useCallback(() => {

  // }, []);

  return (
    <div className="min-h-full">
      <Nav
        onClick={onClick}
        elements={["Dashboard", "Posts", "Projects", "Organization"]}
      >
        <MyMenu
          onToggle={onToggle}
          moveToProfile={moveToProfile}
          moveToAdmin={moveToAdmin}
        />
      </Nav>

      <Header currentComponent={currentComponent} />

      <main className="min-h-[40vh]">
        <div className="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* {currentComponent === "Dashboard" && <Dashboard />} */}
          {/* {currentComponent === "Posts" && <Posts />} */}
          {/* {currentComponent === "Projects" && <Projects />} */}
          {/* {currentComponent === "Organization" && <Organization />} */}
        </div>
      </main>

      <Footer />
    </div>
  );
}
