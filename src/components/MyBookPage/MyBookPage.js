import React from "react";
import styled from "styled-components";
import BookCard from "../MovieCard/BookCard";
import data from "../BookList/data";
export const MyBookLayout = styled.div`
  display: flex;
  gap: 4%;
  flex-wrap: wrap;
  * {
    color: var(--white-text);
  }
`;
const MyBookPage = () => {
  return (
    <div
      style={{
        margin: "5% 5%",
        display: "flex",
        flexDirection: "column",
        gap: 40,
      }}
    >
      <h1 style={{ color: "#fff" }}>Hello Nguyen Anh Khoa</h1>
      <MyBookLayout>
        {data.map((book, index) => (
          <div style={{ marginBottom: 32, flexBasis: "16%" }}>
            <BookCard
              key={index}
              img={book.img}
              title={book.title}
              description={book.description}
              rating={book.rating}
            />
          </div>
        ))}
      </MyBookLayout>
    </div>
  );
};

export default MyBookPage;
