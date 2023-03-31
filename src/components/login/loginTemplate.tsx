// 로그인 폼을 감싸는 템플릿 컴포넌트
// 여기서 상태를 관리함
import React, {useState, useCallback, useEffect} from 'react'
import styled from 'styled-components'
import LoginForm from "./loginForm";

const LoginTemplate: React.FC = () => {

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
