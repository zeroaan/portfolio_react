import React from "react";
import styled from "styled-components";

import Layout from "components/Layout";

const Divstyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  color: white;
`;

const About = () => {
  return (
    <Layout>
      <Divstyled>
        <h1>About</h1>
      </Divstyled>
    </Layout>
  );
};

export default About;
