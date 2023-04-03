// 비밀번호 찾기 컴포넌트
import React, {useCallback, useState} from 'react';
import axios from "axios";
import {useRouter} from "next/router";


const FindForm: React.FC = ({}) => {
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const onChangeId = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  }, []);

  const onChangeName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  }, []);

  const onChangeEmail = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setUserEmail(e.target.value);
  }, []);

  const router = useRouter();
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(userId, userName, userEmail);
    setUserId('');
    setUserName('');
    setUserEmail('');

    // axios.post(url)
    //   .then(({data}) => {
    //     // 성공시
    //
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
  }

  return (
    <div>
      <div className='mb-[20px] text-[20px] font-bold text-login-form-title'>Find Password</div>
      <form onSubmit={onSubmit}>
        <input onChange={onChangeId}
          value={userId}
          className='outline-none border-b-[1px] border-solid border-login-form-title-border text-[15px] mb-[20px] bg-[#BFBFBF] text-[#000] w-full'
          placeholder='ID' name="userId"/>
        <input onChange={onChangeName}
          value={userName}
          className='outline-none border-b-[1px] border-solid border-login-form-title-border text-[15px] mb-[20px] bg-[#BFBFBF] text-[#000] w-full'
          placeholder='Name' name="userName"/>
        <input onChange={onChangeEmail}
          value={userEmail}
          className='outline-none border-b-[1px] border-solid border-login-form-title-border text-[15px] mb-[20px] bg-[#BFBFBF] text-[#000] w-full'
          placeholder='Email' name="userEmail"/>
        <button type="submit"
          className='hover:bg-[#127369] bg-[#8AA6A3] text-[#eee] rounded-[4px] p-[5px_10px] font-[15px] w-full font-bold cursor-pointer'>Find
        </button>
      </form>
    </div>
  )
}

export default FindForm;