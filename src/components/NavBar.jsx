import styled from 'styled-components';
import LogoIcon from './../assets/icons/LogoIcon';
import HamburgerMenuIcon from './../assets/icons/HamburgerMenuIcon';
import { Link } from 'react-router-dom';

export const StyledNavBar = styled.nav`
  width: 100%;
  height: 150px;
  background: #1d2741;
  display: flex;
  align-items: center;
`;

export const StyledNavButton = styled(Link)`
  font-size: 1.2rem;
  margin-left: 2rem;
  font-weight: 400;
  color: #23bddf;
  text-decoration: none;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
`;
export const StyledCodeButton = styled.button`
  font-size: 1.2rem;
  font-weight: 600;
  color: #ffff;
  background: transparent;
  border: 1px solid #04abcb;
  border-radius: 5px;
  width: 8rem;
  height: 3rem;
  cursor: pointer;
  margin-left: auto;
`;

export const StyledPageTitle = styled.div`
  font-size: 3rem;
  color: #fff;
  font-weight: 600;
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);
  padding: 0.5ch 0 0.5ch 0;
`;
export const StyledTitle = styled.div`
  font-size: 3rem;
  color: #fff;
  font-weight: 600;
`;
export const StyledSubTitle = styled.div`
  font-size: 1.5rem;
  color: #fff;
  font-weight: 400;
  text-align: center;
`;

export const StyledLogoIcon = styled(LogoIcon)`
  margin: auto;
`;
export const StyledHamburgerMenuIcon = styled(HamburgerMenuIcon)`
  cursor: pointer;
  width: 50px;
  height: 50px;
  margin: 0 2rem 0;
`;
