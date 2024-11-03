import React from "react";
import styled from "styled-components";
import BookList from "~/components/BookList/BookList";
export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: 30%;
  overflow-y: auto;
  .header_img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1000;
  }
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      <img className="header_img" src="bbbg.png" alt="" />
      <BookList></BookList>
      <BookList></BookList>
      <BookList></BookList>
    </DashboardContainer>
  );
};

export default Dashboard;
