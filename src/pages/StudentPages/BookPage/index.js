import React from "react";
import { useLocation, useParams } from "react-router-dom";

const BookPage = () => {
  const { book_title } = useParams();
  const location = useLocation();
  console.log(location);
  const { title, description, rating, img } = location.state || {};

  return (
    <div>
      <h1>Book Title: {book_title}</h1>
      {title && <h2>{title}</h2>}
      {img && <img src={img} alt={title} />}
      {rating && <p>Rating: {rating}</p>}
      {description && <p>{description}</p>}
    </div>
  );
};

export default BookPage;
