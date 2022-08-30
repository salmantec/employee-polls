import { Fragment } from "react";
import { connect } from "react-redux";
import { LoadingBar } from "react-redux-loading-bar";
import { Route, Routes } from "react-router-dom";

import {
  LeaderBoardUrl,
  NewQuestionUrl,
  QuestionUrl,
  RootPathUrl,
  SignInUrl,
} from "../constants/path";
import Home from "./Home";
import LeaderBoard from "./LeaderBoard";
import Nav from "./Nav";
import NewQuestion from "./NewQuestion";
import QuestionPage from "./QuestionPage";
import SignIn from "./SignIn";

const App = () => {
  return (
    <Fragment>
      <LoadingBar />
      <div className="container">
        <Nav />
        <Routes>
          <Route path={SignInUrl} exact element={<SignIn />} />
          <Route path={NewQuestionUrl} element={<NewQuestion />} />
          <Route path={QuestionUrl} element={<QuestionPage />} />
          <Route path={RootPathUrl} element={<Home />} />
          <Route path={LeaderBoardUrl} element={<LeaderBoard />} />
        </Routes>
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  authedUser: authedUser !== null,
});

export default connect(mapStateToProps)(App);
