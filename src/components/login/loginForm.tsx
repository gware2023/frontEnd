// 로그인 폼 컴포넌트
import React from 'react';
import styled from 'styled-components';

const LoginFormWrapper = styled.div`
  .title {
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: bold;
    color: #127369;
  }

  form input {
    border: none;
    border-bottom: 1px solid #10403B;
    width: 100%;
    outline: none;
    font-size: 15px;
    margin-bottom: 20px;
    background-color: #BFBFBF;
    color: #000;
  }

  form button {
    background-color: #8AA6A3;
    border: none;
    color: #eee;
    border-radius: 4px;
    padding: 5px 10px;
    font-weight: bold;
    font-size: 15px;
    outline: none;
    cursor: pointer;
    width: 100%;

    &:hover {
      background-color: #127369;
    }
  }
`;

const LoginForm: React.FC = ({}) => {
  return (
    <div>
      <div className='hover:bg-[#127369] mb-[20px] text-[20px] font-bold text-login-form-title'>Login</div>
      <form>
        <input className='hover:bg-[#127369] border-b-[1px] border-solid border-login-form-title-border text-[15px] mb-[20px] bg-[#BFBFBF] text-[#000] w-full' placeholder='ID' name="userId"/>
        <input className='hover:bg-[#127369] border-b-[1px] border-solid border-login-form-title-border text-[15px] mb-[20px] bg-[#BFBFBF] text-[#000] w-full' placeholder='Password' name="password" type="password"/>
        <button className='hover:bg-[#127369] bg-[#8AA6A3] text-[#eee] rounded-[4px] p-[5px_10px] font-[15px] w-full font-bold cursor-pointer'>Login</button>
      </form>
    </div>
  )
}

export default LoginForm;