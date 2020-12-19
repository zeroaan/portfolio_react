import React from "react";
import styled, { keyframes } from "styled-components";

import Layout from "components/Layout";

const fadeIn = keyframes` 
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const DivStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  animation: ${fadeIn} 0.5s linear;
`;
const H1Title = styled.h1`
  font-size: 30px;
  color: white;
  padding: 7px;
  margin: 50px;
  letter-spacing: 2px;
  border-bottom: 5px solid rgb(60, 173, 212);
`;
const DivContent = styled.div`
  width: 1100px;
  height: 450px;
  background-color: rgb(30, 30, 30);
`;

interface Props {
  title: string;
}

const AboutLayout: React.FC<Props> = ({ children, title }) => {
  return (
    <Layout>
      <DivStyle>
        <H1Title>{title}</H1Title>
        <DivContent>{children}</DivContent>
      </DivStyle>
    </Layout>
  );
};

export default AboutLayout;
