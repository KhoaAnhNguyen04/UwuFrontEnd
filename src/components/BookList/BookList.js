import React from "react";
import styled from "styled-components";
import BookCard from "../MovieCard/BookCard"; //

import data from "./data";

export const BookListContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: 32px;
  width: 100%;
  padding: 0px 32px;
  gap: 24px;
  height: 500px;

  * {
    color: var(--white-text);
  }

  h3 {
    font-size: 24px;
    font-weight: 600;
    color: var(--primary-text);
  }

  .list_layout {
    display: flex;
    gap: 32px;
    overflow-x: scroll;
    padding-bottom: 16px;
  }
`;

const BookList = () => {
  return (
    <BookListContainer>
      <h3>Title</h3>
      <div className="list_layout">
        {data.map((book, index) => (
          <BookCard
            key={index}
            img={book.img}
            title={book.title}
            description={book.description}
            rating={book.rating}
          />
        ))}
      </div>
    </BookListContainer>
  );
};

export default BookList;
