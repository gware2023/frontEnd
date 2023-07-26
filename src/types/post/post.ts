import { PostReqType } from "./postReq";
import { SurveyReqType } from "./surveyReq";

export interface PostParams {
  postId?: number;
  postReq: PostReqType;
  attachedFile: File;
  imgFile: File;
  surveyReq: SurveyReqType;
}
