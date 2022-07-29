import React, { useState, useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';
import useQlik from '../utils/qlik/useQlik';
import chartList from '../data/chartList';
import { useParams } from 'react-router-dom';
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

import CodeModal from '../components/CodeModal';

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
  const categoryIndex = chartList.findIndex(
    (item) => item.category === category
  );
  const appId = chartList[categoryIndex].appId;
  const subCategoryIndex = chartList[categoryIndex].subcategories.findIndex(
    (item) => item.chartId === chartId
  );
  const chartTitle =
    chartList[categoryIndex].subcategories[subCategoryIndex].title;
  const chartSubTitle =
    chartList[categoryIndex].subcategories[subCategoryIndex].subtitle;

  const { nebula } = useQlik(appId); // The nebula embed instance based on the qDoc associated with the given appId

  const chartRef = useRef();

  const [chart, setChart] = useState();

  const renderChart = useCallback(async () => {
    const renderedChart = await nebula.render({
      // Utilises the nebula embed instance to render the desired visualisation:
      element: chartRef.current, // Reference to the element that the visualisation will be rendered into (The element must have dimensions specified)
      id: chartId, //The Object ID of the Qlik Sense chart etc. that will be rendered
    });
    setChart(renderedChart);
  }, [nebula, chartId]);

  useEffect(() => {
    if (nebula && !chart) {
      renderChart();
    }
  }, [nebula, chart, renderChart]);

  const [codeModalOpen, setCodeModalOpen] = useState(false);

  const handleOpenCodeModal = () => {
    if (codeModalOpen) {
      setCodeModalOpen(false);
    } else {
      setCodeModalOpen(true);
    }
  };

  const handleCloseCodeModal = () => {
    setCodeModalOpen(false);
  };

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
        <StyledCodeButton onClick={handleOpenCodeModal}>Code</StyledCodeButton>
        <StyledHamburgerMenuIcon />
      </StyledNavBar>
      <StyledChartContainer ref={chartRef} />
      <CodeModal
        codeModalOpen={codeModalOpen}
        handleCloseCodeModal={handleCloseCodeModal}
      />
    </StyledPageContainer>
  );
};

export default Chart;
