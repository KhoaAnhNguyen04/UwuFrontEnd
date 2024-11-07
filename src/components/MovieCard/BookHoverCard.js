import { Button, ButtonGroup, Rating } from "@mui/material";
import React from "react";
// import styled from "styled-components";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import {
  BookActiveContainer,
  BookDescriptionLayout,
  ButtonsGroup,
  CustomRating,
} from "./BookHoverCard.style";

// export const BookActiveContainer = styled.div`
//   z-index: 100 !important;
//   transition: opacity 0.3s ease;
//   position: absolute;
//   left: 0;
//   display: flex;
//   width: 700px;
//   height: 330px;
//   background-color: var(--black-color-effect);
//   padding: 16px;
//   border-radius: 12px;
//   gap: 20px;
//   * {
//     color: var(--white-text);
//   }
//   .img_container {
//     flex-basis: 45%;
//     position: relative;
//     img {
//       position: relative;
//       width: 100%;
//       background: var(--book-img-cover);
//       overflow: hidden;
//       border-radius: 12px;
//     }
//   }
// `;
// export const CustomRating = styled(Rating)`
//   && {
//     * {
//       color: var(--green-contrast);
//       font-size: 24px;
//     }
//   }
// `;

// export const BookDescriptionLayout = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 12px;
//   width: 100%;
//   .detail_box {
//     height: max-content;
//   }
//   h3 {
//     font-size: var(--label-font_size);
//   }
//   h4 {
//     font-size: var(--small-font_size);
//   }
//   a {
//     font-size: var(--sub-font_size);
//     color: var(--green-contrast);
//   }
// `;
// export const ButtonGroup = styled.div`
//   display: flex;
//   justify-content: space-between;
//   gap: 12px;
//   p {
//     flex-basis: 50%;
//     font-weight: 600;
//     color: var(--green-contrast);
//   }
//   Button {
//     svg {
//       width: 24px !important;
//     }
//     display: flex;
//     color: var(--white-text);
//     border-radius: 12px;
//     background-color: var(--green-contrast);
//     text-transform: none;
//     font-size: var(--sub-font_size);
//   }
// `;
const BookHoverCard = (props) => {
  let description = String(props.description);
  if (description.length > 150) {
    description = description.substring(0, 250);
    let max = Math.max(
      description.lastIndexOf("."),
      description.lastIndexOf(",")
    );
    description = description.substring(0, max);
  }
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate(`/book/${props.title}`, {
      state: {
        ...props,
      },
    });
  };

  return (
    <div>
      <BookActiveContainer>
        <div className="img_container">
          <img src={props.img} />
        </div>
        <BookDescriptionLayout>
          <div className="detail_box">
            <a href="/book">
              <h3>{props.title}</h3>
            </a>
            <h4>Jamie</h4>
            <CustomRating
              readOnly
              value={props.rating}
              precision={0.5}
            ></CustomRating>
          </div>
          <ButtonsGroup>
            <p>Mien phi</p>
            <Button onClick={handleOnClick}>
              <MenuBookIcon style={{ width: 24 }} /> Read Now
            </Button>
            <Button>
              <AddIcon style={{ width: 24 }} />
              Buy Now
            </Button>
          </ButtonsGroup>
          <p>
            {description} <a>More </a>
          </p>
          <a href="/review" style={{ cursor: "pointer" }}>
            Review
          </a>
        </BookDescriptionLayout>
      </BookActiveContainer>
    </div>
  );
};

export default BookHoverCard;
