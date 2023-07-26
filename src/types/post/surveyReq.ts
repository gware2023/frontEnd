interface QuestionType {
  question: string;
}

export interface SurveyReqType {
  title: string;
  surveyQuestionReqList: QuestionType[];
}
