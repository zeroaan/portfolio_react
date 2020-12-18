import React from "react";
import styled from "styled-components";

import Layout from "components/Layout";

const DivContainer = styled.div`
  padding-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  user-select: none;
  margin: auto;
  width: 1000px;
`;
const DivProjects = styled.div`
  margin: 35px;
  width: 390px;
  height: 230px;
  border-radius: 20px;
  background-color: rgb(246, 248, 254);
`;

const Project = () => {
  return (
    <Layout>
      <DivContainer>
        <DivProjects></DivProjects>
        <DivProjects></DivProjects>
        <DivProjects></DivProjects>
        <DivProjects></DivProjects>
        <DivProjects></DivProjects>
        <DivProjects></DivProjects>
      </DivContainer>
    </Layout>
  );
};

export default Project;
