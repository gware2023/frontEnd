// 로그인 폼을 감싸는 템플릿 컴포넌트
// 여기서 상태를 관리함
import React, {useState, useCallback, useEffect} from 'react'
import LoginForm from "./loginForm";
import FindForm from './FindForm';

const LoginTemplate: React.FC = () => {
  const [toggle, setToggle] = useState(true);

  const onClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    setToggle(!toggle);
  }, [toggle]);

  return (
    <div className='absolute inset-0 bg-gray1 flex flex-col justify-center items-center'>
      <div className='w-[450px] rounded-[10px] bg-gray2  p-[20px_70px_50px] shadow-[0_0_15px_rgba(0,0,0,0.2)] box-border'>
        <div className='block text-center font-bold text-3xl tracking-wide mb-5 text-green2'>G. Ware 2023</div>
        {toggle ? <LoginForm /> : <FindForm />}
        <div>
          <button onClick={onClick} className='mt-5 float-right font-bold text-green2'>{toggle ? 'Find Password' : 'Login'}</button>
        </div>
      </div>
    </div>
  )
}

export default LoginTemplate;