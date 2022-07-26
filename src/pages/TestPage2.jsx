import React, { useState, useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';
import useQlik from '../utils/qlik/useQlik';
import chartList from '../data/chartList';

const StyledPageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
`;

const StyledChartContainer = styled.div`
  height: 50%;
  width: 50%;
  margin: auto;
`;

const TestPage2 = () => {
  const appId = chartList[5].appId;
  const chartId = chartList[5].subcategories[3].chartId;

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
      <StyledChartContainer ref={chartRef} />
    </StyledPageContainer>
  );
};

export default TestPage2;
