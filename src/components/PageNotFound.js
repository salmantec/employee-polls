import { Button, Typography } from "@mui/material";
import React from "react";
import { SignInUrl, RootPathUrl } from "../constants/path";
import { connect } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const PageNotFound = (props) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (event, urlToRedirect) => {
    navigate(urlToRedirect + "?redirectTo=" + location.pathname);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <div>
        <Typography variant="h1" color="text.primary" align="center">
          <strong>404</strong>
        </Typography>
        <Typography variant="h3" color="text.primary" align="center">
          Page not found!
        </Typography>
        <Typography variant="h3" color="text.primary" align="center">
          {props.userLoggedIn ? (
            <Button
              variant="contained"
              color="primary"
              align="center"
              onClick={(e) => handleClick(e, RootPathUrl)}
            >
              Home
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              align="center"
              onClick={(e) => handleClick(e, SignInUrl)}
            >
              Sign In
            </Button>
          )}
        </Typography>
      </div>
    </div>
  );
};

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
    userLoggedIn: authedUser !== null,
  };
}

export default connect(mapStateToProps)(PageNotFound);
