// 로그인 폼 컴포넌트
import React, {useCallback, useState} from 'react';
import axios from "axios";
import {useRouter} from "next/router";
import {useRecoilState} from "recoil";
import {userStateAtom} from "../../recoil/user";


const LoginForm: React.FC = ({}) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [userAtom, setUserAtom] = useRecoilState(userStateAtom);
  const router = useRouter();

  const onChangeId = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  }, []);

  const onChangePw = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }, []);

  const onSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(userId, password);

    axios.post("api/auth/login", {
      usrId: "test",
      usrPwd: "qwe123!@#"
    })
      .then(({data}) => {
        // 성공시
        const recoilData = {
          jwt: data.data.accessToken,
          refresh: data.data.refreshToken
        };
        setUserAtom(recoilData);
        setUserId('');
        setPassword('');
        // 페이지네이션
        // router.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userId, password]);

  return (
    <div>
      <div className="mb-[20px] text-[20px] font-bold text-green2">Login</div>
      <form onSubmit={onSubmit}>
        <input onChange={onChangeId}
               value={userId}
               className="outline-none border-b-[1px] border-solid border-green3 text-[15px] mb-[20px] bg-gray2 text-[#000] w-full"
               placeholder="ID" name="userId"/>
        <input onChange={onChangePw}
               value={password}
               className="outline-none border-b-[1px] border-solid border-green3 text-[15px] mb-[20px] bg-gray2 text-[#000] w-full"
               placeholder="Password" name="password" type="password"/>
        <button type="submit"
                className="hover:bg-green2 bg-green1 text-gray1 rounded-[4px] p-[5px_10px] font-[15px] w-full font-bold cursor-pointer">Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;