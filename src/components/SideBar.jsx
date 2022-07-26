import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import CloseMenuIcon from './icons/CloseMenuIcon';
import HamburgerMenuIcon from './icons/HamburgerMenuIcon';
import {
  StyledLogoIcon,
  StyledNavBar,
  StyledNavButton,
  StyledPageTitle,
  StyledCodeButton,
  StyledSubTitle,
  StyledTitle,
} from '../components/NavBar';
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

const StyledHamburgerMenuIcon = styled(HamburgerMenuIcon)`
  cursor: pointer;
  width: 50px;
  height: 50px;
  margin: 0 2rem 0;
`;

const NavIcon = styled(motion.button)`
  text-decoration: none;
  background: transparent;
  border: none;
  height: fit-content;
`;

const StyledCloseMenuIcon = styled(CloseMenuIcon)`
  cursor: pointer;
  width: 50px;
  height: 50px;
  margin: 0 2rem 0 2rem;
`;

const StyledSideBarNav = styled(motion.nav)`
  background: #1d2741;
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  width: 300px;
  height: calc(100% - 200px);
  display: flex;
  flex-direction: column;
  align-self: end;
  align-items: center;
  position: fixed;
  top: 150px;
  right: 0;
  z-index: 10;
`;

const StyledSideBarContainer = styled.div``;

const StyledChartListInnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: calc(100% - 0px);
  width: calc(100% - 20px);
  overflow-y: auto;
  overflow-x: auto;
  margin: 0px 10px 0px 10px;
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
    margin-bottom: 25px;
    margin-top: 25px;
    border-radius: 5px;
    border-left: 2px solid #171f34;
    border-right: 2px solid #171f34;
  }
`;

const StyledChartCategoryItem = styled(motion(Link))`
  width: 90%;
  height: fit-content;
  background: #049eb8;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin: 25px auto 25px auto;
  padding-bottom: 10px;
  cursor: pointer;
  text-decoration: none;
`;

const StyledCategoryTitle = styled.h3`
  font-weight: 500;
  font-size: 20px;
  color: #ffffff;
  padding: 10px;
  text-decoration: none;
  text-align: center;
`;

const StyledCategorySubTitle = styled.h5`
  font-weight: 500;
  font-size: 15px;
  color: #ffffff;
  text-align: center;
  margin-bottom: 10px;
`;

const StyledIconContainer = styled.div`
  margin: auto;
`;

const sideBarVariants = {
  open: { opacity: 1, x: '0px' },
  closed: { opacity: 0, x: '300px' },
};

const closeButtonVariants = {
  open: { x: '-6rem' },
  closed: { x: '-20px' },
};

const StyledMotionCodeButton = motion(StyledCodeButton);

function SideBar({ chartTitle, chartSubTitle, handleOpenCodeModal }) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const { category } = useParams();

  const categoryIndex = chartList.findIndex(
    (item) => item.category === category
  );

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

  const titleVariants = {
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        duration: 0,
      },
    },
  };

  const [titleVisible, setTitleVisible] = useState();
  const [title, setTitle] = useState();
  const [subTitle, setSubTitle] = useState();

  useEffect(() => {
    setTitleVisible(false);
    setTitle('');
    setSubTitle('');
    const time = setTimeout(() => {
      setTitle(chartTitle);
      setSubTitle(chartSubTitle);
      setTitleVisible(true);
    }, 200);
    return () => clearTimeout(time);
  }, [chartTitle, chartSubTitle]);

  return (
    <>
      <StyledNavBar className="navbar">
        <StyledNavButton to="/">
          <StyledLogoIcon />
          NEBULA.JS LIBRARY
        </StyledNavButton>
        <StyledPageTitle
          variants={titleVariants}
          animate={titleVisible ? 'visible' : 'hidden'}
          initial="hidden"
        >
          <StyledTitle>{title}</StyledTitle>
          <StyledSubTitle>{subTitle}</StyledSubTitle>
        </StyledPageTitle>
        <StyledMotionCodeButton
          onClick={handleOpenCodeModal}
          animate={sidebar ? 'open' : 'closed'}
          variants={closeButtonVariants}
          whileHover={{
            scale: 1.05,
            transition: {
              duration: 0.3,
            },
          }}
        >
          Code
        </StyledMotionCodeButton>
        <NavIcon
          onClick={showSidebar}
          animate={sidebar ? 'open' : 'closed'}
          variants={closeButtonVariants}
        >
          {sidebar ? <StyledCloseMenuIcon /> : <StyledHamburgerMenuIcon />}
        </NavIcon>
        <StyledSideBarContainer>
          <StyledSideBarNav
            initial={{ opacity: 0, x: '300px' }}
            animate={sidebar ? 'open' : 'closed'}
            variants={sideBarVariants}
          >
            <StyledChartListInnerContainer>
              {chartList[categoryIndex].subcategories.map((item) => (
                <StyledChartCategoryItem
                  value={item.category}
                  to={`/chart/${category}/${item.chartId}`}
                  key={item.chartId}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: '0 8px 5px 0 rgba(0, 0, 0, 0.25)',
                  }}
                >
                  <StyledCategoryTitle>{item.title}</StyledCategoryTitle>
                  <StyledCategorySubTitle>
                    {item.subtitle}
                  </StyledCategorySubTitle>
                  <StyledIconContainer>{getIcon(category)}</StyledIconContainer>
                </StyledChartCategoryItem>
              ))}
            </StyledChartListInnerContainer>
          </StyledSideBarNav>
        </StyledSideBarContainer>
      </StyledNavBar>
    </>
  );
}

export default SideBar;
