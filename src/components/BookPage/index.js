import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  BookInfoContainer,
  BookPageLayout,
  FeedbackContainer,
  HorizonBlock,
} from "./BookPage.style";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AddIcon from "@mui/icons-material/Add";
import { Button, Rating, Snackbar } from "@mui/material";
import { ButtonsGroup } from "../MovieCard/BookHoverCard.style";
import FeedBack from "./FeedBack";

const BookPage = () => {
  const location = useLocation();
  const { bookId, img } = location.state || {};
  const backendUrl = process.env.REACT_APP_BACKEND;
  const userId = localStorage.getItem("userID");
  const [bookData, setBookData] = useState(null);
  const [bookReviews, setBookReviews] = useState([]);
  const [error, setError] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const navigate = useNavigate();

  const fetchBookData = async () => {
    try {
      const response = await axios.get(`${backendUrl}/book/${bookId}`);
      if (response.status === 200) {
        setBookData(response.data);
      } else {
        setError("Failed to fetch book details.");
      }
    } catch (err) {
      console.error("Error fetching book data:", err);
      setError(err.response?.data?.message || "An error occurred.");
    }
  };

  const handleGetNow = async () => {
    if (!userId) {
      setError("You must be logged in to get the book.");
      return;
    }
    const body = {
      user_id: userId,
      book_id: bookId,
    };
    try {
      const response = await axios.post(`${backendUrl}/access`, body);
      if (response.status === 200 || response.status === 201) {
        setSnackbarMessage("Book added successfully!");
        setOpenSnackbar(true);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        setError("Failed to get the book. Please try again.");
      }
    } catch (err) {
      console.error("Error getting book:", err);
      if (err.response && err.response.data && err.response.data.detail) {
        const errorMessage = err.response.data.detail;
        if (errorMessage.includes("Duplicate entry")) {
          setSnackbarMessage("This book has already been added to your list.");
          setOpenSnackbar(true);
        } else {
          setError(
            err.response?.data?.message ||
              "An error occurred while fetching the book."
          );
        }
      } else {
        setError("An unknown error occurred.");
      }
    }
  };

  const fetchBookFeedBack = async () => {
    if (!bookId) return;

    try {
      const response = await axios.get(`${backendUrl}/feedback/${bookId}`);
      if (response.status === 200) {
        setBookReviews(response.data);
      }
    } catch (err) {
      console.error("Error fetching feedback:", err);
      if (err.response && err.response.status === 400) {
      } else {
        setError(
          err.response?.data?.message ||
            "An error occurred while fetching feedback."
        );
      }
    }
  };

  useEffect(() => {
    fetchBookData();
  }, [bookId]);

  useEffect(() => {
    if (bookId) {
      fetchBookFeedBack();
    }
  }, [bookId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!bookData) {
    return <div>Loading...</div>;
  }

  const formattedReviews = bookReviews.map((review) => ({
    name: `User ${review.UserID}`,
    rating: review.Rating,
    date: new Date(review.Time).toLocaleDateString(),
    comment: review.Comment,
  }));

  const categories = bookData.categories ? bookData.categories.split(",") : [];

  return (
    <>
      <BookPageLayout>
        <div className="img_container">
          <img
            style={{ width: "100%", borderRadius: 12 }}
            src={img || "princeBook.png"}
            alt="Book cover"
          />
        </div>
        <BookInfoContainer>
          <h1>{bookData.Title}</h1>
          <div className="rating_block">
            <Rating
              sx={{ fontSize: 24 }}
              readOnly
              value={bookData.Rating}
              precision={0.5}
            />
            <p>{bookReviews.length || 0} Feedbacks</p>
          </div>
          <HorizonBlock>
            <div className="small_block">
              <p>Author</p>
              <p style={{ color: "var(--green-contrast)" }}>
                {bookData.Author || "Unknown"}
              </p>
            </div>
            <div className="small_block">
              <p>Category</p>
              <p style={{ color: "var(--green-contrast)" }}>
                {categories.join(", ") || "General"}
              </p>
            </div>
          </HorizonBlock>
          <ButtonsGroup style={{ width: "70%" }}>
            <Button onClick={handleGetNow}>
              <MenuBookIcon style={{ width: 24 }} /> Read Now
            </Button>
            <Button onClick={handleGetNow}>
              <AddIcon style={{ width: 24 }} />
              Get Now
            </Button>
          </ButtonsGroup>
        </BookInfoContainer>

        <FeedbackContainer>
          {formattedReviews.length > 0 ? (
            formattedReviews.map((review, index) => (
              <FeedBack
                key={index}
                name={review.name}
                rating={review.rating}
                date={review.date}
                comment={review.comment}
              />
            ))
          ) : (
            <div>No reviews yet.</div>
          )}
        </FeedbackContainer>
      </BookPageLayout>

      <Snackbar
        sx={{
          width: 600,
          height: 120,
          fontSize: 36,
          color: "white",
          borderRadius: 12,
          padding: 24,
        }}
        open={openSnackbar}
        autoHideDuration={500}
        onClose={() => setOpenSnackbar(false)}
        message={snackbarMessage}
      />
    </>
  );
};

export default BookPage;
