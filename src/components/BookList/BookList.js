import React, { useState } from "react";
import styled from "styled-components";
import BookCard from "../MovieCard/BookCard";

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
  .list_layout {
    display: flex;
    gap: 32px;
    overflow-x: scroll;
  }
  .temp {
    width: 200px;
    height: 200px;
  }
`;

const BookList = () => {
  return (
    <BookListContainer>
      <h3>Title</h3>
      <div className="list_layout">
        <BookCard img="book.jpg" title="hang"></BookCard>
        <BookCard img="princeBook.png" title="hang"></BookCard>
        <BookCard img="book.jpg" title="hang"></BookCard>
      </div>
    </BookListContainer>
  );
};

export default BookList;
