import { showLoading, hideLoading } from "react-redux-loading-bar";

import { saveQuestion } from "../utils/api";
import { newQuestionToUser } from "./users";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const NEW_QUESTION = "NEW_QUESTION";
export const ADD_ANSWER = "ADD_ANSWER";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

export function addAnswerToQuestion(questionId, answer, authedUser) {
  return {
    type: ADD_ANSWER,
    questionId,
    answer,
    authedUser,
  };
}

function newQuestion(question) {
  return {
    type: NEW_QUESTION,
    question,
  };
}

export function handleNewQuestion(optionOneText, optionTwoText, author) {
  return (dispatch) => {
    dispatch(showLoading());
    return saveQuestion({ optionOneText, optionTwoText, author })
      .then((question) => {
        dispatch(newQuestion(question));
        dispatch(newQuestionToUser(question));
      })
      .then(() => dispatch(hideLoading()));
  };
}
