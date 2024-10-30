import { Avatar, List, ListItem, ListItemAvatar } from "@mui/material";
import React from "react";
import styled from "styled-components";
export const ListFriendContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background: var(--black-color-effect);
`;
export const FriendItemContainer = styled.div`
  display: flex;
  /* justify-content: flex-start; */
  width: 100%;
  background-color: #f5f5f5;
  font-size: var(--mini-label-font-size);
  font-weight: var(--small-weight);
  gap: 16px;
  padding: 16px 16px 8px 16px;
  border-radius: 8px;
  p {
    padding-top: 8px;
  }
  .img_con {
    margin-left: auto;
  }
`;
const FriendItem = () => {
  return (
    <FriendItemContainer>
      <p>1</p>
      <Avatar src="" />
      <p>Nguyen Viet Hung</p>
      <div className="img_con">
        <img src="top2.png" width={"40px"}></img>
      </div>
    </FriendItemContainer>
  );
};
const FriendList = () => {
  return (
    <ListFriendContainer>
      <List
        sx={{
          width: "25%",
          bgcolor: "var(--green-contrast)",
          right: "0px",
          position: "absolute",
          marginTop: "15%",
          borderRadius: "16px",
          marginRight: "2.5%",
        }}
      >
        <ListItem>
          <FriendItem></FriendItem>
        </ListItem>
        <ListItem>
          <FriendItem></FriendItem>
        </ListItem>
      </List>
    </ListFriendContainer>
  );
};

export default FriendList;
