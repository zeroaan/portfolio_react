import React from "react";
import styled, { keyframes } from "styled-components";

import Layout from "components/layout/Layout";

import { ProjectData } from "data/ProjectData";

const fadeIn = keyframes` 
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const PGithub = styled.p`
  font-size: 20px;
  color: white;
  padding: 100px 0 5px 0;
  text-align: center;
  user-select: none;
`;
const DivContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  user-select: none;
  margin: auto;
  width: 920px;
  animation: ${fadeIn} 0.5s linear;
`;
const DivProImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 30px;
  transition: all 0.5s ease-in-out;
`;
const AProjects = styled.a`
  position: relative;
  margin: 35px;
  width: 390px;
  height: 230px;
  border-radius: 30px;
  &:hover ${DivProImg} {
    transform: scale(0.5) translateY(-100px);
  }
`;
const DivProBack = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  border-radius: 30px;
  background-color: rgb(20, 20, 20);
  z-index: -1;
  color: white;
`;
const PTitle = styled.p`
  font-size: 24px;
`;
const PSubTitle = styled.p`
  font-size: 14px;
  margin: 18px 0 28px 0;
`;

const Project = () => {
  return (
    <Layout>
      <PGithub>Click to go to the GitHub</PGithub>
      <DivContainer>
        {ProjectData.map((v) => (
          <AProjects key={v.id} href={v.github} target="_blank">
            <DivProImg src={v.src} alt={v.title} />
            <DivProBack>
              <PTitle>{v.title}</PTitle>
              <PSubTitle>{v.subTitle}</PSubTitle>
            </DivProBack>
          </AProjects>
        ))}
      </DivContainer>
    </Layout>
  );
};

export default Project;
