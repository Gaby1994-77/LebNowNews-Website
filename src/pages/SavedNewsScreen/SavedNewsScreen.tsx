import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSelectedPosts, removePost } from "../../store/post";
import specificImage from "../../assets/images/Logo.jpg";
import styles from "./SavedNewsScreen.module.css";
import noDataImage from "../../assets/icons/delete.png";

function SavedNewsScreen() {
  const dispatch = useDispatch();
  const selectedPosts = useSelector(selectSelectedPosts);

  const handleRemove = (postId: number) => {
    console.log("Removing post with ID:", postId);
    dispatch(removePost(postId));
  };

  if (!selectedPosts || selectedPosts.length === 0) {
    return (
      <div className={styles.noData}>
        <img src={noDataImage} alt="No data" className={styles.noDataImage} />
        No saved news found!
      </div>
    );
  }

  const reversedPosts = [...selectedPosts].reverse();

  return (
    <div className={styles.cardsWrapper}>
      {reversedPosts.map((post, index) => (
        <div key={index} className={styles.card}>
          <button
            className={styles.removeButton}
            onClick={() => handleRemove(post.id)}
          >
            Remove
          </button>
          <img
            src={post.image_url || specificImage}
            className={`${styles.cardImage} ${
              !post.image_url && styles.fallbackImage
            }`}
            alt="Card Image"
          />
          <div className={styles.cardBody}>
            <h3 className={styles.cardTitle}>{post.title}</h3>
            <p className={styles.cardContent}>{post.content}</p>
            <p className={styles.link}>
              <a href={post.link} target="_blank" rel="noopener noreferrer">
                Read more
              </a>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SavedNewsScreen;
