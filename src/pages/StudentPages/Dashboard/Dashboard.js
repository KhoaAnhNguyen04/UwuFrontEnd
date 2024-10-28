import React from "react";
import styled from "styled-components";
import BookHoverCard from "~/components/MovieCard/BookHoverCard";
export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  img {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1;
  }
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      <img src="bbbg.png" alt="" />
      <BookHoverCard>Alpha</BookHoverCard>
    </DashboardContainer>
  );
};

export default Dashboard;
