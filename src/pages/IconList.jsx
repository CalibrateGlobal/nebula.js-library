import React from 'react';
import styled from 'styled-components';
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
import chartList from '../data/chartList';

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
  height: 100%;
  overflow: hidden;
  padding: 0px 25px 0px 50px;
`;

const StyledChartListInnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: calc(100% - 50px);
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
    margin-bottom: 50px;
    border-radius: 5px;
    border-left: 2px solid #171f34;
    border-right: 2px solid #171f34;
  }
`;

const StyledChartCategoryItem = styled.div`
  width: 362px;
  height: 268px;
  background: #049eb8;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin: auto auto 50px auto;
  cursor: pointer;
`;

const StyledCategoryTitle = styled.h3`
  font-weight: 500;
  font-size: 36px;
  line-height: 54px;
  color: #ffffff;
  margin: 10px auto 0px auto;
`;

const StyledIconContainer = styled.div`
  margin: auto;
`;

const IconList = () => {
  const iconList = [
    { title: 'Bar Chart', category: 'barchart' },
    { title: 'Box Plot', category: 'boxplot' },
    { title: 'Bullet Chart', category: 'bulletchart' },
    { title: 'Button', category: 'button' },
    { title: 'Combo Chart', category: 'combochart' },
    { title: 'Distribution Plot', category: 'distributionplot' },
    { title: 'Funnel Chart', category: 'funnelchart' },
    { title: 'Grid Chart', category: 'gridchart' },
    { title: 'Histogram Chart', category: 'histogramchart' },
    { title: 'KPI', category: 'kpi' },
    { title: 'Line Chart', category: 'linechart' },
    { title: 'Mekko Chart', category: 'mekkochart' },
    { title: 'Organisation Chart', category: 'orgchart' },
    { title: 'Pie Chart', category: 'piechart' },
    { title: 'Sankey Chart', category: 'sankeychart' },
    { title: 'Table', category: 'table' },
    { title: 'Scatter Plot', category: 'scatterplot' },
    { title: 'Waterfall Chart', category: 'waterfallchart' },
  ];

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
      case 'histogramchart':
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

  return (
    <StyledScreenContainer>
      <StyledChartListOuterContainer>
        <StyledChartListInnerContainer>
          {iconList.map((item) => (
            <StyledChartCategoryItem>
              <StyledCategoryTitle>{item.title}</StyledCategoryTitle>
              <StyledIconContainer>
                {getIcon(item.category)}
              </StyledIconContainer>
            </StyledChartCategoryItem>
          ))}
        </StyledChartListInnerContainer>
      </StyledChartListOuterContainer>
    </StyledScreenContainer>
  );
};

export default IconList;