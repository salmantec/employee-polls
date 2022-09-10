import React from "react";
import { connect } from "react-redux";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link, useLocation } from "react-router-dom";
import { Avatar } from "@mui/material";

import * as PathUrlConstants from "../constants/path";

const NavButton = (props) => {
  return (
    <Link
      to={props.href}
      style={{ color: "inherit", textDecoration: "inherit" }}
    >
      <Button
        color="inherit"
        sx={{
          ":hover": {
            bgcolor: "black",
            color: "white",
          },
          width: "90px",
          color: "black",
        }}
      >
        {props.text}
      </Button>
    </Link>
  );
};

const Nav = (props) => {
  const location = useLocation();
  return (
    <div>
      <AppBar position="static" color="inherit" enableColorOnDark>
        <Toolbar>
          <Stack
            direction="row"
            spacing={{ xs: 3, sm: 6, md: 9 }}
            justifyContent="center"
            alignItems="center"
          >
            <Stack direction="row" spacing={1}>
              {props.userLoggedIn === true && (
                <Stack direction="row" spacing={2}>
                  <NavButton text="Home" href={PathUrlConstants.RootPathUrl} />
                  <NavButton
                    text="Leaderboard"
                    href={PathUrlConstants.LeaderBoardUrl}
                  />
                  <NavButton
                    text="New"
                    href={PathUrlConstants.NewQuestionUrl}
                  />
                </Stack>
              )}
            </Stack>
            {props.userLoggedIn === true ? (
              <Stack direction="row" spacing={2}>
                <Stack
                  direction="row"
                  spacing={1}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Avatar
                    variant="circular"
                    sx={{ width: 24, height: 24 }}
                    src={props.users[props.authedUser].avatarURL}
                  />
                  <Typography fontSize="14px">
                    {props.users[props.authedUser].name}
                  </Typography>
                </Stack>
                <NavButton text="SignOut" href={PathUrlConstants.SignOutUrl} />
              </Stack>
            ) : (
              <Stack direction="row" spacing={2}>
                <NavButton
                  text="SignIn"
                  href={
                    PathUrlConstants.SignInUrl +
                    "?redirectTo=" +
                    location.pathname
                  }
                />
              </Stack>
            )}
          </Stack>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = ({ authedUser, users }) => ({
  authedUser,
  userLoggedIn: authedUser !== null,
  users,
});

export default connect(mapStateToProps)(Nav);
