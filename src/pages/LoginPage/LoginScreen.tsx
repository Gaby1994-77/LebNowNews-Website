import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
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

const LoginScreen: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoggedIn(true);
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
    </LoginContainer>
  );
};

export default LoginScreen;
