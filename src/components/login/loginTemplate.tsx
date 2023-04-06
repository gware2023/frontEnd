// LoginForm, FindForm을 감싸는 템플릿 컴포넌트
import React, { useState, useCallback, useEffect } from "react";
import LoginForm from "./LoginForm";
import FindForm from "./FindForm";

const LoginTemplate: React.FC = () => {
  const [toggle, setToggle] = useState(true);

  const onClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      setToggle(!toggle);
    },
    [toggle]
  );

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray1">
      <div className="w-[450px] rounded-[10px] bg-gray2  p-[20px_70px_50px] shadow-[0_0_15px_rgba(0,0,0,0.2)] box-border">
        <div className="block mb-5 text-3xl font-bold tracking-wide text-center text-green2">
          G. Ware 2023
        </div>
        {toggle ? <LoginForm /> : <FindForm />}
        <div>
          <button
            onClick={onClick}
            className="float-right mt-5 font-bold text-green2"
          >
            {toggle ? "Find Password" : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginTemplate;
