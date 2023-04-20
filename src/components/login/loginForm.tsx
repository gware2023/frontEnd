// 로그인 폼 컴포넌트
import React, { useCallback, useState } from "react";
import axios from "axios";
import Error from "./Error";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { userStateAtom } from "../../recoil/user";

export default function LoginForm() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [userAtom, setUserAtom] = useRecoilState(userStateAtom);
  const router = useRouter();

  const onChangeId = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  }, []);

  const onChangePw = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }, []);

  // 로그인 버튼을 눌렀을 때, 저장된 userId, password 값을 서버로 보냄
  const onSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      axios
        .post("api/auth/login", {
          // 서버로 userId, password 전송
          // usrId: "test",
          // usrPwd: "qwe123!@#",
          usrId: userId,
          usrPwd: password,
        })
        .then(({ data }) => {
          // 성공시 데이터를 서버로 전송하고, 메인 페이지로 이동
          const recoilData = {
            jwt: data.data.accessToken,
            refresh: data.data.refreshToken,
          };
          setUserAtom(recoilData);
          setUserId("");
          setPassword("");
          router.push("/main");
        })
        .catch((error) => {
          // 실패시 에러 컴포넌트 호출
          setError(true);
        });
    },
    [userId, password]
  );
  return (
    <div>
      <div className="mb-[20px] text-[20px] font-bold text-green2">Login</div>
      {error && <Error />}
      <form onSubmit={onSubmit}>
        <input
          onChange={onChangeId}
          value={userId}
          className="outline-none border-b-[1px] border-solid border-green3 text-[15px] mb-[20px] bg-gray2 text-[#000] w-full"
          placeholder="ID"
          type="text"
          name="userId"
        />
        <input
          onChange={onChangePw}
          value={password}
          className="outline-none border-b-[1px] border-solid border-green3 text-[15px] mb-[20px] bg-gray2 text-[#000] w-full"
          placeholder="Password"
          name="password"
          type="password"
        />
        <button
          type="submit"
          className="hover:bg-green2 bg-green1 text-gray1 rounded-[4px] p-[5px_10px] w-full font-bold cursor-pointer"
        >
          Login
        </button>
      </form>
    </div>
  );
};