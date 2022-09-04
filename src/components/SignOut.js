import React from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
import { SignInUrl } from "../constants/path";

const SignOut = (props) => {
  const navigate = useNavigate();
  React.useEffect(() => {
    navigate(SignInUrl);
  }, [navigate]);
  props.dispatch(setAuthedUser(null));
  localStorage.clear();
  sessionStorage.clear();
};

export default connect()(SignOut);
