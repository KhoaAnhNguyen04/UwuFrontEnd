import React from "react";
// import { useLocation, useParams } from "react-router-dom";
import {
  BookInfoContainer,
  BookPageLayout,
  FeedbackContainer,
  HorizonBlock,
} from "./BookPage.style";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AddIcon from "@mui/icons-material/Add";
import { Button, Rating } from "@mui/material";
import { ButtonsGroup } from "../MovieCard/BookHoverCard.style";
import FeedBack from "./FeedBack";
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
        <div className="rating_block">
          <Rating
            sx={{ fontSize: 24 }}
            readOnly
            value="5"
            precision={0.5}
          ></Rating>
          <p>2 Feedbacks</p>
        </div>
        <HorizonBlock>
          <div className="small_block">
            <p>Author</p>
            <p style={{ color: "var(--green-contrast)" }}>HieuThuHai</p>
          </div>
          <div className="small_block">
            <p>Category</p>
            <p style={{ color: "var(--green-contrast)" }}>Fiction Book</p>
          </div>
        </HorizonBlock>
        <HorizonBlock>
          <div className="small_block">
            <p>Release Date</p>
            <p style={{ color: "var(--green-contrast)" }}>30/6/2022</p>
          </div>
          <div className="small_block">
            <p>Member Pack </p>
            <p style={{ color: "var(--green-contrast)" }}>Mien phi</p>
          </div>
        </HorizonBlock>
        <ButtonsGroup style={{ width: "70%" }}>
          <Button>
            <MenuBookIcon style={{ width: 24 }} /> Read Now
          </Button>
          <Button>
            <AddIcon style={{ width: 24 }} />
            Get Now
          </Button>
        </ButtonsGroup>
        <div>
          <p style={{ color: "var(--green-contrast)" }}>Description</p>
          <p>
            Atomic Habits is a comprehensive, practical guide on how to change
            your habits and get 1% better every day. Using a framework called
            the Four Laws of Behavior Change Atomic Habits is a comprehensive,
            practical guide on how to change your habits and get 1% better every
            day. Using a framework called the Four Laws of Behavior Change
          </p>
        </div>
      </BookInfoContainer>
      <FeedbackContainer>
        <FeedBack
          name="Khoa Anh Nguyen"
          rating="4"
          date="26/7"
          comment="The best ever book I have read"
        ></FeedBack>
        <FeedBack
          name="Khoa Anh Nguyen"
          rating="4"
          date="26/7"
          comment="The best ever book I have read"
        ></FeedBack>
        <FeedBack
          name="Khoa Anh Nguyen"
          rating="4"
          date="26/7"
          comment="The best ever book I have read"
        ></FeedBack>
        <FeedBack
          name="Khoa Anh Nguyen"
          rating="4"
          date="26/7"
          comment="The best ever book I have read"
        ></FeedBack>
      </FeedbackContainer>
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
