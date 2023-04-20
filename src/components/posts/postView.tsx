import React, {useState} from 'react';
import Image from "next/image";
import upIcon from "../../icons/up-arrow.png";
import seeIcon from "../../icons/see.png";
import Link from "next/link";
import useTimeRemaining from "../../hooks/useTimeRemaining";


const data = [
  {
    "postId": 9,
    "title": "제목",
    "userName": "조성일",
    "time": "2023-03-30 16:53:47",
    "viewCount": 0,
    "recommendationCount": 0
  },
  {
    "postId": 8,
    "title": "제목",
    "userName": "조성일",
    "time": "2023-03-30 16:53:47",
    "viewCount": 0,
    "recommendationCount": 0
  },
  {
    "postId": 4,
    "title": "제목",
    "userName": "조성일",
    "time": "2023-03-30 16:53:41",
    "viewCount": 0,
    "recommendationCount": 0
  }, {
    "postId": 9,
    "title": "제목",
    "userName": "조성일",
    "time": "2023-03-30 16:53:47",
    "viewCount": 0,
    "recommendationCount": 0
  },
  {
    "postId": 8,
    "title": "제목",
    "userName": "조성일",
    "time": "2023-03-30 16:53:47",
    "viewCount": 0,
    "recommendationCount": 0
  },
  {
    "postId": 4,
    "title": "제목",
    "userName": "조성일",
    "time": "2023-03-30 16:53:41",
    "viewCount": 0,
    "recommendationCount": 0
  }, {
    "postId": 9,
    "title": "제목",
    "userName": "조성일",
    "time": "2023-03-30 16:53:47",
    "viewCount": 0,
    "recommendationCount": 0
  },
  {
    "postId": 8,
    "title": "제목",
    "userName": "조성일",
    "time": "2023-03-30 16:53:47",
    "viewCount": 0,
    "recommendationCount": 0
  },
  {
    "postId": 4,
    "title": "제목",
    "userName": "조성일",
    "time": "2023-03-30 16:53:41",
    "viewCount": 0,
    "recommendationCount": 0
  },
];

export default function PostView() {

  return (
    <div className="h-[500px]">
      {data.map((item, i) => (
        <div className="flex border-b-2 p-2 hover:bg-sky-100" key={i}>
          <div className="flex flex-col w-[50px] text-center mr-2">
            <button className="place-self-center">
              <Image width={12} alt={"up"} src={upIcon}/>
              </button>
            {/*<span className="text-[20px]">{Math.floor(Math.random() * 1000)}</span>*/}
          </div>
          <div>
            <Link href={`/post/${item.postId}`}>
              <div>
                <span className="font-bold">{item.title}</span>
                <span className="px-2 text-green-700">[{item.recommendationCount}]</span>
                <span className="border-l ml-2 pl-3 text-post-text">{useTimeRemaining(item.time)}</span>
              </div>
            </Link>
            <div className="text-post-text flex">
              <span className="pr-2">{"유머"}</span>
              <div className="border-l ml-2 pl-3 pr-2 flex items-center">
                <Image alt={"seeIcon"} src={seeIcon} width={12}/>
                <span className="pl-1">{item.viewCount}</span>
              </div>
              <span className="border-l ml-2 pl-3">{item.userName}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}