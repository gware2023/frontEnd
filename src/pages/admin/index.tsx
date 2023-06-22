import React, { useState, useCallback } from "react";
import { useRouter } from "next/router";
import Nav from "../../components/main/Nav";
import Header from "../../components/main/Header";
import Footer from "../../components/main/Footer";
import AdminLogo from "../../components/main/AdminLogo";

export default function Admin() {
  const [currentComponent, setCurrentComponent] = useState("Employee");
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
      <Nav onClick={onClick} elements={["Employee", "Department", "Project"]}>
        <AdminLogo moveToMain={moveToMain} />
      </Nav>

      <Header currentComponent={currentComponent} />

      <main className="min-h-[40vh]">
        <div className="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* {currentComponent === "Employee" && <Employee />} */}
          {/* {currentComponent === "Department" && <Department />} */}
          {/* {currentComponent === "Project" && <Project />} */}
        </div>
      </main>

      <Footer />
    </div>
  );
}
