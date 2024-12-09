import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FriendList from "./FriendList";
import AddFriend from "./AddFriend";
import FriendRequest from "./FriendRequest";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const FriendLayout = styled.div`
  width: 100%;
  height: 100vh;
  background: var(--black-color-effect);
  position: relative;
  .back_btn {
    color: var(--white-text);
    position: absolute;
    width: 30%;
    top: 10%;
    right: 2.5%;
    cursor: pointer;
  }
`;
export const SectionLayout = styled.div`
  border-radius: 16px;
  display: flex;
  background-color: var(--green-contrast);
  flex-direction: column;
  position: absolute;
  width: 30%;
  top: 15%;
  right: 2.5%;
  .grp_button {
    display: flex;
  }
`;
export const ListButton = styled.button`
  height: 48px;
  cursor: pointer;
  text-transform: uppercase;
  z-index: 1;
  flex: 1;
  border-color: var(--black-color-effect);
  transition: 0.5s;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: 0.3s;
  }
  &:after {
    content: "";
    position: absolute;
    top: 0px;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--green-contrast);
    transform: scale(0);
    opacity: 0;
    transition: 0.3s;
    z-index: -1;
  }
  &:hover {
    color: var(--white-text);
    &:before {
      transform: scaleY(1);
      opacity: 1;
    }
    &:after {
      transform: scaleY(1);
      opacity: 1;
    }
  }
`;

const FriendBox = () => {
  const backendUrl = process.env.REACT_APP_BACKEND;
  const userId = localStorage.getItem("userID");
  const [frPage, setFrPage] = useState(1);
  const [friendList, setFriendList] = useState([]);
  const [friendRequest, setFriendRequest] = useState([]);
  const navigate = useNavigate();
  const [error, setError] = useState();
  const handleGetFriend = async () => {
    try {
      const response = await axios.get(`${backendUrl}/friends/${userId}`);
      const acceptedFriends = response.data.filter(
        (friend) => friend.status === "Accepted"
      );
      const pendingFriends = response.data.filter(
        (friend) => friend.status === "Pending"
      );
      setFriendList(acceptedFriends);
      setFriendRequest(pendingFriends);
    } catch (error) {
      setError("Failed to fetch users. Please try again later.");
    }
  };

  useEffect(() => {
    handleGetFriend();
  }, []);
  return (
    <FriendLayout>
      <div className="back_btn">
        <ArrowBackIcon sx={{ fontSize: 24, alignSelf: "center" }} />
        <a onClick={() => navigate("/")}>Back to main</a>
      </div>
      <SectionLayout>
        <div className="grp_button">
          <ListButton
            onClick={() => setFrPage(1)}
            style={{ borderTopLeftRadius: "12px", borderRightWidth: "2px" }}
          >
            Friend Request
          </ListButton>
          <ListButton onClick={() => setFrPage(2)} key={"fr_list"}>
            Friend List
          </ListButton>
          <ListButton
            onClick={() => setFrPage(3)}
            style={{ borderTopRightRadius: "12px", borderLeftWidth: "2px" }}
          >
            Add Friend
          </ListButton>
        </div>
        {frPage === 1 && <FriendRequest data={friendRequest}></FriendRequest>}
        {frPage === 2 && <FriendList data={friendList}></FriendList>}
        {frPage === 3 && <AddFriend></AddFriend>}
      </SectionLayout>
    </FriendLayout>
  );
};

export default FriendBox;
