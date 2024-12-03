import { Button, Rating, TextField } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import React, { useState } from "react";
import styled from "styled-components";
export const ReviewLayout = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(2px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
`;
export const ReviewBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 16px;
  display: flex;
  width: 400px;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  .rating_box {
    display: flex;
    gap: 16px;
  }
  .MuiButton-contained {
    background-color: var(--green-contrast);
  }
  .MuiOutlinedInput-root {
    font-size: 12px;
    padding: 12px;
  }
  .Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: var(--green-contrast) !important;
  }
  h3 {
    font-size: var(--small-font_size);
  }
`;

const Review = () => {
  const [rating, setRating] = useState(5);
  const [feedback, setFeedback] = useState("");

  const handleSubmit = () => {
    console.log("Rating:", rating);
    console.log("Feedback:", feedback);
  };

  return (
    <ReviewLayout>
      <ReviewBox>
        <a href="/">
          <CancelIcon
            sx={{
              fontSize: "24px",
              cursor: "pointer",
            }}
          />
        </a>

        <h2>Review and Rating</h2>

        <div className="rating_box">
          <h3>Rating</h3>
          <Rating
            name="review-rating"
            value={rating}
            onChange={(event, newValue) => {
              setRating(newValue);
            }}
            sx={{ fontSize: 32 }}
          />
        </div>

        <div>
          <h3>Feedback</h3>
          <TextField
            placeholder="Feel free to give us your experience"
            fullWidth
            multiline
            rows={5}
            variant="outlined"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
        </div>

        <Button
          variant="contained"
          sx={{ fontSize: 14, fontWeight: 600, marginTop: "16px" }}
          onClick={handleSubmit}
        >
          Send
        </Button>
      </ReviewBox>
    </ReviewLayout>
  );
};

export default Review;
