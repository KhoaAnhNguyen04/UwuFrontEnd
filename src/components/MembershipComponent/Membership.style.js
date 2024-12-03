import styled from "styled-components";

export const MemberItem = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 200px;
  gap: 12px;
  padding: 12px;
  border-radius: 12px;
  color: black;
  &:hover {
    padding: 8px;
    border-width: 4px;
    border-color: var(--green-contrast);
  }

  * {
    align-self: center;
    font-weight: 600;
  }
  .title {
    position: relative;
    text-align: center;
    width: 100%;
  }
  .title::after {
    position: absolute;
    bottom: -4px;
    left: 0;
    content: "";
    width: 100%;
    height: 3px;
    background-color: var(--green-contrast);
  }
  .MuiButton-contained {
    &:hover {
      background-color: var(--green-contrast);
      color: var(--white-text);
    }
    background-color: var(--wheat-color);
  }
`;

export const MembershipContainer = styled.div`
  background-color: var(--black-color-effect);
  height: 100vh;
  .container {
    position: absolute;
    display: flex;
    flex-direction: column;
    color: var(--white-text);
    gap: 32px;
    top: 10%;
    width: 100vw;
  }

  .title_box {
    padding-left: 5%;
  }
  .title_box::after {
    position: absolute;
    top: 100px;
    left: 0;
    content: "";
    width: 100%;
    height: 3px;
    background-color: var(--green-contrast);
  }
`;
export const PackContainer = styled.div`
  display: flex;
  padding-left: 5%;
  gap: 4%;
`;
