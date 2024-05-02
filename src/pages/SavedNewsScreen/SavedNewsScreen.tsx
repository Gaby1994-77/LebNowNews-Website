import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSelectedPosts, removePost } from "../../store/post";
import styles from "./SavedNewsScreen.module.css";

function SavedNewsScreen() {
  const dispatch = useDispatch();
  const selectedPosts = useSelector(selectSelectedPosts);

  const handleRemove = (articleId: string) => {
    dispatch(removePost(articleId));
  };

  if (!selectedPosts || selectedPosts.length === 0) {
    return <div className={styles.noData}>No saved news found!</div>;
  }

  return (
    <div className={styles.cardsWrapper}>
      {selectedPosts.map((post, index) => (
        <div key={`post-${index}`} className={styles.card}>
          <button
            className={styles.removeButton}
            onClick={() => handleRemove(post.article_id)}
          >
            Remove
          </button>
          <img
            src={post.image_url || "default-image.jpg"}
            alt="Card"
            className={styles.cardImage}
          />
          <div className={styles.cardBody}>
            <h3 className={styles.cardTitle}>{post.title}</h3>
            <p className={styles.cardContent}>{post.content}</p>
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Read more
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SavedNewsScreen;
