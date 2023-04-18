import React, {useState} from 'react';
import PostView from "./postView";
import PostAddView from "./postAddView";
import PostReview from "./postReview";
import axios from "axios";

export default function PostMain() {

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Posts</h1>
      {/*<PostAddView />*/}
      <PostView/>

    </div>
  );
}