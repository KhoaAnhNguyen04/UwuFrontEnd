import { TextField } from "@mui/material";
import styled from "styled-components";
export const NavbarContainer = styled.div`
  background: linear-gradient(180deg, rgba(18, 18, 20, 0.68), transparent);
  position: fixed;
  display: flex;
  z-index: 1000;
  justify-content: space-between;
  width: 100%;
  max-height: 200px;
  padding: 0px 60px;
  padding-top: 12px;
  img {
    height: 36px;
    margin: auto 0px;
  }
  a {
    text-decoration: none;
    color: inherit;
    background: none;
    border: none;
  }
`;
export const SearchContainer = styled.div`
  flex-basis: 55%;
  img {
    height: 24px;
    margin: 8px 4px;
  }
`;
export const SearchBar = styled(TextField)`
  && {
    * {
      font-size: var(--small-font_size);
    }
    margin: auto 0px;
    height: 36px;
    label {
      position: relative;
    }
    div {
      margin-top: 0px;
      margin-bottom: 8px;
      height: 100%;
      width: 400px;
    }
  }
`;
export const UserBoxHover = styled.div`
  display: block;

  &:hover {
    .user_content {
      display: flex;
      padding: 16px;
      border-color: var(--green-contrast);
      border-width: 4px;
    }
  }
  .user_content {
    width: 200px;
    background-color: white;
    display: none;
    flex-direction: column;
    position: absolute;
    gap: 8px;
    margin-top: 12px;
    right: 60px;
    border-radius: 8px;
    .user_info {
      width: 100%;
      display: flex;
      gap: 16px;
    }
    .member_info {
      display: flex;
      gap: 16px;
      .MuiBadge-colorSecondary {
        background-color: var(--green-contrast) !important;
      }
      .MuiBadge-root {
        margin-top: 4px;
      }
    }
  }
  .user_content::before {
    content: "";
    position: absolute;
    top: -20px;
    right: 0;
    width: 44px;
    height: 24px;
  }
`;
export const ElementTag = styled.a`
  &:hover {
    color: var(--green-contrast);
  }
`;
