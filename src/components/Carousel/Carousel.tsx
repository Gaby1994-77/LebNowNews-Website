import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styles from "./Carousel.module.css";
interface Props {
  images: { url: string; title?: string }[];
}
const Carousel: React.FC<Props> = ({ images }) => {
  const imagePairs = [];
  for (let i = 0; i < images.length; i += 2) {
    imagePairs.push(images.slice(i, i + 2));
  }

  return (
    <div className={styles.ArrowContainer}>
      <Slide>
        {imagePairs.map((pair, index) => (
          <div className="each-slide" key={index}>
            <div className={styles.EachSlideEffect}>
              <div
                className={styles.ImageWrapper}
                style={{
                  backgroundImage: `url(${pair[0].url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "50%",
                  height: "100%",
                }}
              >
                <span className={styles.SlideTitle}>{pair[0].title}</span>
              </div>
              {pair[1] && (
                <div
                  className={styles.ImageWrapper}
                  style={{
                    backgroundImage: `url(${pair[1].url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "50%",
                    height: "100%",
                  }}
                >
                  <span className={styles.SlideTitle}>{pair[1].title}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Carousel;
