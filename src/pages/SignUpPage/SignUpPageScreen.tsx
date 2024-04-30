import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  SignUpContainer,
  SignUpForm,
  Title,
  FormGroup,
  Label,
  Input,
  SignUpButton,
  BackToLogin,
} from "./SignUpPage.Style";

const SignUpScreen: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setconfirm] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <SignUpContainer
      style={{
        backgroundImage: `url(${require("../../assets/images/backgroundLogIn.jpg")})`,
        backgroundSize: "cover",
        position: "relative",
      }}
    >
      <Title>Create an Account</Title>
      <SignUpForm onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="username">Username</Label>
          <Input
            type="text"
            id="username"
            placeholder="Enter Your Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Confirm Password</Label>
          <Input
            type="password"
            id="password"
            placeholder="Confirm Your Password"
            value={confirm}
            onChange={(e) => setconfirm(e.target.value)}
          />
        </FormGroup>
        <SignUpButton type="submit">Create Account</SignUpButton>
        <BackToLogin>
          Already have an account? <Link to="/">Log in</Link>
        </BackToLogin>
      </SignUpForm>
    </SignUpContainer>
  );
};

export default SignUpScreen;
