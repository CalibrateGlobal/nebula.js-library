import { Link, useParams } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import LogoIcon from '../components/icons/LogoIcon'
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



export const StyledLogoIcon = styled(LogoIcon)`
  cursor: pointer;
  width: 50px;
  height: 50px;
  margin: 0 2rem 0;
`;
const StyledPageTitle = styled.div`
  font-size: 2rem;
  margin-bottom: 0.5ch;
font-style: normal;
font-weight: 600;
font-size: 48px;
line-height: 72px;
color: #FFFFFF;
`;



const StyledChartListContainer = styled.section`
  display: grid;
  grid-gap: 5% 1%;
  grid-template-columns: repeat(5, 1fr);
  justify-content: center;
  height: 100%;
  overflow-y: auto;
  overflow-x: auto;
  width: 90%;
  background-color: #171F34;
  height: 75%;
  align-self: center;
  border: 1px solid black;
  border-radius: 20px;
  margin-top: auto;
  margin-bottom: auto;
  &::-webkit-scrollbar {
    border-radius: 5px;
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: #a4a4a4;
    height: 5px;
  }

  &::-webkit-scrollbar-track {
    margin-bottom: 11px;
  }
 
  &::-webkit-scrollbar-track-piece {
    background: #f5f5f5;
    margin-top: 20px;
    border-radius: 5px;
  }
`;


const StyledChartItem = styled.button`
font-style: normal;
font-weight: 500;
font-size: 36px;
line-height: 54px;
color: #FFFFFF;
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




const StyledScreenContainer = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: #1f1b2c;
`;
const StyledNavBar = styled.nav`
  width: 100%;
  height: 12%;
  background: #1D2741;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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
export const StyledNavButton = styled.button`
  font-size: 15px;
  margin-left: 2rem;
  font-weight: 400;
  color: #23bddf;
  text-decoration: none;
  background: transparent;
  border: none;
  cursor: pointer;
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
  text-align: center;
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

const Dashboard = () => {
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
        <StyledNavBar>
          <StyledNavButton>
        <StyledLogoIcon>
        <LogoIcon/>
        
        </StyledLogoIcon>
        NEBULA.JS LIBRARY
        </StyledNavButton>
    
        <StyledPageTitle>Categories</StyledPageTitle>
        <span style={{ width: '6rem' }}></span>
       </StyledNavBar>
      <StyledChartListOuterContainer>
        <StyledChartListInnerContainer>
          {iconList.map((item) => (
            <StyledChartCategoryItem>
               <Link to={`chart/${item.category}`}>
              <StyledCategoryTitle>{item.title}</StyledCategoryTitle>
              </Link>
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

 export default Dashboard;
