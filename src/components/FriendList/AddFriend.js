import { FormControl, Input, InputAdornment, InputLabel } from "@mui/material";
import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
export const AddItemContainer = styled.div``;
export const AddFriendLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
`;

const AddFriend = () => {
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
          defaultValue={"Friend name"}
          sx={{ paddingTop: 2, fontSize: 14 }}
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="end">
              <SearchIcon sx={{ width: 20, height: 20 }} />
            </InputAdornment>
          }
        />
      </FormControl>
    </AddFriendLayout>
  );
};

export default AddFriend;
