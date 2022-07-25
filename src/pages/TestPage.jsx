import React, { useState, useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';
import QlikConnector from '../utils/qlik/qlikConnector';
import qlikConfig from '../utils/qlik/qlikConfig';
import nebulaConfig from '../utils/qlik/nebulaConfig';

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

const TestPage = () => {
  const [global, setGlobal] = useState(undefined);
  const [doc, setDoc] = useState(undefined);
  const [error, setError] = useState(undefined);
  const [loading, setLoading] = useState(false);

  const [nebula, setNebula] = useState(null);

  const getQlik = useCallback(async () => {
    let qGlobal;
    let qDoc;
    setLoading(true);

    try {
      const res = await QlikConnector(
        qlikConfig('a8def80d-0228-4837-ad84-47f8bf8bfb0a')
      );
      qGlobal = res.qGlobal;
      qDoc = res.qDoc;
    } catch (e) {
      setError(e);
    }
    setGlobal(qGlobal);
    setDoc(qDoc);
    setLoading(false);
  }, [setDoc, setError, setGlobal, setLoading]);

  const getNebula = useCallback(async () => {
    const nebula = nebulaConfig(doc);
    setNebula(nebula);
  }, [doc]);

  useEffect(() => {
    if ((global === undefined || doc === undefined) && !loading) {
      getQlik();
    }
  }, [global, doc, getQlik, loading]);

  useEffect(() => {
    if (doc && !nebula) {
      getNebula();
    }
  }, [doc, nebula, getNebula]);

  const chartRef = useRef();

  const [chart, setChart] = useState();

  const renderChart = useCallback(async () => {
    const renderedChart = await nebula.render({
      element: chartRef.current,
      id: 'MnyJh',
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

export default TestPage;
