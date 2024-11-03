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
      <a href="/membership">
        <DetailText content="Membership"></DetailText>
      </a>
      <a href="/">
        <DetailText content="Leaderbroad"></DetailText>
      </a>
      <a href="/friend">
        <DetailText content="Friends"></DetailText>
      </a>
      <MedButton
        content="Login"
        bgColor="white"
        href="/log-in"
        color="var(--main-green)"
      ></MedButton>
      <MedButton
        content="Sign up"
        bgColor="var(--main-green)"
        href="/sign-up"
        color="white"
      ></MedButton>
    </NavbarContainer>
  );
};

export default Navbar;
