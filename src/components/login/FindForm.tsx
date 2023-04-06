// 비밀번호 찾기 컴포넌트
import React, { useCallback, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { userStateAtom } from "../../recoil/user";
import Error from "./Error";

const FindForm: React.FC = ({}) => {
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [error, setError] = useState(false);
  const [userAtom, setUserAtom] = useRecoilState(userStateAtom);

  const onChangeId = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  }, []);

  const onChangeName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  }, []);

  const onChangeEmail = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setUserEmail(e.target.value);
    },
    []
  );

  const router = useRouter();
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axios
      .post("api/auth/login", {
        // 서버로 userId, userName, userEmail 전송
      })
      .then(({ data }) => {
        // 성공시 데이터를 서버로 전송하고, 비밀번호 보여주는 컴포넌트 호출
        setUserId("");
        setUserName("");
        setUserEmail("");
      })
      .catch((error) => {
        // 실패시 에러 컴포넌트 호출
        setError(true);
      });
  };

  return (
    <div>
      <div className="mb-[20px] text-[20px] font-bold text-green2">
        Find Password
      </div>
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
          onChange={onChangeName}
          value={userName}
          className="outline-none border-b-[1px] border-solid border-green3 text-[15px] mb-[20px] bg-gray2 text-[#000] w-full"
          placeholder="Name"
          type="text"
          name="userName"
        />
        <input
          onChange={onChangeEmail}
          value={userEmail}
          className="outline-none border-b-[1px] border-solid border-green3 text-[15px] mb-[20px] bg-gray2 text-[#000] w-full"
          placeholder="Email"
          type="text"
          name="userEmail"
        />
        <button
          type="submit"
          className="hover:bg-green2 bg-green1 text-gray1 rounded-[4px] p-[5px_10px]  w-full font-bold cursor-pointer"
        >
          Find
        </button>
      </form>
    </div>
  );
};

export default FindForm;
