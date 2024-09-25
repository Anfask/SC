import React from 'react';
import styled, { keyframes } from 'styled-components';

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const RibbonContainer = styled.div`
  position: relative;
  overflow: hidden;
  background-color: black;
  width: 100%;
  height: 200px;
  transform: skew(0deg, -5deg);
  display: flex;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 100px;
`;

const TextWrapper = styled.div`
  display: flex;
  white-space: nowrap;
  animation: ${scroll} 40s linear infinite;
  font-size: 5rem;
  color: #caed91;
  font-weight: 600;
  transform: skew(0deg, 5deg);
`;

const TextContent = styled.div`
  padding-right: 50px; 
`;

const MovingRibbon = () => {
  const text = "CONFUSED AND WORRIED ABOUT YOUR HIGHER EDUCATION? DON'T WORRY... WE GOT YOU !";
  
  return (
    <RibbonContainer>
      <TextWrapper>
        <TextContent>{text}</TextContent>
        <TextContent>{text}</TextContent>
      </TextWrapper>
    </RibbonContainer>
  );
};

export default MovingRibbon;