import React from "react";
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

  h3 {
    font-size: 24px;
    font-weight: 600;
  }

  .list_layout {
    display: flex;
    gap: 32px;
    overflow-x: scroll;
    padding-bottom: 16px;
  }
`;

const BookList = ({ data, imgList, title }) => {
  if (!Array.isArray(data) || !Array.isArray(imgList)) {
    return <p>Invalid data or image list</p>;
  }
  return (
    <BookListContainer>
      <h3>{title}</h3>
      <div className="list_layout">
        {data.map((book, index) => (
          <BookCard
            bookId={book.bookid}
            key={index}
            img={imgList[index].img}
            title={book.title}
            description={`Published on: ${book.publication_date}`}
            rating={book.rating}
          />
        ))}
      </div>
    </BookListContainer>
  );
};

export default BookList;
