import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAccessToken } from "../../store/slice/authSlice";
import Carousel from "../Carousel/Carousel";
import specificImage from "../../assets/images/Logo.jpg";
import viewButtonImage from "../../assets/icons/saveme.png";
import styles from "./PostCard.module.css";
import { saveSelectedPost } from "../../store/post";
import toast from "react-hot-toast";

interface Post {
  id: number;
  title: string;
  link: string;
  content: string;
  image_url?: string;
}

interface Pagination {
  currentPage: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

const pageSize = 12;

const PostCard = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [pagination, setPagination] = useState<Pagination>({
    currentPage: 1,
    totalPages: 1,
    hasNextPage: false,
    hasPrevPage: false,
  });
  const accessToken = useSelector(selectAccessToken);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          `https://backend-practice.euriskomobility.me/posts?page=${pagination.currentPage}&pageSize=${pageSize}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const { results, pagination: fetchedPagination } =
          await response.json();
        console.log(results);
        setPosts(results);
        setPagination(fetchedPagination);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, [accessToken, pagination.currentPage]);

  useEffect(() => {
    if (posts.length > 0) {
    }
  }, [posts]);

  const handleNextPage = () => {
    if (pagination.hasNextPage) {
      setPagination((prev) => ({
        ...prev,
        currentPage: prev.currentPage + 1,
      }));
    }
  };

  const handlePrevPage = () => {
    if (pagination.hasPrevPage) {
      setPagination((prev) => ({
        ...prev,
        currentPage: prev.currentPage - 1,
      }));
    }
  };

  const handleSavePost = (post: Post) => {
    dispatch(saveSelectedPost(post));
    toast.success(`Post Saved`, {
      position: "top-right",
    });
  };

  return (
    <div className={styles.postCardContainer}>
      {posts.length > 0 && (
        <div className={styles.Carousel}>
          <Carousel
            images={posts.map((post) => ({
              url: post.image_url || specificImage,
              title: post.title,
            }))}
          />
        </div>
      )}
      <div className={styles.cardsWrapper}>
        {posts.map((post: Post, index: number) => (
          <div key={`post-${post.id || index}`} className={styles.card}>
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
              <div className="flex justify-end">
                <img
                  onClick={() => handleSavePost(post)}
                  src={viewButtonImage}
                  className={styles.viewButton}
                  alt="View Button"
                />
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
            {pagination.currentPage} / {pagination.totalPages}
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
