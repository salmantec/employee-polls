import { Fragment } from "react";
import { connect } from "react-redux";
import { LoadingBar } from "react-redux-loading-bar";
import { Route, Routes } from "react-router-dom";

import { RootPathUrl } from "../constants/path";
import Home from "./Home";

const App = () => {
  return (
    <Fragment>
      <LoadingBar />
      <div className="container">
        <Routes>
          <Route path={RootPathUrl} exact element={<Home />} />
        </Routes>
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  authedUser: authedUser !== null,
});

export default connect(mapStateToProps)(App);
