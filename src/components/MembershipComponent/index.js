import { Button } from "@mui/material";
import React from "react";
import {
  MemberItem,
  MembershipContainer,
  PackContainer,
} from "./Membership.style";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PackItem = (props) => {
  const backendUrl = process.env.REACT_APP_BACKEND;
  const userId = localStorage.getItem("userID");
  const navigate = useNavigate();
  const handleBuyNow = () => {
    axios
      .post(`${backendUrl}/memberships`, {
        user_id: userId,
        type: props.packName,
      })
      .then((response) => {
        console.log("Purchase successful:", response.data);
        navigate("/");
      })
      .catch((error) => {
        console.error("Purchase failed:", error);
      });
  };

  return (
    <MemberItem>
      <h3 className="title">{props.packName}</h3>
      <h4>{props.packCost}</h4>
      <h4>{props.packBook}</h4>
      <Button
        color="inherit"
        variant="contained"
        sx={{ width: "60%", fontSize: 12, fontWeight: 500 }}
        onClick={handleBuyNow}
      >
        Buy Now
      </Button>
    </MemberItem>
  );
};

const MemberLayout = () => {
  return (
    <MembershipContainer>
      <div className="container">
        <div className="title_box">
          <h1>Membership</h1>
          <h2>Over 10000 contents and books for you to explore</h2>
        </div>
        <PackContainer>
          <PackItem
            packName="Platinum"
            packCost="15$ / month"
            packBook="5 books / month"
          />
          <PackItem
            packName="Gold"
            packCost="10$ / month"
            packBook="3 books / month"
          />
          <PackItem
            packName="Silver"
            packCost="5$ / month"
            packBook="1 book / month"
          />
        </PackContainer>
      </div>
    </MembershipContainer>
  );
};

export default MemberLayout;
