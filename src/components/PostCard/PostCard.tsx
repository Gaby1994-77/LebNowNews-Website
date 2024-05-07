import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSelectedPosts, saveSelectedPost } from "../../store/post";
import Carousel from "../Carousel/Carousel";
import specificImage from "../../assets/images/Logo.jpg";
import viewButtonImage from "../../assets/icons/saveme.png";
import styles from "./PostCard.module.css";
import toast from "react-hot-toast";
import {
  resetAuthState,
  selectAccessToken,
  selectRefreshToken,
  setAccessToken,
} from "../../store/slice/authSlice";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../api";

interface Post {
  _id: string;
  article_id: string;
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
  const selectedPosts = useSelector(selectSelectedPosts);
  const accessToken = useSelector(selectAccessToken);
  const refreshToken = useSelector(selectRefreshToken);
  const [accessTokenRefreshed, setAccessTokenRefreshed] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          `${baseUrl}posts?page=${pagination.currentPage}&pageSize=${pageSize}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        if (!response.ok) {
          if (response.status === 403 && !accessTokenRefreshed) {
            await refreshAccessToken();
            setAccessTokenRefreshed(true);
          }
          throw new Error("Failed to fetch posts");
        }
        const { results, pagination: fetchedPagination } =
          await response.json();
        setPosts(results);
        setPagination(fetchedPagination);
      } catch (error) {}
    };
    const refreshAccessToken = async () => {
      try {
        const response = await fetch(`${baseUrl}refresh-token`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            refreshToken,
            token_expires_in: "0.2m",
          }),
        });
        if (!response.ok) {
          throw new Error("Failed to refresh access token");
        }
        const { accessToken: newAccessToken } = await response.json();
        console.log("Previous Access Token:", accessToken);
        console.log("New Access Token:", newAccessToken);
        dispatch(setAccessToken(newAccessToken));
        setAccessTokenRefreshed(true);
      } catch (error) {
        console.error("Error refreshing access token:", error);
        dispatch(resetAuthState());
      }
    };
    if (!accessToken && accessTokenRefreshed) {
      dispatch(resetAuthState());
      console.log("session ");
      navigate("/");
      return;
    } else {
      fetchPosts();
    }
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
    const postExists = selectedPosts.some(
      (savedPost) => savedPost._id === post._id
    );

    if (!postExists) {
      dispatch(saveSelectedPost(post));
      toast.success(`Post Saved`, {
        position: "top-right",
      });
    } else {
      toast.error(`Post already saved!`, {
        position: "top-right",
      });
    }
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
          <div key={`post-${post._id || index}`} className={styles.card}>
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
