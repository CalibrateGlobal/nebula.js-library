import { Link, Navigate } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  StyledBarChartIcon,
  StyledBoxPlotIcon,
  StyledBulletChartIcon,
  StyledButtonIcon,
  StyledComboChartIcon,
  StyledDistributionPlotIcon,
  StyledFunnelChartIcon,
  StyledGridChartIcon,
  StyledHistogramChartIcon,
  StyledKPIIcon,
  StyledLineChartIcon,
  StyledMekkoChartIcon,
  StyledOrgChartIcon,
  StyledPieChartIcon,
  StyledSankeyChartIcon,
  StyledTableIcon,
  StyledScatterPlotIcon,
  StyledWaterfallChartIcon,
} from '../components/icons/StyledChartIcons';

import {
  StyledLogoIcon,
  StyledNavBar,
  StyledNavButton,
  StyledPageTitle,
  StyledTitle,
} from '../components/NavBar';

import chartList from '../data/chartList';
import ConstructionIcon from '../components/icons/ConstructionIcon';

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
`;

const StyledChartListInnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: calc(100% - 100px);
  overflow-y: auto;
  overflow-x: auto;
  margin: 50px auto 50px auto;
  padding-right: 10px;

  &::-webkit-scrollbar {
    border-radius: 5px;
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: #049eb8;
    height: 5px;
    width: 10px;
  }

  &::-webkit-scrollbar-track-piece {
    background: grey;
    border-radius: 5px;
    border-left: 2px solid #171f34;
    border-right: 2px solid #171f34;
  }
`;

const StyledChartCategoryItem = styled(motion(Link))`
  position: relative;
  width: 362px;
  height: 268px;
  background: ${(props) => (props.disabled ? 'grey' : '#049eb8')};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin: auto auto 50px auto;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  transform-origin: top;
  pointer-events: ${(props) => (props.disabled ? 'none' : 'all')};
`;

const StyledCategoryTitle = styled.h3`
  display: flex;
  font-weight: 500;
  font-size: 36px;
  line-height: 54px;
  color: #ffffff;
  margin: 10px auto 0px auto;
`;

const StyledIconContainer = styled.div`
  margin: auto;
`;

const StyledConstructionContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -60%) rotate(-10deg);
  background-color: #d31212;
  width: 80%;
  transform-origin: center;
  box-shadow: 0 4px 8px 0 #00000033;
`;

const StyledConstructionText = styled.span`
  margin: auto;
  color: #ffd600;
  font-size: 1.4rem;
`;

const StyledConstructionIcon = styled(ConstructionIcon)`
  margin: auto;
  svg {
    height: 70px;
  }
`;

const Dashboard = ({ signedIn }) => {
  const getIcon = (category) => {
    switch (category) {
      case 'barchart':
        return <StyledBarChartIcon />;
      case 'boxplot':
        return <StyledBoxPlotIcon />;
      case 'bulletchart':
        return <StyledBulletChartIcon />;
      case 'button':
        return <StyledButtonIcon />;
      case 'combochart':
        return <StyledComboChartIcon />;
      case 'distributionplot':
        return <StyledDistributionPlotIcon />;
      case 'funnelchart':
        return <StyledFunnelChartIcon />;
      case 'gridchart':
        return <StyledGridChartIcon />;
      case 'histogram':
        return <StyledHistogramChartIcon />;
      case 'kpi':
        return <StyledKPIIcon />;
      case 'linechart':
        return <StyledLineChartIcon />;
      case 'mekkochart':
        return <StyledMekkoChartIcon />;
      case 'orgchart':
        return <StyledOrgChartIcon />;
      case 'piechart':
        return <StyledPieChartIcon />;
      case 'sankeychart':
        return <StyledSankeyChartIcon />;
      case 'table':
        return <StyledTableIcon />;
      case 'scatterplot':
        return <StyledScatterPlotIcon />;
      case 'waterfallchart':
        return <StyledWaterfallChartIcon />;
      default:
        break;
    }
  };

  const getSelectedChartId = (category) => {
    const categoryIndex = chartList.findIndex(
      (item) => item.category === category
    );
    return chartList[categoryIndex].subcategories[0].chartId;
  };

  return (
    <StyledScreenContainer>
      <StyledNavBar>
        <StyledNavButton to="/">
          <StyledLogoIcon />
          NEBULA.JS LIBRARY
        </StyledNavButton>
        <StyledPageTitle initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <StyledTitle>Category</StyledTitle>
        </StyledPageTitle>
      </StyledNavBar>
      <StyledChartListOuterContainer>
        {!signedIn ? (
          <Navigate to="/error" />
        ) : (
          <StyledChartListInnerContainer>
            {chartList.map((item) => (
              <StyledChartCategoryItem
                key={item.category}
                to={
                  item.category === 'button'
                    ? `chart/button`
                    : `chart/${item.category}/${getSelectedChartId(
                        item.category
                      )}`
                }
                disabled={item.disabled}
                layout
                whileHover={{ scale: 1.05, transitionTimingFunction: 'linear' }}
              >
                <StyledCategoryTitle>{item.title}</StyledCategoryTitle>

                <StyledIconContainer>
                  {getIcon(item.category)}
                </StyledIconContainer>
                {item.disabled ? (
                  <StyledConstructionContainer>
                    <StyledConstructionText>
                      UNDER CONSTRUCTION
                    </StyledConstructionText>
                    <StyledConstructionIcon />
                  </StyledConstructionContainer>
                ) : (
                  <></>
                )}
              </StyledChartCategoryItem>
            ))}
          </StyledChartListInnerContainer>
        )}
      </StyledChartListOuterContainer>
    </StyledScreenContainer>
  );
};

export default Dashboard;
