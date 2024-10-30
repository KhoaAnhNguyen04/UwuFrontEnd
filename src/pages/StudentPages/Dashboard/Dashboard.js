import React from "react";
import styled from "styled-components";
import BookList from "~/components/BookList/BookList";
export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  img {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1000;
  }
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      <img src="bbbg.png" alt="" />
      <BookList></BookList>
    </DashboardContainer>
  );
};

export default Dashboard;
