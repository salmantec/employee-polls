import { saveQuestionAnswer } from "../utils/api";
import { addAnswerToQuestion } from "./questions";

export const RECEIVE_USERS = "RECEIVE_USERS";
export const NEW_QUESTION_TO_USER = "NEW_QUESTION_TO_USER";
export const ADD_ANSWER_TO_USER = "ADD_ANSWER_TO_USER";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function newQuestionToUser({ id, author }) {
  return {
    type: NEW_QUESTION_TO_USER,
    id,
    author,
  };
}

function addAnswerToUser(questionId, answer, authedUser) {
  return {
    type: ADD_ANSWER_TO_USER,
    questionId,
    answer,
    authedUser,
  };
}

export function handleAddAnswerToQuestion(authedUser, questionId, answer) {
  return (dispatch) => {
    return saveQuestionAnswer(authedUser, questionId, answer).then(
      (success) => {
        dispatch(addAnswerToUser(questionId, answer, authedUser));
        dispatch(addAnswerToQuestion(questionId, answer, authedUser));
      }
    );
  };
}
