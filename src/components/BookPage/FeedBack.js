import React, { useEffect } from "react";
import { FeedbackBlock } from "./BookPage.style";
import { Rating } from "@mui/material";

const FeedBack = (props) => {
  useEffect(() => {
    console.log("Feedback received:", {
      name: props.name,
      date: props.date,
      rating: props.rating,
      comment: props.comment,
    });
  }, [props.name, props.date, props.rating, props.comment]); // Dependencies to log on prop change

  return (
    <FeedbackBlock>
      <div>
        <h3>{props.name}</h3>
        <p>{props.date}</p>
      </div>
      <Rating sx={{ fontSize: 24 }} value={props.rating} precision={0.5} />
      <p>{props.comment}</p>
    </FeedbackBlock>
  );
};

export default FeedBack;
