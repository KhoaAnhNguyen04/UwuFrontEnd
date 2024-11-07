import React from "react";
import { FeedbackBlock } from "./BookPage.style";
import { Rating } from "@mui/material";

const FeedBack = (props) => {
  return (
    <FeedbackBlock>
      <div>
        <h3>{props.name}</h3>
        <p>{props.date}</p>
      </div>
      <Rating
        sx={{ fontSize: 24 }}
        readOnly
        value={props.rating}
        precision={0.5}
      ></Rating>
      <p>{props.comment}</p>
    </FeedbackBlock>
  );
};

export default FeedBack;
