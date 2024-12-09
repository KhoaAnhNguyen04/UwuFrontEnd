import React from "react";
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
import { useNavigate } from "react-router-dom";

const Navbar = ({ login, setLogin }) => {
  const navigate = useNavigate();
  return (
    <NavbarContainer>
      <a onClick={() => navigate("/")}>
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
      <a onClick={() => navigate("/membership")}>
        <DetailText content="Membership"></DetailText>
      </a>
      <a onClick={() => navigate("/friend")}>
        <DetailText content="Friends"></DetailText>
      </a>

      {!login && (
        <>
          <MedButton
            onClick={() => navigate("/login")}
            content="Login"
            bgColor="white"
            color="var(--main-green)"
          />
          <MedButton
            content="Sign up"
            bgColor="var(--main-green)"
            onClick={() => navigate("/sign-up")}
            color="white"
          />
        </>
      )}

      {login && (
        <UserBoxHover>
          <Avatar alt="User" />
          <div className="user_content">
            <div className="user_info">
              <h4>Khoa Anh Nguyen</h4>
              <Avatar alt="User Avatar" />
            </div>
            <div className="member_info">
              <Chip sx={{ fontSize: 12 }} label="Free member" />
              <Badge color="secondary" badgeContent={99}>
                <MenuBookIcon sx={{ fontSize: 20 }} />
              </Badge>
            </div>
            <ElementTag href="/my_book">My BookList</ElementTag>
            <ElementTag>Manage Account</ElementTag>
            <ElementTag onClick={() => setLogin(false)}>Log out</ElementTag>
          </div>
        </UserBoxHover>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
