import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Layout from "components/Layout";

import { AboutData } from "data/AboutData";

const DivContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
const LinkAbouts = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 80px;
  &:hover img {
    transform: scale(1.05);
    opacity: 1;
  }
  &:hover h1 {
    opacity: 1;
  }
`;
const ImgAbout = styled.img`
  width: 180px;
  height: 180px;
  opacity: 0.8;
  transition: all 0.3s ease;
`;
const H1About = styled.h1`
  margin-top: 30px;
  font-size: 30px;
  color: white;
  opacity: 0.5;
  transition: all 0.3s ease;
`;

const About = () => {
  return (
    <Layout>
      <DivContainer>
        {AboutData.map((v) => (
          <LinkAbouts key={v.title} to={`/about/${v.path}`}>
            <ImgAbout src={v.src} alt={v.title} />
            <H1About>{v.title}</H1About>
          </LinkAbouts>
        ))}
      </DivContainer>
    </Layout>
  );
};

export default About;
