import React from "react";
import PostCard from "../../components/PostCard/PostCard";
import { BackgroundContainer } from "./HomeScreen.Styles";

const HomeScreen: React.FC = () => {
  return (
    <BackgroundContainer>
      <PostCard />
    </BackgroundContainer>
  );
};

export default HomeScreen;
