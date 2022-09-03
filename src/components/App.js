import { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Routes } from "react-router-dom";

import {
  LeaderBoardUrl,
  NewQuestionUrl,
  OtherUrl,
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
import PageNotFound from "./PageNotFound";
import { handleInitialData } from "../actions/shared";

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, [props]);
  return (
    <div className="container">
      <Nav />
      {props.authedUser ? (
        <Routes>
          <Route path={SignInUrl} exact element={<SignIn />} />
          <Route path={NewQuestionUrl} element={<NewQuestion />} />
          <Route path={QuestionUrl} element={<QuestionPage />} />
          <Route path={RootPathUrl} element={<Home />} />
          <Route path={LeaderBoardUrl} element={<LeaderBoard />} />

          <Route path={OtherUrl} element={<PageNotFound />} />
        </Routes>
      ) : (
        <Routes>
          <Route path={SignInUrl} element={<SignIn />} />
        </Routes>
      )}
    </div>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  authedUser: authedUser !== null,
});

export default connect(mapStateToProps)(App);
