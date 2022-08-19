import React, { useState, useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';
import chartList from '../data/chartList';
import { Navigate } from 'react-router-dom';

import CodeModal from '../components/CodeModal';
import NavBarButton from '../components/NavBarButton';
const StyledPageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  background-color: #1f1b2c;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledButtonsContainer = styled.div`
  margin: 50px;
  background-color: #171f34;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  height: 10%;
  width: fit-content;
  overflow: hidden;
  display: flex;
  flex-direction: row;
`;

const StyledButton = styled.div`
  display: flex;
  margin: auto 25px auto 25px;
  width: 200px;
  height: 75%;
`;

const StyledChartContainer = styled.div`
  margin: 0px auto auto auto;
  background-color: #171f34;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  height: calc(85% - 250px);
  width: calc(60% - 100px);
  overflow: hidden;
  padding: 25px 25px 25px 25px;
`;

const ChartButton = ({ nebula2, signedIn }) => {
  const buttonList = chartList[3];

  const button1Ref = useRef();
  const button2Ref = useRef();
  const button3Ref = useRef();
  const button4Ref = useRef();
  const chartRef = useRef();

  const [button1, setButton1] = useState();
  const [button2, setButton2] = useState();
  const [button3, setButton3] = useState();
  const [button4, setButton4] = useState();

  const [chart, setChart] = useState();

  const renderButton1 = useCallback(async () => {
    const renderedChart = await nebula2.render({
      element: button1Ref.current,
      id: buttonList.subcategories[0].chartId,
    });
    setButton1(renderedChart);
  }, [nebula2]);

  const renderButton2 = useCallback(async () => {
    const renderedChart = await nebula2.render({
      element: button2Ref.current,
      id: buttonList.subcategories[1].chartId,
    });
    setButton2(renderedChart);
  }, [nebula2]);

  const renderButton3 = useCallback(async () => {
    const renderedChart = await nebula2.render({
      element: button3Ref.current,
      id: buttonList.subcategories[2].chartId,
    });
    setButton3(renderedChart);
  }, [nebula2]);

  const renderButton4 = useCallback(async () => {
    const renderedChart = await nebula2.render({
      element: button4Ref.current,
      id: buttonList.subcategories[3].chartId,
    });
    setButton4(renderedChart);
  }, [nebula2]);

  const renderChart = useCallback(async () => {
    const renderedChart = await nebula2.render({
      element: chartRef.current,
      id: buttonList.subcategories[4].chartId,
    });
    setChart(renderedChart);
  }, [nebula2]);

  useEffect(() => {
    if (nebula2 && !button1) {
      renderButton1();
    }
  }, [nebula2, button1, renderButton1]);

  useEffect(() => {
    if (nebula2 && button1) {
      button1.destroy();
      renderButton1();
    }
  }, []);

  useEffect(() => {
    if (nebula2 && !button2) {
      renderButton2();
    }
  }, [nebula2, button1, renderButton2]);

  useEffect(() => {
    if (nebula2 && button2) {
      button2.destroy();
      renderButton2();
    }
  }, []);

  useEffect(() => {
    if (nebula2 && !button3) {
      renderButton3();
    }
  }, [nebula2, button3, renderButton3]);

  useEffect(() => {
    if (nebula2 && button3) {
      button3.destroy();
      renderButton3();
    }
  }, []);

  useEffect(() => {
    if (nebula2 && !button4) {
      renderButton4();
    }
  }, [nebula2, button4, renderButton4]);

  useEffect(() => {
    if (nebula2 && button4) {
      button4.destroy();
      renderButton4();
    }
  }, []);

  useEffect(() => {
    if (nebula2 && !chart) {
      renderChart();
    }
  }, [nebula2, chart, renderChart]);

  useEffect(() => {
    if (nebula2 && chart) {
      chart.destroy();
      renderChart();
    }
  }, []);

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
      <NavBarButton handleOpenCodeModal={handleOpenCodeModal} />
      {!signedIn ? (
        <Navigate to="/error" />
      ) : (
        <>
          <StyledButtonsContainer>
            <StyledButton ref={button1Ref} />
            <StyledButton ref={button2Ref} />
            <StyledButton ref={button3Ref} />
            <StyledButton ref={button4Ref} />
          </StyledButtonsContainer>
          <StyledChartContainer ref={chartRef} />
        </>
      )}
      <CodeModal
        codeModalOpen={codeModalOpen}
        handleCloseCodeModal={handleCloseCodeModal}
      />
    </StyledPageContainer>
  );
};

export default ChartButton;
