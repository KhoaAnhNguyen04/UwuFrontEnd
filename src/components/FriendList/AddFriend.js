import {
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  Snackbar,
} from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";

export const AddItemContainer = styled.div``;

export const AddFriendLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
`;

const AddFriend = () => {
  const [friendId, setFriendId] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const backendUrl = process.env.REACT_APP_BACKEND;
  const userId = localStorage.getItem("userID");

  const handleInputChange = (event) => {
    setFriendId(event.target.value);
  };

  const handleAddFriend = async () => {
    if (!friendId) {
      setError("Please enter a friend's UserID.");
      return;
    }

    const body = {
      userid_1: userId,
      userid_2: friendId,
    };

    try {
      const response = await axios.post(`${backendUrl}/friends/`, body);
      if (response.status === 200) {
        setSuccessMessage("Friend request sent successfully!");
      } else {
        setError("Failed to send friend request.");
      }
    } catch (error) {
      setError("Friend Request Duplicate");
      console.error("Error:", error);
    }
  };

  const handleCloseSnackbar = () => {
    setSuccessMessage("");
  };

  return (
    <AddFriendLayout>
      <FormControl sx={{ width: "100%" }} variant="outlined">
        <InputLabel
          sx={{
            fontSize: "var(--mini-label-font-size)",
            margin: "12px 0 0 8px",
          }}
          htmlFor="input-with-icon-adornment"
        >
          Add a new friend
        </InputLabel>
        <Input
          value={friendId}
          onChange={handleInputChange}
          sx={{ paddingTop: 2, fontSize: 14 }}
          id="userId"
          startAdornment={
            <InputAdornment position="end">
              <SearchIcon sx={{ width: 20, height: 20 }} />
            </InputAdornment>
          }
        />
      </FormControl>

      <button onClick={handleAddFriend}>Add Friend</button>

      {error && <div style={{ color: "red" }}>{error}</div>}

      <Snackbar
        sx={{
          width: "400px",
          height: "60px",
          fontSize: "18px",
          backgroundColor: "green",
          color: "white",
          borderRadius: "10px",
          padding: "16px",
        }}
        open={!!successMessage}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message={successMessage}
      />
    </AddFriendLayout>
  );
};

export default AddFriend;
