import React, {useState} from 'react';
import Image from 'next/image';
import upIcon from '../../icons/up-arrow.png';
import downIcon from '../../icons/down-arrow.png';
import xIcon from '../../icons/x.png';
import useTimeRemaining from "../../hooks/useTimeRemaining";
import ReviewQuill from "./review/reviewQuill";
import Link from "next/link";

const review = [
  "게시판 추가",
  "게시판 수정",
  "게시판 삭제",
  "게시글 작성",
  "특정 게시글 불러오기",
  "게시글 리스트 불러오기",
  "게시글 수정",
  "게시글 삭제",
  "댓글 작성",
  "댓글 리스트 불러오기",
  "댓글 삭제",
  "설문조사 불러오기",
  "<p><strong>asdd</strong></p><p>gdggdkssud</p><p><br></p><p>dkss안</p>"
];

export default function PostReview() {

  const [login, setLogin] = useState(true);

  return (
    <div className="flex flex-col">
      <button onClick={() => setLogin(!login)}>asd</button>
      <div className="my-[8px]">
        <div className="p-[16px] flex">
          <div>
            <h2 className="inline text-[18px] font-bold pr-1">
              댓글
            </h2>
            <span>
              총
              <span className="text-[#16ae81] px-0.5">
                {review.length}
              </span>
              개
            </span>
          </div>
        </div>
        <div>
          {login ?
            <div>
              <form>
                <div className="remirror-theme rounded-md border border-gray-500/30 shadow-sm dark:border-gray-500/70">
                  <label htmlFor="comment" className="sr-only">editor</label>
                  <ReviewQuill
                    className="relative z-10 block items-center rounded-t-md border-b border-gray-500/30 bg-gray-50 px-1 py-0.5 text-gray-900 dark:border-gray-500/70 dark:bg-gray-900/50 dark:text-gray-100 md:flex"/>
                </div>
                <div className="flex flex-row-reverse">
                  <button className="" type="submit">쓰기</button>
                </div>
              </form>
            </div>
            :
            <div className="relative flex-1">
            <textarea name="comment" id="comment" cols={30} rows={2} readOnly
                      className="block w-full resize-none rounded-md border border-gray-500/30 bg-gray-50/50 text-base shadow-sm focus:border-gray-500 focus:outline-none focus:ring-0 dark:border-gray-500/70 dark:bg-gray-900/50">
            </textarea>
              <p
                className="group absolute top-2.5 left-2 inline-flex items-start space-x-1 text-sm text-gray-500 hover:text-gray-900">
                <Link className="text-red-400 font-bold" href={'/login'}>로그인</Link>
                <span>을 해주세요!</span>
              </p>
            </div>
          }


        </div>
        {review.map((data, i) => (
          <div className={`p-[12px] flex border-b-2`} key={i}>
            <div className="flex flex-col text-center justify-center w-[50px]">
              <button className="place-self-center">
                <Image width={12} alt={"up"} src={upIcon}/>
              </button>
              <span className="text-[20px]">{Math.floor(Math.random() * 200)}</span>
              <button className="place-self-center">
                <Image width={12} alt={"down"} src={downIcon}/>
              </button>
            </div>
            <div className="flex flex-col">
              <div className="text-[15px] flex items-center">
                <div>{"아이콘"}</div>
                <span className="ml-0.5 font-bold">"닉네임"</span>
                <span
                  className="border-l ml-3 pl-3 text-[#7b858e]">{useTimeRemaining(String(new Date(2023, 3, Math.floor(Math.random() * 4) + 1)))}
                </span>
                <div className={`${login} ? "border-l ml-3 pl-3 text-[#7b858e]" : "hidden"`}>
                  <Image alt="x" width={12} src={xIcon}/>
                </div>
              </div>
              <div className="text-[18px]">{<div dangerouslySetInnerHTML={{__html: data}}/>}</div>
              <div className="text-[#7b858e]">
                <ul className="flex">
                  <li>
                    신고
                  </li>
                  <li className="ml-4">
                    답글달기
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}