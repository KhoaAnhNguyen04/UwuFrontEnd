import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import BookList from "~/components/BookList/BookList";
import { useLocation, useNavigate } from "react-router-dom";
import data from "./data";

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

const Dashboard = (props) => {
  const { data1, data2, data3 } = data;
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;
  const backendUrl = process.env.REACT_APP_BACKEND;
  const [user, setUser] = useState(null);
  const [firstList, setFirstList] = useState();
  const [secondList, setSecondList] = useState();
  const [thirdList, setThirdList] = useState();

  const [error, setError] = useState(null);
  const userID = localStorage.getItem("userID");

  const handleGetUsers = async () => {
    try {
      const response = await axios.get(`${backendUrl}/users/${userID}`);
      setUser(response.data);
      setError(null);
    } catch (error) {
      console.error("Failed to fetch users:", error);
      setError("Failed to fetch users. Please try again later.");
    }
  };

  const handleGetBooksByCategory = async (val, setList) => {
    try {
      const response = await axios.get(`${backendUrl}/books/${val}`);
      if (response.status === 200) {
        setList(response.data);
      } else {
        setError("Failed to fetch books. Please try again.");
      }
    } catch (err) {
      console.error("Category error:", err);
      setError(
        err.response?.data?.message ||
          "An error occurred while fetching the books. Please try again."
      );
    }
  };

  useEffect(() => {
    handleGetBooksByCategory("fiction", setFirstList);
    handleGetBooksByCategory("fantasy", setSecondList);
    handleGetBooksByCategory("mystery", setThirdList);
  }, []);

  return (
    <DashboardContainer>
      <img className="header_img" src="bbbg.png" alt="" />
      <BookList data={firstList} imgList={data1} title="Fiction" />
      <BookList data={secondList} imgList={data2} title="Fantasy" />
      <BookList data={thirdList} imgList={data3} title="Mystery" />
    </DashboardContainer>
  );
};

export default Dashboard;
