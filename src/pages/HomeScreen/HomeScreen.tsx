import React from "react";
import PostCard from "../../components/PostCard/PostCard";
import Carousel from "../../components/Carousel/Carousel";
import { BackgroundContainer } from "./HomeScreen.Styles";

const HomeScreen: React.FC = () => {
  return (
    <BackgroundContainer>
      <Carousel />
      <PostCard />
    </BackgroundContainer>
  );
};

export default HomeScreen;
