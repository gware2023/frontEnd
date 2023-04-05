import React, {useState} from 'react';
import {NextRouter, useRouter} from "next/router";
import {ParsedUrlQuery} from "querystring";

export default function PostId({query}: { query: ParsedUrlQuery }) {
  const [postData, setPostData] = useState<string>("<p><strong>asdd</strong></p><p>gdggdkssud</p><p><br></p><p>dkss안</p><p>녕ㄴ연연ㅇ</p><p><strong>asdd</strong></p><p>gdggdkssud</p><p><br></p><p>dkss안</p><p>녕ㄴ연연ㅇ</p><p><strong>asdd</strong></p><p>gdggdkssud</p><p><br></p><p>dkss안</p><p>녕ㄴ연연ㅇ</p>");

  return (
    <div>
      <div className="absolute inset-0 bg-login-bg2 flex flex-col justify-center items-center">
        <div
          className="w-[150px] sm:w-[300px] lg:w-[500px] bg-login-bg rounded-[10px_10px_0px_0px] shadow-[0_0_15px_rgba(0,0,0,0.2)] text-center">
          <div>{query.postId}</div>
        </div>
        <div
          className="w-[300px] sm:w-[500px] lg:w-[800px] rounded-[10px] bg-login-bg  p-[50px_70px] shadow-[0_0_15px_rgba(0,0,0,0.2)] box-border">
          <div className="bl`ock tracking-wide mb-5">
            {postData && <div dangerouslySetInnerHTML={{__html: postData}}/>}
          </div>
        </div>
      </div>
    </div>
  );
}


PostId.getInitialProps = async (context: NextRouter) => {
  // context.query값으로 게시물 불러오기
  const postId = context.query;

  return {
    query: context.query
  };
};
