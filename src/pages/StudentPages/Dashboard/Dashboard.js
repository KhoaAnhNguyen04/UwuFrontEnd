import React from "react";
import styled from "styled-components";
export const DashboardContainer = styled.div`
  img {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 400px;
    z-index: -1;
  }
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      <img src="bbbg.png" alt="" />
    </DashboardContainer>
  );
};

export default Dashboard;
