import React, { useState, useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';
import useQlik from '../utils/qlik/useQlik';
import chartList from '../data/chartList';
import { Link, useParams } from 'react-router-dom';
import {
  StyledLogoIcon,
  StyledNavBar,
  StyledNavButton,
  StyledPageTitle,
  StyledCodeButton,
  StyledHamburgerMenuIcon,
  StyledSubTitle,
  StyledTitle,
} from '../components/NavBar';

const StyledPageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  background-color: #1f1b2c;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledChartContainer = styled.div`
  margin: 50px;
  background-color: #171f34;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  height: 100%;
  width: 95%;
  overflow: hidden;
  padding: 25px 25px 50px 50px;
`;

const StyledChartTitle = styled.p`
  font-weight: 700;
  font-size: 2.5rem;
  color: #ffff;
`;

const Chart = () => {
  const { category } = useParams();
  const chartIndex = chartList.findIndex((x) => x.category === category);
  const appId = chartList[chartIndex].appId;
  const chartId = chartList[chartIndex].subcategories[0].chartId;
  const chartTitle = chartList[chartIndex].subcategories[0].title;
  const chartSubTitle = chartList[chartIndex].subcategories[0].subtitle;

  const { nebula } = useQlik(appId);

  const chartRef = useRef();

  const [chart, setChart] = useState();

  const renderChart = useCallback(async () => {
    const renderedChart = await nebula.render({
      element: chartRef.current,
      id: chartId,
    });
    setChart(renderedChart);
  }, [nebula]);

  useEffect(() => {
    if (nebula && !chart) {
      renderChart();
    }
  }, [nebula, chart, renderChart]);

  return (
    <StyledPageContainer>
      <StyledNavBar>
        <StyledNavButton>
          <StyledLogoIcon />
          NEBULA.JS LIBRARY
        </StyledNavButton>
        <StyledPageTitle>
          <StyledTitle>{chartTitle}</StyledTitle>
          <StyledSubTitle>{chartSubTitle}</StyledSubTitle>
        </StyledPageTitle>
        <StyledCodeButton>Code</StyledCodeButton>
        <StyledHamburgerMenuIcon />
      </StyledNavBar>
      <StyledChartContainer ref={chartRef}>
        <StyledChartTitle>Sales by region:</StyledChartTitle>
      </StyledChartContainer>
    </StyledPageContainer>
  );
};

export default Chart;
