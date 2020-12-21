import React from "react";
import Layout from "components/layout/Layout";
import styled, { keyframes } from "styled-components";

import BACKIMG from "assets/images/home/background.png";

const typing = keyframes`
  0%, 80%, 100% {
    max-width: 0%;
  }
  30%, 50%, 60% {
    max-width: 100%;
  }
`;
const blinkTyping = keyframes`
    0%, 100%{
      border-color: transparent;
    }
    50% {
      border-color: white;
    }
`;
const fadeIn = keyframes` 
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const DivBackImg = styled.div`
  background: center/cover no-repeat url(${BACKIMG});
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: ${fadeIn} 0.5s linear;
`;
const DivTitleBox = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  z-index: -1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: white;
  user-select: none;
`;
const PTitle = styled.p`
  font-size: 40px;
  margin: 10px 0;
  letter-spacing: 3px;
`;
const PSubTitle = styled(PTitle)`
  overflow: hidden;
  white-space: nowrap;
  max-width: 100%;
  height: 45px;
  line-height: 45px;
  text-align: center;
  border-right: 4px solid white;
  animation: ${typing} 10s steps(34, end) infinite, ${blinkTyping} 1s step-start infinite;
`;

const Home = () => {
  return (
    <Layout>
      <DivBackImg />
      <DivTitleBox>
        <PTitle>안녕하세요!</PTitle>
        <PSubTitle>프론트엔드 개발자 안진영의 포트폴리오입니다.</PSubTitle>
      </DivTitleBox>
    </Layout>
  );
};

export default Home;
