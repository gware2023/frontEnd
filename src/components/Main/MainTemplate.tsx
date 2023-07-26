// 웹앱의 메인 바탕이 되는 컴포넌트
import React, { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";
import MyMenu from "./MyMenu";

interface MainTemplateProps {
  title: string;
  elements: string[];
  children?: React.ReactNode;
}

export default function MainTemplate({
  title,
  elements,
  children,
}: MainTemplateProps) {
  const [toggle, setToggle] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const navigators = document.querySelectorAll(".navi");
    navigators.forEach((navi) => {
      if (navi.innerHTML === title) navi.classList.add("bg-green3");
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

  return (
    <div className="min-h-full">
      <Nav elements={elements}>
        <MyMenu onToggle={onToggle} moveToProfile={moveToProfile} />
      </Nav>

      <Header title={title} />

      <main className="min-h-[40vh]">
        <div className="flex justify-center mt-10">{children}</div>
      </main>

      <Footer />
    </div>
  );
}
