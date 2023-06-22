import React, {useState} from 'react';
import {NextRouter, useRouter} from "next/router";
import {ParsedUrlQuery} from "querystring";
import useTimeRemaining from "../../hooks/useTimeRemaining";
import Image from "next/image";
import seeIcon from "../../icons/see.png";
import fingerUp from "../../icons/fingerUp.png";
import PostReview from "../../components/posts/postReview";




export default function PostId({query}: { query: ParsedUrlQuery }) {

  const [postData, setPostData] = useState<string>("<p><strong>asdd</strong></p><p>gdggdkssud</p><p><br></p><p>dkss안</p><p>녕ㄴ연연ㅇ</p><p><strong>asdd</strong></p><p>gdggdkssud</p><p><br></p><p>dkss안</p><p>녕ㄴ연연ㅇ</p><p><strong>asdd</strong></p><p>gdggdkssud</p><p><br></p><p>dkss안</p><p>녕ㄴ연연ㅇ</p>");

  const data = {
    "postId": 1,
    "boardId": 1,
    "title": "배고픈데 오늘 저녁은 뭘 시켜먹을까 ?",
    "content": "내용",
    "userId": 10000001,
    "userName": "조성일",
    "time": "2023-03-30 16:16:28",
    "viewCount": 0,
    "recommendationCount": 0
  };

  return (
    <div className="mx-auto mt-2 w-full max-w-7xl px-4 lg:mt-[18px] lg:px-0">
      <div className="mt-8 mb-14 w-full sm:mt-9">
        <h1 className="block break-all text-xl font-semibold leading-7 sm:text-3xl sm:leading-10">{data.title}</h1>
        <div className="flex items-center gap-x-1 text-sm font-normal text-gray-700">
          <a href={`/user/${data.userId}`}>
            {data.userName}
          </a>
          <span>·</span>
          <span>{useTimeRemaining(data.time)}</span>
          <span>·</span>
          <div className="flex items-center">
            <Image alt={"seeIcon"} src={seeIcon} width={12}/>
            <span className="pl-1">{data.viewCount}</span>
          </div>
        </div>
        <div className="my-6 sm:my-8 sm:text-base">
          {postData && <div dangerouslySetInnerHTML={{__html: postData}}/>}
        </div>
        <div className="flex items-center space-x-1">
          <div className="flex flex-[0.5] flex-wrap items-center"></div>
          <div className="inline-flex">
            <button
              className="group relative flex h-[50px] w-[45px] items-center justify-center rounded-l-md border border-gray-500/30 bg-white text-gray-700 hover:border-gray-500/70 focus:z-10">
              <span className='sr-only'>비추천</span>
              <Image className='hover:text-red-500 group-hover:text-red-500' src={fingerUp} alt="따봉" width={25}/>
            </button>
            <span
              className="flex h-[50px] w-[55px] items-center justify-center border border-x-0 border-gray-500/30 bg-white text-base font-medium text-gray-700">{data.viewCount}</span>
            <button
              className="group flex h-[50px] w-[45px] items-center justify-center rounded-r-md border border-gray-500/30 bg-white text-gray-700 hover:border-gray-500/70 focus:z-10"
            >
              <Image src={fingerUp} alt="놉따봉" width={25}/>
            </button>
          </div>
        </div>
      </div>
        <PostReview />
    </div>
  );
}


PostId["getInitialProps"] = async (context: NextRouter) => {
  // context.query값으로 게시물 불러오기
  const postId = context.query;

  return {
    query: context.query
  };
};
