import React, { Dispatch, SetStateAction } from "react";
import PostCard from "../../components/PostCard/PostCard";
import Carousel from "../../components/Carousel/Carousel";
import { BackgroundContainer } from "./HomeScreen.Styles";
import "react-toastify/dist/ReactToastify.css";

interface HomeScreenProps {
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ setIsAuthenticated }) => {
  return (
    <BackgroundContainer>
      <Carousel />
      <PostCard />
    </BackgroundContainer>
  );
};

export default HomeScreen;
