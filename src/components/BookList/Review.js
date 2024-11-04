import { Button, Rating, TextField } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import React from "react";
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
  return (
    <ReviewLayout>
      <ReviewBox>
        <a style={{ color: "black" }} href="/">
          <CancelIcon
            sx={{
              position: "absolute",
              right: "8px",
              fontSize: "20px",
              top: "8px",
            }}
          />
        </a>

        <h2 style={{ textAlign: "center", width: "100%", marginBottom: -4 }}>
          Review and Rating
        </h2>
        <div className="rating_box">
          <h3>Rating</h3>
          <Rating defaultValue={5} sx={{ fontSize: 24 }}></Rating>
        </div>
        <div style={{ width: "100%" }}>
          <h3>Feedback</h3>
          <TextField
            placeholder={"Feel free to give us your experience"}
            fullWidth
            multiline
            rows={5}
            id="outlined-basic"
            variant="outlined"
          />
        </div>
        <Button
          variant="contained"
          sx={{ fontSize: 12, fontWeight: 600, marginTop: "4px" }}
        >
          Send
        </Button>
      </ReviewBox>
    </ReviewLayout>
  );
};

export default Review;
