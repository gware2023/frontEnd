// 로그인 폼을 감싸는 템플릿 컴포넌트
// 여기서 상태를 관리함
import React, {useState, useCallback, useEffect} from 'react'
import styled from 'styled-components'
import LoginForm from './LoginForm';

const LoginTemplateWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: #eee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoginBox = styled.div`
  background-color: #BFBFBF;
  width: 450px;
  border-radius: 10px;
  padding: 20px 70px 50px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;

  .logo {
    display: block;
    text-align: center;
    font-weight: bold;
    font-size: 25px;
    letter-spacing: 2px;
    margin-bottom: 20px;
    color: #127369;
  }
`

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
    <LoginTemplateWrapper>
      <LoginBox>
        <div className='logo'>G. Ware 2023</div>
        <LoginForm/>
      </LoginBox>
    </LoginTemplateWrapper>
  )
}

export default LoginTemplate;