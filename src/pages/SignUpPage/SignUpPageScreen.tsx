import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
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
import { toast } from "react-toastify";

const SignUpScreen: React.FC = () => {
  const [emailUsername, setEmailUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setError(null);
      setter(e.target.value);
    };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!emailUsername || !password || !confirmPassword) {
      setError("All fields are required");
      return;
    }

    const [email, username] = emailUsername.split("@");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        "https://backend-practice.euriskomobility.me/signup",
        {
          email,
          username,
          password,
        }
      );
      toast.success("Account created successfully!");
    } catch (error: any) {
      if (
        error.response &&
        error.response.status === 400 &&
        error.response.data.message === "User already exists"
      ) {
        setError(
          "User already exists. Please use a different email or username."
        );
      } else {
        toast.error("User already exists");
      }
    }
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
          <Label htmlFor="emailUsername">Email / Username</Label>
          <Input
            type="text"
            id="emailUsername"
            placeholder="Enter Your Email or Username"
            value={emailUsername}
            onChange={handleInputChange(setEmailUsername)}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={handleInputChange(setPassword)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            type="password"
            id="confirmPassword"
            placeholder="Confirm Your Password"
            value={confirmPassword}
            onChange={handleInputChange(setConfirmPassword)}
          />
        </FormGroup>
        {error && <div style={{ color: "red" }}>{error}</div>}
        <SignUpButton type="submit">Create Account</SignUpButton>
        <BackToLogin>
          Already have an account? <Link to="/">Log in</Link>
        </BackToLogin>
      </SignUpForm>
    </SignUpContainer>
  );
};

export default SignUpScreen;
