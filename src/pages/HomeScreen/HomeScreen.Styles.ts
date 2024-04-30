import styled from "styled-components";

export const BackgroundContainer = styled.div`
  background-image: url(${require("../../assets/images/backgroundLogIn.jpg")});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
