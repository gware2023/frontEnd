import React from 'react';
import Image from 'next/image';
import upIcon from '../../icons/up-arrow.png';
import downIcon from '../../icons/down-arrow.png';
import useTimeRemaining from "../../hooks/useTimeRemaining";

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



  return (
    <div className="flex flex-col">
      {review.map((data, i) => (
        <div className={`p-[12px] flex border-b-2`} key={i}>
          <div className="flex flex-col text-center justify-center pr-4">
            <button className="place-self-center">
              <Image width={12} alt={"up"} src={upIcon}/>
            </button>
            <span className="text-[20px]">{Math.floor(Math.random() * 200)}</span>
            <button className="place-self-center">
              <Image width={12} alt={"down"} src={downIcon}/>
            </button>
          </div>
          <div className="flex flex-col">
            <div className="text-[15px] flex">
              <div>{"아이콘"}</div>
              <span className="ml-0.5 font-bold">"닉네임"</span>
              <span
                className="border-l ml-3 pl-3 text-[#7b858e]">{useTimeRemaining(String(new Date(2023, 3, Math.floor(Math.random() * 4) + 1)))}</span>
            </div>
            <div className="text-[18px]">{<div dangerouslySetInnerHTML={{__html: data}}/>}</div>
            <div className="text-[#7b858e]">
              <ul className="flex ml-1">
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
  );
}