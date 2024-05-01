import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectAccessToken } from "../../store/slice/authSlice";
import styles from "./PostCard.module.css";

interface Post {
  title: string;
  link: string;
  content: string;
  image_url: string;
}

interface Pagination {
  currentPage: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

const PostCard = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [pagination, setPagination] = useState<Pagination>({
    currentPage: 1,
    totalPages: 1,
    hasNextPage: false,
    hasPrevPage: false,
  });
  const accessToken = useSelector(selectAccessToken);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          `https://backend-practice.euriskomobility.me/posts?page=${pagination.currentPage}&pageSize=10`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const postData = await response.json();
        setPosts(postData.results);
        const totalPages = Math.ceil(postData.totalItems / 10) || 1;
        setPagination((prev) => ({
          currentPage: postData.currentPage,
          totalPages: totalPages,
          hasNextPage: postData.currentPage < totalPages,
          hasPrevPage: postData.currentPage > 1,
        }));
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, [accessToken, pagination.currentPage]);

  const handleNextPage = () => {
    setPagination((prev) => ({
      ...prev,
      currentPage: prev.currentPage + 1,
    }));
  };

  const handlePrevPage = () => {
    setPagination((prev) => ({
      ...prev,
      currentPage: prev.currentPage - 1,
    }));
  };

  return (
    <div className={styles.postCardContainer}>
      <div className={styles.cardsWrapper}>
        {posts.map((post, index) => (
          <div key={index} className={styles.card}>
            <img
              src={post.image_url}
              className={styles.cardImage}
              alt="Card Image"
            />
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>{post.title}</h3>
              <p className={styles.cardContent}>{post.content}</p>
              <div className="flex justify-end">
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.viewButton}
                >
                  View
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.paginationWrapper}>
        <div className={styles.pagination}>
          <button
            onClick={handlePrevPage}
            disabled={!pagination.hasPrevPage}
            className={styles.button}
          >
            Previous
          </button>
          <span>
            {pagination.currentPage} {pagination.totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={!pagination.hasNextPage}
            className={styles.button}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
