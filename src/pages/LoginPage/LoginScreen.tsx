import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { loginUser } from "../../features/auth/authSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  LoginContainer,
  LoginForm,
  Title,
  FormGroup,
  Label,
  Input,
  LoginButton,
  SignUp,
  WelcomeTitle,
} from "./LoginScreen.Style";

type LoginScreenProps = {
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
};

const LoginScreen: React.FC<LoginScreenProps> = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState("1");
  const [password, setPassword] = useState("1");
  const [loggedIn, setLoggedIn] = useState(false);
  const dispatch: AppDispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!username.trim() || !password.trim()) {
      toast.error("Please enter both username and password to login.");
      return;
    }

    dispatch(loginUser({ username, password }))
      .unwrap()
      .then((_response) => {
        toast.success(`Welcome, ${username}, login successful!`);
        setIsAuthenticated(true);
        setLoggedIn(true);
      })
      .catch(() => {
        toast.error(`Login failed: Check Username Or Password!`);
      });
  };

  if (loggedIn) {
    return <Navigate to="/Home" />;
  }

  return (
    <LoginContainer
      style={{
        backgroundImage: `url(${require("../../assets/images/backgroundLogIn.jpg")})`,
        backgroundSize: "cover",
      }}
    >
      <WelcomeTitle>Welcome to LebNow</WelcomeTitle>
      <LoginForm>
        <Title>Sign in to your account</Title>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="username">Your Username</Label>
            <Input
              type="text"
              id="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>
          <LoginButton type="submit">Log in</LoginButton>
        </form>
        <SignUp>
          Don't have an account?
          <Link to="/signup"> Sign up</Link>
        </SignUp>
      </LoginForm>
      <ToastContainer />
    </LoginContainer>
  );
};

export default LoginScreen;
