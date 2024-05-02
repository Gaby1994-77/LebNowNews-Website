import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAccessToken, setRefreshToken } from "../../store/slice/authSlice";
import { clearSelectedPosts } from "../../store/post";
import { toast } from "react-hot-toast";
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim() || !password.trim()) {
      toast.error("Please enter both email and password to login.");
      return;
    }

    try {
      const response = await fetch(
        "https://backend-practice.euriskomobility.me/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password, token_expires_in: "0.2m" }),
        }
      );

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      dispatch(setAccessToken(data.accessToken));
      dispatch(setRefreshToken(data.refreshToken));
      dispatch(clearSelectedPosts());
      console.log(data.accessToken);
      toast.success(`Welcome, ${email}! Login successful.`, {
        position: "top-right",
        icon: "👏",
      });
      navigate("/", { replace: true });
    } catch (error) {
      console.error("Login error:", error);
      toast.error((error as Error).message);
    }
  };

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
            <Label htmlFor="username">User</Label>
            <Input
              type="text"
              id="username"
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
