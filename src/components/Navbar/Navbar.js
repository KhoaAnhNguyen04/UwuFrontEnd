import React, { useState } from "react";
import DetailText from "../SmallCompo/DetailText";
import MedButton from "../SmallCompo/MedButton";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SearchIcon from "@mui/icons-material/Search";
import {
  ElementTag,
  NavbarContainer,
  SearchBar,
  SearchContainer,
  UserBoxHover,
} from "./Navbar.style";
import { Avatar, Badge, Chip } from "@mui/material";

const Navbar = () => {
  const [login, setLogin] = useState(true);
  return (
    <NavbarContainer>
      <a href="/">
        <img style={{ marginTop: 4 }} src="/icon.svg" alt="Icon" />
      </a>
      <SearchContainer>
        <SearchIcon sx={{ fontSize: 32, color: "var(--green-contrast)" }} />

        <SearchBar
          id="standard-basic"
          variant="outlined"
          sx={{
            borderColor: "var(--green-contrast)",
            zIndex: 1000,
          }}
        />
      </SearchContainer>
      <a href="/membership">
        <DetailText content="Membership"></DetailText>
      </a>
      <a href="/friend">
        <DetailText content="Friends"></DetailText>
      </a>
      {login === false && (
        <MedButton
          content="Login"
          bgColor="white"
          href="/log-in"
          color="var(--main-green)"
        ></MedButton>
      )}
      {login === false && (
        <MedButton
          content="Sign up"
          bgColor="var(--main-green)"
          href="/sign-up"
          color="white"
        ></MedButton>
      )}
      {login === true && (
        <UserBoxHover>
          <Avatar></Avatar>
          <div className="user_content">
            <div className="user_info">
              <h4>Khoa Anh Nguyen</h4>
              <Avatar></Avatar>
            </div>
            <div className="member_info">
              <Chip sx={{ fontSize: 12 }} label="Free member" />
              <Badge color="secondary" badgeContent={99}>
                <MenuBookIcon sx={{ fontSize: 20 }} />
              </Badge>
            </div>
            <ElementTag>My BookList</ElementTag>
            <ElementTag>Manage Account</ElementTag>
            <ElementTag>Log out</ElementTag>
          </div>
        </UserBoxHover>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
