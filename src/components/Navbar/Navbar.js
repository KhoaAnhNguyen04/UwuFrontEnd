import React from "react";
import DetailText from "../SmallCompo/DetailText";
import MedButton from "../SmallCompo/MedButton";
import { NavbarContainer, SearchBar, SearchContainer } from "./Navbar.style";

const Navbar = () => {
  return (
    <NavbarContainer>
      <img src="/icon.svg" alt="Icon" />
      <SearchContainer>
        <SearchBar id="standard-basic" variant="standard" />
        <img src="/search_icon.svg" alt="Icon" />
      </SearchContainer>
      <DetailText content="Membership"></DetailText>
      <DetailText content="Leaderbroad"></DetailText>
      <DetailText content="Friends"></DetailText>
      <MedButton
        content="Login"
        bgColor="white"
        color="var(--main-green)"
      ></MedButton>
      <MedButton
        content="Sign up"
        bgColor="var(--main-green)"
        color="white"
      ></MedButton>
    </NavbarContainer>
  );
};

export default Navbar;
