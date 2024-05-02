import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
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
import { useDispatch } from "react-redux";
import { setAccessToken, setRefreshToken } from "../../store/slice/authSlice";

const SignUpScreen: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email || !password || !confirmPassword) {
      toast.error("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const response = await fetch(
        "https://backend-practice.euriskomobility.me/signup",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();
      if (!response.ok) {
        throw new Error(
          data.message || "An error occurred while creating the account"
        );
      }
      dispatch(setAccessToken(data.accessToken));
      dispatch(setRefreshToken(data.refreshToken));
      navigate("/", { replace: true });

      toast.success("Account created successfully!");
    } catch (error) {
      toast.error((error as Error).message || "An unexpected error occurred");
    }
  };

  return (
    <SignUpContainer
      style={{
        backgroundImage: `url(${require("../../assets/images/backgroundLogIn.jpg")})`,
        backgroundSize: "cover",
      }}
    >
      <Title>Create an Account</Title>
      <SignUpForm onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            type="password"
            id="confirmPassword"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
