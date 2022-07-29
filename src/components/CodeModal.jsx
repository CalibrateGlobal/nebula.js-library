import React from 'react';
import styled from 'styled-components';
import ModalPortal from '../utils/ModalPortal';

const StyledModalOuterContainer = styled.div`
  position: absolute;
  z-index: ${(props) => (props.codeModalOpen ? 500 : -500)};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 80%;
  width: 80%;
  display: flex;
  flex-direction: column;
  background-color: black;
  opacity: ${(props) => (props.codeModalOpen ? 1 : 0)};
`;

const StyledHeaderDiv = styled.div`
  width: 100%;
  display: flex;
  position: relative;
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

const CodeModal = ({ codeModalOpen, handleCloseCodeModal }) => {
  return (
    <ModalPortal>
      <StyledModalOuterContainer codeModalOpen={codeModalOpen}>
        <StyledHeaderDiv>
          <StyledModalTitle>Code:</StyledModalTitle>
        </StyledHeaderDiv>
        <StyledModalInnerContainer></StyledModalInnerContainer>
      </StyledModalOuterContainer>
    </ModalPortal>
  );
};

export default CodeModal;
