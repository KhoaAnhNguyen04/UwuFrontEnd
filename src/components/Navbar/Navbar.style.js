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
  img {
    height: 36px;
    margin: auto 0px;
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
