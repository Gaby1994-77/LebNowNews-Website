import React from "react";
import styles from "./PostCard.module.css";

const PostCard = () => {
  const cardData = [
    {
      imageUrl: "https://readymadeui.com/cardImg.webp",
      title: "Heading 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui. Maecenas Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui. Maecenas.",
    },
    {
      imageUrl: "https://readymadeui.com/cardImg.webp",
      title: "Heading 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui. Maecenas Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui. Maecenas.",
    },
    {
      imageUrl: "https://readymadeui.com/cardImg.webp",
      title: "Heading 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui. Maecenas Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui. Maecenas.",
    },
    {
      imageUrl: "https://readymadeui.com/cardImg.webp",
      title: "Heading 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui. Maecenas Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui. Maecenas.",
    },
    {
      imageUrl: "https://readymadeui.com/cardImg.webp",
      title: "Heading 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui. Maecenas Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui. Maecenas.",
    },
    {
      imageUrl: "https://readymadeui.com/cardImg.webp",
      title: "Heading 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui. Maecenas Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui. Maecenas.",
    },
  ];

  return (
    <div className={styles.postCardContainer}>
      <div className={styles.cardsWrapper}>
        {cardData.map((card, index) => (
          <div key={index} className={styles.card}>
            <img
              src={card.imageUrl}
              className={styles.cardImage}
              alt="Card Image"
            />
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardContent}>{card.content}</p>
              <div className="flex justify-end">
                <button type="button" className={styles.viewButton}>
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostCard;
