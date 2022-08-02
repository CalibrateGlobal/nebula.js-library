import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import ModalPortal from '../utils/ModalPortal';
import CloseMenuIcon from './icons/CloseMenuIcon';

const StyledOverLay = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  background-color: rgba(75, 85, 99, 0.8);
  position: absolute;
  top: 0;
  z-index: 400;
  opacity: 0;
  backdrop-filter: blur(2px);
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
  /* opacity: ${(props) => (props.codeModalOpen ? 1 : 0)}; */
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

const CodeModal = ({ codeModalOpen, handleCloseCodeModal }) => {
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
              <StyledModalInnerContainer></StyledModalInnerContainer>
            </StyledModalOuterContainer>
          </>
        )}
      </AnimatePresence>
    </ModalPortal>
  );
};

export default CodeModal;
