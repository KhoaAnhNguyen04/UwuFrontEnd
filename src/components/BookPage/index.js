import React from "react";
import { useLocation, useParams } from "react-router-dom";
import {
  BookInfoContainer,
  BookPageLayout,
  FeedbackContainer,
} from "./BookPage.style";
// import PropTypes from "prop-types";

const BookPage = () => {
  //   const { book_title } = useParams();
  //   const location = useLocation();
  //   console.log(location);
  //   const { title, description, rating, img } = location.state || {};
  //   console.log(img);

  return (
    <BookPageLayout>
      <div className="img_container">
        <img
          style={{ width: "100%", borderRadius: 12 }}
          src="princeBook.png"
          alt={"da fuk"}
        />
      </div>
      <BookInfoContainer>
        <h1>Book Title</h1>
        <div>
          <p>Rating</p>
          <p>Number of Rating</p>
        </div>
        <div>
          <p>Author</p>
          <p>Author Name</p>
        </div>
        <div>
          <p>Category</p>
          <p>Cate Name</p>
        </div>

        <p>Release Date</p>
        <p>Mien phi</p>
        <p>description</p>
        <p>Review Button</p>
        <p>Reading Button</p>
      </BookInfoContainer>
      <FeedbackContainer></FeedbackContainer>
    </BookPageLayout>
  );
};
// BookPage.propTypes = {
//   title: PropTypes.string,
//   description: PropTypes.string,
//   rating: PropTypes.number,
//   img: PropTypes.string,
// };

export default BookPage;
