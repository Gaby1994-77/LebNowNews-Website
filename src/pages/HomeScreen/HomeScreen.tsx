import React from "react";
import PostCard from "../../components/PostCard/PostCard";
import Carosel from "../../components/Carousel/Carousel";
import { BackgroundContainer } from "./HomeScreen.Styles";
import "react-toastify/dist/ReactToastify.css";

function HomeScreen() {
  return (
    <BackgroundContainer>
      <Carosel />
      <PostCard />
    </BackgroundContainer>
  );
}

export default HomeScreen;
