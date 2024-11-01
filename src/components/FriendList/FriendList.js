import { Avatar, List, ListItem, ListItemAvatar } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Streak from "./Streak";

export const FriendItemContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  background-color: #f5f5f5;
  font-weight: var(--small-weight);
  gap: 16px;
  padding: 16px 16px 8px 16px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  z-index: 1;
  p {
    padding-top: 8px;
  }
  .img_con {
    margin-left: auto;
  }
  &:after {
    content: "";
    height: 100%;
    left: 0;
    top: 0;
    width: 0%;
    position: absolute;
    transition: all 0.5s ease 0s;
    -webkit-transition: all 0.5s ease 0s;
    z-index: -1;
  }
  &:hover {
    &:after {
      width: 100%;
      background-color: #f5e6ac;
    }
  }
`;
export const AvaContainer = styled.div`
  position: relative;
`;

const FriendItem = (props) => {
  return (
    <FriendItemContainer>
      <p>1</p>
      <AvaContainer>
        <Avatar src={props.avatarRef} />
        <Streak streak={props.streak} />
      </AvaContainer>
      <p>{props.name}</p>
      <div className="img_con">
        <img src="top2.png" width={"40px"}></img>
      </div>
    </FriendItemContainer>
  );
};
const FriendList = () => {
  return (
    <List
      sx={{
        width: "100%",
      }}
    >
      <ListItem>
        <FriendItem streak="5" name="Nguyen Viet Hung"></FriendItem>
      </ListItem>
      <ListItem>
        <FriendItem streak="6" name="Nguyen Anh Khoa"></FriendItem>
      </ListItem>
      <ListItem>
        <FriendItem streak="3" name="Pham Dinh Bao Duy"></FriendItem>
      </ListItem>
    </List>
  );
};

export default FriendList;
