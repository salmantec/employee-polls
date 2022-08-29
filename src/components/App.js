import { Fragment } from "react";
import { connect } from "react-redux";
import { LoadingBar } from "react-redux-loading-bar";
import { Route, Routes } from "react-router-dom";

import {
  NewQuestionUrl,
  QuestionUrl,
  RootPathUrl,
  SignInUrl,
} from "../constants/path";
import Home from "./Home";
import NewQuestion from "./NewQuestion";
import QuestionPage from "./QuestionPage";
import SignIn from "./SignIn";

const App = () => {
  return (
    <Fragment>
      <LoadingBar />
      <div className="container">
        <Routes>
          <Route path={SignInUrl} exact element={<SignIn />} />
          <Route path={NewQuestionUrl} element={<NewQuestion />} />
          <Route path={QuestionUrl} element={<QuestionPage />} />
          <Route path={RootPathUrl} element={<Home />} />
        </Routes>
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  authedUser: authedUser !== null,
});

export default connect(mapStateToProps)(App);
