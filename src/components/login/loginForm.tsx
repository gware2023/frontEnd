// 로그인 폼 컴포넌트
import React, {useCallback, useState} from 'react';
import styled from 'styled-components';

const LoginForm: React.FC = ({}) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  // input태그에 들어온 값을 userId, password에 설정
  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
    setPassword(e.target.value);
  }, []);

  // 로그인 버튼을 눌렀을 때, 저장된 userId, password 값을 서버로 보냄
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // e.preventDefault();

    // input에 들어간 값은 다시 초기화
    console.log(userId, password);
    setUserId('');
    setPassword('');
  }

  return (
    <div>
      <div className='hover:bg-[#127369] mb-[20px] text-[20px] font-bold text-login-form-title'>Login</div>
      <form onSubmit={(e) => onSubmit}>
        <input onChange={(e) => setUserId(e.target.value)}
               className='hover:bg-[#127369] border-b-[1px] border-solid border-login-form-title-border text-[15px] mb-[20px] bg-[#BFBFBF] text-[#000] w-full'
               placeholder='ID' name="userId"/>
        <input onChange={(e) => setPassword(e.target.value)}
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