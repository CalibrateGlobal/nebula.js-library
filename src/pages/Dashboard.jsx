import React from 'react';
import styled from 'styled-components';
import chartList from '../data/chartList';
import { Link, useParams } from 'react-router-dom';

const StyledScreenContainer = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const StyledNavBar = styled.nav`
  width: 100%;
  height: 12%;
  background: #d9d9d9;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledPageTitle = styled.div`
  font-size: 2rem;
  margin-bottom: 0.5ch;
`;

const StyledNavButton = styled.button`
  width: 6rem;
  height: 4rem;
  border-radius: 26px;
  border: none;
  font-size: 1.2rem;
  margin-left: 2rem;
`;

const StyledChartListContainer = styled.section`
  display: grid;
  grid-gap: 5% 1%;
  grid-template-columns: repeat(5, 1fr);
  justify-content: center;
  height: 100%;
  overflow-y: auto;
  overflow-x: auto;
  width: 90%;
  height: 75%;
  align-self: center;
  border: 1px solid black;
  border-radius: 20px;
  margin-top: auto;
  margin-bottom: auto;
  &::-webkit-scrollbar {
    border-radius: 5px;
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: #a4a4a4;
    height: 5px;
  }
  &::-webkit-scrollbar-track {
    margin-bottom: 11px;
  }
  &::-webkit-scrollbar-track-piece {
    background: #f5f5f5;
    margin-top: 20px;
    border-radius: 5px;
  }
`;

const StyledChartItem = styled.button`
  width: 60%;
  min-width: 150px;
  aspect-ratio: 5 / 3;
  border-radius: 26px;
  background-color: #d9d9d9;
  align-self: auto;
  position: relative;
  margin: 25px auto 10px auto;
  border: none;
  justify-self: center;
  align-self: center;
  cursor: pointer;
`;

const tempArray = [...Array(25)].map((x) => 0);
const Dashboard = () => {
  return (
    <StyledScreenContainer>
      <StyledNavBar>
        <StyledNavButton>Nb.js</StyledNavButton>
        <StyledPageTitle>Categories</StyledPageTitle>
        <span style={{ width: '6rem' }}></span>
      </StyledNavBar>
      <StyledChartListContainer>
        {chartList.map((item) => (
          <Link to={`chart/${item.category}`}>
            <StyledChartItem>{item.category}</StyledChartItem>
          </Link>
        ))}
      </StyledChartListContainer>
    </StyledScreenContainer>
  );
};

export default Dashboard;
