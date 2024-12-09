import { Button } from "@mui/material";
import React from "react";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import {
  BookActiveContainer,
  BookDescriptionLayout,
  ButtonsGroup,
  CustomRating,
} from "./BookHoverCard.style";

const BookHoverCard = (props) => {
  let description = String(props.description);
  if (description.length > 150) {
    description = description.substring(0, 250);
    let max = Math.max(
      description.lastIndexOf("."),
      description.lastIndexOf(",")
    );
    description = description.substring(0, max);
  }
  const navigate = useNavigate();

  return (
    <div>
      <BookActiveContainer>
        <div className="img_container">
          <img src={props.img} alt={props.title} />
        </div>
        <BookDescriptionLayout>
          <div className="detail_box">
            <a href={`/book/${props.bookId}`}>
              <h3>{props.title}</h3>
            </a>
            <h4>Jamie</h4>
            <CustomRating readOnly value={props.rating} precision={0.5} />
          </div>
          <ButtonsGroup>
            <p>Mien phi</p>
            <Button>
              <MenuBookIcon style={{ width: 24 }} /> Read Now
            </Button>
            <Button>
              <AddIcon style={{ width: 24 }} />
              Buy Now
            </Button>
          </ButtonsGroup>
          <p>
            {description} <a href={`/book/${props.bookId}`}>More</a>
          </p>
          <a
            onClick={() =>
              navigate("/review", { state: { bookId: props.bookId } })
            }
            style={{ cursor: "pointer" }}
          >
            Review
          </a>
        </BookDescriptionLayout>
      </BookActiveContainer>
    </div>
  );
};

export default BookHoverCard;
