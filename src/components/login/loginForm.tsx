// 로그인 폼 컴포넌트
import React, {useCallback, useState} from 'react';
import axios from "axios";
import {useRouter} from "next/router";


const LoginForm: React.FC = ({}) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  // input태그에 들어온 값을 userId, password에 설정
  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
    setPassword(e.target.value);
  }, []);

  const router = useRouter();
  // 로그인 버튼을 눌렀을 때, 저장된 userId, password 값을 서버로 보냄
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(userId, password);
    setUserId('');
    setPassword('');

    // axios.post(url)
    //   .then(({data}) => {
    //     // 성공시
    //
    //     // 페이지네이션
    //     router.push("/")
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
  }

  return (
    <div>
      <div className='mb-[20px] text-[20px] font-bold text-login-form-title'>Login</div>
      <form onSubmit={(e) => onSubmit(e)}>
        <input onChange={(e) => setUserId(e.target.value)}
               value={userId}
               className='hover:bg-[#127369] border-b-[1px] border-solid border-login-form-title-border text-[15px] mb-[20px] bg-[#BFBFBF] text-[#000] w-full'
               placeholder='ID' name="userId"/>
        <input onChange={(e) => setPassword(e.target.value)}
               value={password}
               className='hover:bg-[#127369] border-b-[1px] border-solid border-login-form-title-border text-[15px] mb-[20px] bg-[#BFBFBF] text-[#000] w-full'
               placeholder='Password' name="password" type="password"/>
        <button type="submit"
                className='hover:bg-[#127369] bg-[#8AA6A3] text-[#eee] rounded-[4px] p-[5px_10px] font-[15px] w-full font-bold cursor-pointer'>Login
        </button>
      </form>
    </div>
  )
}

export default LoginForm;