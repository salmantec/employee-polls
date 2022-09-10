import React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { handleNewQuestion } from "../actions/questions";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import * as PathUrlConstants from "../constants/path";

const theme = createTheme();

const NewQuestion = (props) => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const optionOne = data.get("optionOne");
    const optionTwo = data.get("optionTwo");
    if (optionOne.trim() === "") {
      console.error("First option is empty.");
    } else if (optionTwo.trim() === "") {
      console.error("First option is empty.");
    } else {
      new Promise((res, rej) => {
        props.dispatch(
          handleNewQuestion(optionOne, optionTwo, props.authedUser)
        );
        setTimeout(() => res("success"), 1000);
      }).then(() => {
        navigate(PathUrlConstants.RootPathUrl);
      });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xl">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h4">Create New Poll:</Typography>

          <Typography variant="h6">Would you rather...</Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="optionOne"
              label="First Option"
              name="optionOne"
              autoComplete="optionOne"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="optionTwo"
              label="Second Option"
              type="optionTwo"
              id="optionTwo"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="inherit"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

const mapStateToProps = ({ authedUser, users }) => {
  return {
    authedUser,
    users,
  };
};

export default connect(mapStateToProps)(NewQuestion);
