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
  height: calc(100% - 250px);
  width: calc(100% - 100px);
  overflow: hidden;
  padding: 25px 25px 50px 50px;
`;

const Chart = () => {
  const { category, chartId } = useParams();
  const categoryIndex = chartList.findIndex((item) => item.category === category);
  const appId = chartList[categoryIndex].appId;
  const subCategoryIndex = chartList[categoryIndex].subcategories.findIndex((item) => item.chartId === chartId);
  const chartTitle = chartList[categoryIndex].subcategories[subCategoryIndex].title;
  const chartSubTitle = chartList[categoryIndex].subcategories[subCategoryIndex].subtitle;

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
        <StyledNavButton to="/">
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
      <StyledChartContainer ref={chartRef} />
    </StyledPageContainer>
  );
};

export default Chart;
