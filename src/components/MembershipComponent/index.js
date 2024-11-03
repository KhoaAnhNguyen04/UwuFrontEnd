import { Button } from "@mui/material";
import React from "react";
import {
  MemberItem,
  MembershipContainer,
  PackContainer,
} from "./Membership.style";

const PackItem = (props) => {
  return (
    <MemberItem>
      <h3 className="title">{props.packName}</h3>
      <h4>{props.packCost}</h4>
      <h4>{props.packBook}</h4>

      <Button
        color="inherit"
        variant="contained"
        sx={{ width: "60%", fontSize: 12, fontWeight: 500 }}
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
            packCost="5$ / month"
            packBook="5 books / month"
          ></PackItem>
          <PackItem
            packName="Gold"
            packCost="5$ / month"
            packBook="5 books / month"
          ></PackItem>
          <PackItem
            packName="Silver"
            packCost="5$ / month"
            packBook="5 books / month"
          ></PackItem>
        </PackContainer>
      </div>
    </MembershipContainer>
  );
};

export default MemberLayout;
