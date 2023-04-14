import React, { useState, useCallback } from "react";
import Footer from "../../components/Main/Footer";
import Header from "../../components/Main/Header";
import Nav from "../../components/Main/Nav";
import MyProfileLogo from "../../components/Main/MyProfileLogo";
import { useRouter } from "next/router";

export default function Profile() {
  const [currentComponent, setCurrentComponent] = useState("Profile");
  const router = useRouter();

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

  const moveToMain = useCallback(() => {
    router.push("/main");
  }, []);

  return (
    <div className="min-h-full">
      <Nav onClick={onClick} elements={["Profile", "Note"]}>
        <MyProfileLogo moveToMain={moveToMain} />
      </Nav>

      <Header currentComponent={currentComponent} />

      <main className="min-h-[40vh]">
        <div className="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* {currentComponent === "Profile" && <Profile />} */}
          {/* {currentComponent === "Note" && <Note />} */}
        </div>
      </main>

      <Footer />
    </div>
  );
}
