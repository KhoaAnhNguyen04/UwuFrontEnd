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
        <BookCard img="bk1.png" title="Atomic Habit"></BookCard>
        <BookCard
          img="princeBook.png"
          title="Hoang Tu Be Hoang Tu Be Hoang Tu Be"
        ></BookCard>
        <BookCard img="horror_bk.png" title="Anh Khoa"></BookCard>
        <BookCard img="bk2.png" title="Viet Hung"></BookCard>
        <BookCard img="bk3.png" title="Bao Duy"></BookCard>
        <BookCard img="bk4.png" title="hang"></BookCard>
        <BookCard img="book.jpg" title="hang"></BookCard>
        <BookCard img="princeBook.png" title="hang"></BookCard>
        <BookCard img="horror_bk.png" title="hang"></BookCard>
      </div>
    </BookListContainer>
  );
};

export default BookList;
