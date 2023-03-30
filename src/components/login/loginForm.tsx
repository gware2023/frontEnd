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
    <LoginFormWrapper>
      <div className='title'>Login</div>
      <form>
        <input placeholder='ID' name="userId"/>
        <input placeholder='Password' name="password" type="password"/>
        <button>Login</button>
      </form>
    </LoginFormWrapper>
  )
}

export default LoginForm;