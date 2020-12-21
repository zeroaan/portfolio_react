import React from "react";
import styled from "styled-components";

import SkillEtc from "components/skill/SkillEtc";

import { SkillData, EtcData } from "data/SkillData";

const DivSkills = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20%;
  text-transform: capitalize;
`;
const PSkill = styled.p`
  font-size: 20px;
  margin: 0 20px;
  color: rgb(200, 200, 200);
`;
const DivEtcSkills = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 20px auto;
  width: 85%;
  height: 25%;
  border-radius: 20px;
  background-color: rgb(25, 25, 25);
  color: rgb(200, 200, 200);
`;

const SkillContent = () => {
  return (
    <>
      <DivSkills>
        {SkillData.map((v) => (
          <PSkill key={v}>{v}</PSkill>
        ))}
      </DivSkills>
      <DivEtcSkills>
        <SkillEtc />
        <DivSkills>
          {EtcData.map((v) => (
            <PSkill key={v}>{v}</PSkill>
          ))}
        </DivSkills>
      </DivEtcSkills>
    </>
  );
};

export default SkillContent;
