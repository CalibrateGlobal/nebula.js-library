import { Navigate } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

import {
  StyledLogoIcon,
  StyledNavBar,
  StyledNavButton,
  StyledPageTitle,
  StyledTitle,
} from '../components/NavBar';

const StyledScreenContainer = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: #1f1b2c;
`;

const StyledChartListOuterContainer = styled.div`
  margin: 50px;
  background-color: #171f34;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  height: calc(100% - 250px);
  overflow: hidden;
  padding: 0px 25px 0px 50px;
  display: flex;
`;

const StyledMessageContainer = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const StyledMessageText = styled.h3`
  color: white;
  margin: 1rem;
  font-size: 1.5rem;
`;

const StyledButton = styled.div`
  background-color: #05994a;
  margin: 2rem auto auto auto;
  display: flex;
  width: fit-content;
  border-radius: 10px;
  border: 1px white solid;
  cursor: pointer;
  :hover {
    border: 1px #614de8 solid;
  }
`;

const StyledButtonText = styled.span`
  font-size: 1.4rem;
  color: white;
  margin: auto;
  padding: 1rem;
`;

const QlikSenseErrorPage = ({ signedIn }) => {
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <StyledScreenContainer>
      <StyledNavBar>
        <StyledNavButton to="/">
          <StyledLogoIcon />
          NEBULA.JS LIBRARY
        </StyledNavButton>
        <StyledPageTitle>
          <StyledTitle style={{ color: '#d83939' }}>Error</StyledTitle>
        </StyledPageTitle>
      </StyledNavBar>
      <StyledChartListOuterContainer>
        {signedIn ? (
          <Navigate to="/" />
        ) : (
          <StyledMessageContainer>
            <StyledMessageText>
              Please ensure that you have signed into the &nbsp;
              <a
                href="https://cc-edapps.calibrateconsulting.com/"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <b style={{ color: '#05994a', fontSize: '1.7rem' }}>
                  {' '}
                  CC-EDAPPS Qlik Sense Server
                </b>
              </a>
              &nbsp; and have access to the following applications:
            </StyledMessageText>
            <a
              href="https://cc-edapps.calibrateconsulting.com/sense/app/a8def80d-0228-4837-ad84-47f8bf8bfb0a"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <StyledMessageText style={{ color: '#c95c5c' }}>
                https://cc-edapps.calibrateconsulting.com/sense/app/a8def80d-0228-4837-ad84-47f8bf8bfb0a
              </StyledMessageText>
            </a>
            <a
              href="https://cc-edapps.calibrateconsulting.com/sense/app/25bbde2e-79eb-4eab-9c12-4ab56594a738"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <StyledMessageText style={{ color: '#c95c5c' }}>
                https://cc-edapps.calibrateconsulting.com/sense/app/25bbde2e-79eb-4eab-9c12-4ab56594a738
              </StyledMessageText>
            </a>
            <StyledButton>
              <StyledButtonText onClick={refreshPage}>Proceed</StyledButtonText>
            </StyledButton>
          </StyledMessageContainer>
        )}
      </StyledChartListOuterContainer>
    </StyledScreenContainer>
  );
};

export default QlikSenseErrorPage;
