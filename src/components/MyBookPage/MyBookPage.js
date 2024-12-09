import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import data from "~/pages/StudentPages/Dashboard/data";
import BookCard from "../MovieCard/BookCard";

export const MyBookLayout = styled.div`
  display: flex;
  gap: 4%;
  flex-wrap: wrap;
  * {
    color: var(--white-text);
  }
`;

const MyBookPage = () => {
  const { data1, data2, data3 } = data;
  const backendUrl = process.env.REACT_APP_BACKEND;
  const userId = localStorage.getItem("userID");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleGetBooks = async () => {
    try {
      const response = await axios.get(`${backendUrl}/access/${userId}`);
      if (response.status === 200) {
        setBooks(response.data);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      setError("Failed to load books. Please try again.");
    }
  };

  useEffect(() => {
    handleGetBooks();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div style={{ color: "red" }}>{error}</div>;
  }

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
        {books.map((book, index) => (
          <div key={index} style={{ marginBottom: 32, flexBasis: "16%" }}>
            <BookCard
              img={data1[index % data1.length].img}
              title={book.Title}
              description={book.description || "No description available"}
              rating={book.Rating}
            />
          </div>
        ))}
      </MyBookLayout>
    </div>
  );
};

export default MyBookPage;
