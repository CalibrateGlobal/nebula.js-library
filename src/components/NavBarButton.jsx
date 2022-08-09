import React from 'react';
import {
  StyledLogoIcon,
  StyledNavBar,
  StyledNavButton,
  StyledPageTitle,
  StyledCodeButton,
  StyledSubTitle,
  StyledTitle,
} from '../components/NavBar';

function NavBarButton({ handleOpenCodeModal }) {
  return (
    <>
      <StyledNavBar className="navbar">
        <StyledNavButton to="/">
          <StyledLogoIcon />
          NEBULA.JS LIBRARY
        </StyledNavButton>
        <StyledPageTitle>
          <StyledTitle>Button</StyledTitle>
          <StyledSubTitle></StyledSubTitle>
        </StyledPageTitle>
        <StyledCodeButton style={{marginRight: '2rem'}} onClick={handleOpenCodeModal}>Code</StyledCodeButton>
      </StyledNavBar>
    </>
  );
}

export default NavBarButton;
