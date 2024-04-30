import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
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

  const loginUser = async (username: string, password: string) => {
    try {
      const response = await fetch(
        "https://backend-practice.euriskomobility.me/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: username,
            password,
            token_expires_in: "30m",
          }),
        }
      );
      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(responseData.message || "Login failed");
      }
      setIsAuthenticated(true);
      setLoggedIn(true);
      return responseData;
    } catch (error) {
      let errorMessage = "An unexpected error occurred";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      toast.error(`Login failed: ${errorMessage}`);
      return false;
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userData = await loginUser(username, password);
    if (userData) {
      toast.success(`Welcome , ${username}, Login successful!`);
      setLoggedIn(true);
    }
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
