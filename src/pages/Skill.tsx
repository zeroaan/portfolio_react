import React from "react";
import styled from "styled-components";

import AboutLayout from "components/layout/AboutLayout";

import { SkillData } from "data/SkillData";

const DivStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80%;
  color: rgb(220, 220, 220);
`;
const DivSkills = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 170px;
  height: 170px;
  margin: 25px 30px;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;
const DivBlur = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(60, 173, 212, 0.1);
  filter: blur(50px);
  border-radius: 50%;
  z-index: -1;
`;
const ImgSkill = styled.img`
  width: 120px;
  height: 120px;
`;
const PSkill = styled.p`
  font-size: 24px;
  margin-top: 12px;
`;

const Skill = () => {
  return (
    <AboutLayout title="Skill">
      <DivStyle>
        {SkillData.map((v) => (
          <DivSkills key={v.name}>
            <DivBlur />
            <ImgSkill src={v.image} alt={v.name} />
            <PSkill>{v.name}</PSkill>
          </DivSkills>
        ))}
      </DivStyle>
    </AboutLayout>
  );
};

export default Skill;
