import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import ModalPortal from '../utils/ModalPortal';
import CloseMenuIcon from './icons/CloseMenuIcon';
import GithubIcon from './icons/GithubIcon';

const StyledOverLay = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  background-color: rgba(75, 85, 99, 0.8);
  position: absolute;
  top: 0;
  z-index: 400;
  opacity: 0;
  /* backdrop-filter: blur(2px); */
`;

const StyledModalOuterContainer = styled(motion.div)`
  position: absolute;
  z-index: 500;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 80%;
  width: 80%;
  display: flex;
  flex-direction: column;
  background-color: #171f34;
  border: 1px solid #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  opacity: 0;
`;

const StyledHeaderDiv = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  background-color: #23bddf;
`;

const StyledModalTitle = styled.h3`
  font-size: 3rem;
  color: #fff;
  font-weight: 600;
  margin: auto;
`;

const StyledModalInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 100px);
  overflow-y: auto;
  overflow-x: auto;
  margin: 50px auto 50px auto;
  padding-right: 10px;
  width: 95%;

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

const StyledCloseMenuIcon = styled(CloseMenuIcon)`
  position: absolute;
  cursor: pointer;
  width: 50px;
  height: 50px;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
`;

const StyledTextContainer = styled.div`
  margin: 0px auto 1rem auto;
  display: flex;
  flex-direction: row;
`;

const StyledDescText = styled.h3`
  color: white;
  display: flex;
  margin: auto;
  width: 220px;
  font-weight: 400;
`;
const StyledLink = styled.a`
  display: flex;
  margin: auto auto auto 2rem;
`;

const StyledGithubIcon = styled(GithubIcon)`
  height: 40px;
  width: 40px;
  svg {
    height: 40px;
    width: 40px;
  }
  path {
    fill: white;
  }
`;

const StyledStylingOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0rem auto auto auto;
`;

const StyledStylingOptionsTitleText = styled.h3`
  color: white;
  margin: auto auto 1rem 0px;
`;

const StyledListContainer = styled.ul`
  margin: auto;
`;

const StyledListItem = styled.li`
  color: white;
  margin: auto auto 1rem auto;
  font-size: 1.17em;
`;

const StyledImage = styled.img`
  width: 70%;
  margin: auto;
`;

const StyledTopContainer = styled.div`
  display: flex;
  margin: auto auto 2rem auto;
  flex-direction: row;
  width: 80%;
`;

const StyledTopLeftContainer = styled.div`
  display: flex;
  margin: auto;
  flex-direction: column;
`;
const StyledTopRightContainer = styled.div`
  display: flex;
  margin: 0px auto auto 4rem;
  flex-direction: column;
`;

const StyledLinkText = styled.a`
  color: #1ba158;
`;

const CodeModal = ({ codeModalOpen, handleCloseCodeModal }) => {
  const getImagePath = () => {
    if (process.env.NODE_ENV === 'production') {
      return '/extensions/nebula-lib/assets/ChartStyling.png';
    }
    return '/assets/ChartStyling.png';
  };
  return (
    <ModalPortal>
      <AnimatePresence>
        {codeModalOpen && (
          <>
            <StyledOverLay
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ ease: 'linear', duration: 0.1 }}
            />

            <StyledModalOuterContainer
              key="modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ ease: 'linear', duration: 0.3 }}
            >
              <StyledHeaderDiv>
                <StyledModalTitle>Code:</StyledModalTitle>
                <StyledCloseMenuIcon onClick={handleCloseCodeModal} />
              </StyledHeaderDiv>
              <StyledModalInnerContainer>
                <StyledTopContainer>
                  <StyledTopLeftContainer>
                    <StyledTextContainer>
                      <StyledDescText>Nebula Config:</StyledDescText>
                      <StyledLink
                        href="https://github.com/CalibrateGlobal/nebula.js-library/blob/main/src/utils/qlik/nebulaConfig.js"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <StyledGithubIcon />
                      </StyledLink>
                    </StyledTextContainer>
                    <StyledTextContainer>
                      <StyledDescText>Enigma Integration:</StyledDescText>
                      <StyledLink
                        href="https://github.com/CalibrateGlobal/nebula.js-library/blob/main/src/utils/qlik/useQlik.jsx"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <StyledGithubIcon />
                      </StyledLink>
                    </StyledTextContainer>
                    <StyledTextContainer>
                      <StyledDescText>Rendering a Chart:</StyledDescText>
                      <StyledLink
                        href="https://github.com/CalibrateGlobal/nebula.js-library/blob/main/src/pages/Chart.jsx"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <StyledGithubIcon />
                      </StyledLink>
                    </StyledTextContainer>
                  </StyledTopLeftContainer>
                  <StyledTopRightContainer>
                    <StyledStylingOptionsContainer>
                      <StyledStylingOptionsTitleText>
                        Nebula Chart Styling Options:
                      </StyledStylingOptionsTitleText>
                      <StyledListContainer>
                        <StyledListItem>
                          <StyledLinkText
                            href="https://qlik.dev/libraries-and-tools/nebulajs/applying-themes"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Themes
                          </StyledLinkText>
                        </StyledListItem>
                        <StyledListItem style={{ maxWidth: '600px' }}>
                          Access to certain elements via css selectors (e.g.
                          titles, chart background etc - see below)
                        </StyledListItem>

                        <StyledListItem>
                          <StyledLinkText
                            href="https://qlik.dev/libraries-and-tools/picassojs"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Plugins
                          </StyledLinkText>
                        </StyledListItem>
                      </StyledListContainer>
                    </StyledStylingOptionsContainer>
                  </StyledTopRightContainer>
                </StyledTopContainer>
                <StyledImage src={getImagePath()} />
              </StyledModalInnerContainer>
            </StyledModalOuterContainer>
          </>
        )}
      </AnimatePresence>
    </ModalPortal>
  );
};

export default CodeModal;
