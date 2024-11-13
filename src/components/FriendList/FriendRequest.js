import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import styled from "styled-components";
import { Avatar, IconButton, List, ListItem } from "@mui/material";
export const RequestItemContainer = styled.div`
  background-color: var(--wheat-color);
  display: flex;
  width: 100%;
  gap: 16px;
  padding: 16px 16px 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  justify-content: space-between;
  .info_div {
    flex-basis: 75%;
    display: flex;
    gap: 16px;
  }
`;
const RequestItem = (props) => {
  return (
    <RequestItemContainer>
      <div className="info_div">
        <p style={{ lineHeight: "16px", paddingTop: "8px" }}>1</p>
        <Avatar src={props.avatarRef} />
        <p>{props.name} sent you a friend request</p>
      </div>
      <IconButton sx={{ padding: 0, height: 36, marginTop: "8px" }}>
        <CheckCircleIcon
          sx={{ fontSize: 36, color: "var(--green-contrast)" }}
        />
      </IconButton>

      <IconButton sx={{ padding: 0, height: 36, marginTop: "8px" }}>
        <CancelIcon sx={{ fontSize: 36, color: "var(--green-contrast)" }} />
      </IconButton>
    </RequestItemContainer>
  );
};
const FriendRequest = () => {
  return (
    <List
      sx={{
        width: "100%",
      }}
    >
      <ListItem>
        <RequestItem name="Khoa Nguyen Anh"></RequestItem>
      </ListItem>
    </List>
  );
};

export default FriendRequest;
