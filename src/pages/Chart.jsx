import React, { useState, useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';
import chartList, { app1, app2 } from '../data/chartList';
import { useParams, Navigate } from 'react-router-dom';

import SideBar from '../components/SideBar';

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
  max-width: 1200px;
  overflow: hidden;
  padding: 50px 50px 50px 50px;
`;

const Chart = ({ nebula, nebula2, signedIn }) => {
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

  const chartRef = useRef();

  const [chart, setChart] = useState();

  let activeNebula = null;
  if (appId === app1) {
    activeNebula = nebula;
  } else {
    activeNebula = nebula2;
  }

  const renderChart = useCallback(async () => {
    const renderedChart = await activeNebula.render({
      // Utilises the nebula embed instance to render the desired visualisation:
      element: chartRef.current, // Reference to the element that the visualisation will be rendered into (The element must have dimensions specified)
      id: chartId, //The Object ID of the Qlik Sense chart etc. that will be rendered
    });
    setChart(renderedChart);
  }, [nebula, chartId]);

  useEffect(() => {
    if (activeNebula && !chart) {
      renderChart();
    }
  }, [activeNebula, chart, renderChart]);

  useEffect(() => {
    if (activeNebula && chart) {
      chart.destroy();
      renderChart();
    }
  }, [chartId]);

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
      <SideBar
        chartTitle={chartTitle}
        chartSubTitle={chartSubTitle}
        handleOpenCodeModal={handleOpenCodeModal}
      />
      {!signedIn ? (
        <Navigate to="/error" />
      ) : (
        <StyledChartContainer ref={chartRef} />
      )}
      <CodeModal
        codeModalOpen={codeModalOpen}
        handleCloseCodeModal={handleCloseCodeModal}
      />
    </StyledPageContainer>
  );
};

export default Chart;
