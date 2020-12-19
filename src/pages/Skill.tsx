import React from "react";
import styled from "styled-components";

import AboutLayout from "components/AboutLayout";

const DivStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 100%;
  height: 100%;
`;

const Skill = () => {
  return (
    <AboutLayout title="Skill">
      <DivStyle>
        <h1>Skill</h1>
      </DivStyle>
    </AboutLayout>
  );
};

export default Skill;
