import styled from "styled-components";

export const SignUpContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: relative;
`;

export const SignUpForm = styled.form`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 2rem;
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
`;

export const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  margin-bottom: 0.5rem;
`;

export const SignUpButton = styled.button`
  width: 45%;
  padding: 0.7rem;
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
  display: block;
  border: none;
  border-radius: 4px;
  background-color: #0045ff;
  color: white;
  cursor: pointer;
`;

export const BackToLogin = styled.div`
  text-align: center;
  margin-top: 1rem;
  text-decoration: underline;
`;

export const Link = styled.a`
  color: #0045ff;
`;

export const Title = styled.h2`
  position: absolute;
  top: 15%;
  left: 49.5%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 30px;
`;
