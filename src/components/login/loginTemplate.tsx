// 로그인 폼을 감싸는 템플릿 컴포넌트
// 여기서 상태를 관리함
import React, {useState, useCallback, useEffect} from 'react'
import styled from 'styled-components'
import LoginForm from "./loginForm";

const LoginTemplate: React.FC = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  // input태그에 들어온 값을 userId, password에 설정
  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
    setPassword(e.target.value);
  }, []);

  // 로그인 버튼을 눌렀을 때, 저장된 userId, password 값을 서버로 보냄
  const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    // input에 들어간 값은 다시 초기화
    setUserId('');
    setPassword('');
    e.preventDefault();
  }, []);

  return (
    <div className='absolute inset-0 bg-login-bg2 flex flex-col justify-center items-center'>
      <div className='w-[450px] rounded-[10px] bg-login-bg  p-[20px_70px_50px] shadow-[0_0_15px_rgba(0,0,0,0.2)] box-border'>
        <div className='block text-center font-bold text-3xl tracking-wide mb-5 text-login-logo'>G. Ware 2023</div>
        <LoginForm/>
      </div>
    </div>
  )
}

export default LoginTemplate;
