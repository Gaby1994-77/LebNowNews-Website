import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { EachSlideEffect, SlideSpan, ArrowContainer } from "./Carousel.Styles";

const Carousel: React.FC = () => {
  const images: string[] = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  ];

  return (
    <ArrowContainer>
      <Slide>
        {images.map((image, index) => (
          <EachSlideEffect key={index}>
            <div style={{ backgroundImage: `url(${image})` }}>
              <SlideSpan>Slide {index + 1}</SlideSpan>
            </div>
          </EachSlideEffect>
        ))}
      </Slide>
    </ArrowContainer>
  );
};

export default Carousel;
