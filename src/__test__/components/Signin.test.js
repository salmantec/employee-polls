import { render, screen, fireEvent } from "@testing-library/react";
import SignIn from "../../components/SignIn";
import configureStore from "redux-mock-store";
import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import { Router } from "react-router";
import { createMemoryHistory } from "history";

const usersData = {
  "test-user-id": {
    id: "test-user-id",
    password: "test-pass",
    name: "Test User",
    avatarURL: "",
    answers: {
      "test-question-id-one": "optionOne",
    },
    questions: ["test-question-id-two"],
  },
  "test-user-id-one": {
    id: "test-user-id-one",
    password: "test-pass",
    name: "Test User",
    avatarURL: "",
    answers: {
      "test-question-id-two": "optionOne",
    },
    questions: ["test-question-id-three"],
  },
};

const mockStore = configureStore([]);

describe("Check username, password and submit button is present.", () => {
  let store;
  let component;

  let users = usersData;
  const history = createMemoryHistory();
  beforeEach(() => {
    store = mockStore({
      authedUser: "test-user-id",
      users: users,
    });

    component = renderer.create(
      <Provider store={store}>
        <Router location={history.location} navigator={history}>
          <SignIn />
        </Router>
      </Provider>
    );
  });

  test("Check username field is there in the SignIn component.", () => {
    component = render(
      <Provider store={store}>
        <Router location={history.location} navigator={history}>
          <SignIn />
        </Router>
      </Provider>
    );
    var username = component.getAllByText(/Username/);
    expect(username.length).toEqual(1);
  });

  test("Check password field is there in the SignIn component.", () => {
    component = render(
      <Provider store={store}>
        <Router location={history.location} navigator={history}>
          <SignIn />
        </Router>
      </Provider>
    );
    var password = component.getByTestId("password");
    expect(password).toBeInTheDocument();
  });

  test("Check Sign In button is there in the SignIn component.", () => {
    component = render(
      <Provider store={store}>
        <Router location={history.location} navigator={history}>
          <SignIn />
        </Router>
      </Provider>
    );
    var signInButton = component.getByTestId("sign-in");
    expect(signInButton).toBeInTheDocument();
  });
});

describe("SignIn component - Snapshot testing", () => {
  let store;
  let component;

  let users = usersData;
  const history = createMemoryHistory();
  beforeEach(() => {
    store = mockStore({
      authedUser: "test-user-id",
      users: users,
    });

    component = renderer.create(
      <Provider store={store}>
        <Router location={history.location} navigator={history}>
          <SignIn />
        </Router>
      </Provider>
    );
  });

  test("renders SignIn component with screen.debug() in UI", async () => {
    render(
      <Provider store={store}>
        <Router location={history.location} navigator={history}>
          <SignIn />
        </Router>
      </Provider>
    );
    screen.debug();
  });

  test("renders SignIn component with toMatchSnapshot in UI", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});

describe("FireEvent testing with SignIn component", () => {
  let store;
  let component;

  let users = usersData;
  const history = createMemoryHistory();
  beforeEach(() => {
    store = mockStore({
      authedUser: "test-user-id",
      users: users,
    });

    component = renderer.create(
      <Provider store={store}>
        <Router location={history.location} navigator={history}>
          <SignIn />
        </Router>
      </Provider>
    );
  });

  test("If we do not pick one user from dropdown list, then it should popup the error message", () => {
    component = render(
      <Provider store={store}>
        <Router location={history.location} navigator={history}>
          <SignIn />
        </Router>
      </Provider>
    );
    var password = component.getByTestId("password").querySelector("input");
    fireEvent.change(password, { target: { value: "123456" } });
    var signInButton = component.getByTestId("sign-in");
    fireEvent.click(signInButton);
    expect(component.getByTestId("error-header")).toBeInTheDocument();
  });
});
