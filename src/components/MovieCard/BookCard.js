import React, { useState } from "react";
import styled from "styled-components";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BookHoverCard from "./BookHoverCard";
export const BookLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  h4 {
    width: 220px;
    cursor: pointer;
    &:hover {
      color: var(--green-contrast);
    }
  }
`;
export const BookHoverContainer = styled.div`
  position: relative;
`;

export const BookCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;
  min-width: 220px;
  z-index: 1001 !important;
  cursor: pointer;

  .book-img-card {
    * {
      border-radius: 12px;
    }
    height: 330px;
    .book-status {
      position: absolute;
      right: 0;
      background-color: var(--green-contrast);
      width: 80px;
      padding: 8px;
    }
    img {
      height: 100%;
      width: 220px;
    }
  }
`;
export const BookOnHover = styled(BookHoverCard)`
  ${BookHoverContainer}:hover & {
    opacity: 1;
  }
`;

const BookCard = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <BookLayoutContainer>
      <BookHoverContainer
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered && (
          <BookHoverCard
            img={props.img}
            title={props.title}
            description={props.description}
            rating={props.rating}
          />
        )}
        <BookCardContainer>
          <div className="book-img-card">
            <div className="book-status">
              <ShoppingCartIcon />
            </div>
            <img src={props.img} alt="Book cover" />
          </div>
        </BookCardContainer>
      </BookHoverContainer>
      <a href="/book">
        <h4>{props.title} </h4>
      </a>
    </BookLayoutContainer>
  );
};

export default BookCard;
