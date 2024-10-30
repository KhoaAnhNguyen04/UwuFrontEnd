import { Button, Rating } from "@mui/material";
import React from "react";
import styled from "styled-components";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AddIcon from "@mui/icons-material/Add";

export const BookActiveContainer = styled.div`
  z-index: 10000 !important;
  position: absolute;
  left: 0;
  display: flex;
  width: 700px;
  background-color: var(--black-color-effect);
  padding: 16px;
  border-radius: 12px;
  gap: 20px;
  * {
    color: var(--white-text);
  }
  .img_container {
    flex-basis: 45%;
    position: relative;
    img {
      position: relative;
      width: 100%;
      background: var(--book-img-cover);
      overflow: hidden;
      border-radius: 12px;
    }
  }
`;
export const CustomRating = styled(Rating)`
  && {
    * {
      color: var(--green-contrast);
      font-size: 24px;
    }
  }
`;

export const BookDescriptionLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  .detail_box {
    height: max-content;
  }
  h3 {
    font-size: var(--label-font_size);
  }
  h4 {
    font-size: var(--small-font_size);
  }
  a {
    font-size: var(--sub-font_size);
    color: var(--green-contrast);
  }
`;
export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  p {
    flex-basis: 50%;
    font-weight: 600;
    color: var(--green-contrast);
  }
  Button {
    svg {
      width: 24px !important;
    }
    display: flex;
    color: var(--white-text);
    border-radius: 12px;
    background-color: var(--green-contrast);
    text-transform: none;
    font-size: var(--sub-font_size);
  }
`;
const BookHoverCard = () => {
  // if (!props.hover) return null;
  return (
    <div>
      <BookActiveContainer>
        <div className="img_container">
          <img src="book.jpg" />
        </div>
        <BookDescriptionLayout>
          <div className="detail_box">
            <h3>Atomic Habit</h3>
            <h4>Jamie</h4>
            <CustomRating></CustomRating>
          </div>
          <ButtonGroup>
            <p>Mien phi</p>
            <Button>
              <MenuBookIcon style={{ width: 24 }} /> Read Now
            </Button>
            {/* add the state if buy -> It will present read a demo */}
            <Button>
              <AddIcon style={{ width: 24 }} />
              Buy Now
            </Button>
          </ButtonGroup>
          <p>
            Atomic Habits is a comprehensive, practical guide on how to change
            your habits and get 1% better every day. Using a framework called
            the Four Laws of Behavior Change
          </p>
          <a style={{ cursor: "pointer" }}>Feedback</a>
        </BookDescriptionLayout>
      </BookActiveContainer>
    </div>
  );
};

export default BookHoverCard;
