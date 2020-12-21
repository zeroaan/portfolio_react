import React from "react";
import styled from "styled-components";

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
  color: rgb(180, 180, 180);
`;
const DivEtc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 20px auto;
  width: 85%;
  height: 25%;
  border-radius: 20px;
  background-color: rgb(20, 20, 20);
  color: rgb(180, 180, 180);
`;
const H1Etc = styled.div`
  font-size: 30px;
`;

const SkillContent = () => {
  return (
    <>
      <DivSkills>
        {SkillData.map((v) => (
          <PSkill key={v}>{v}</PSkill>
        ))}
      </DivSkills>
      <DivEtc>
        <H1Etc>Etc.</H1Etc>
        <DivSkills>
          {EtcData.map((v) => (
            <PSkill key={v}>{v}</PSkill>
          ))}
        </DivSkills>
      </DivEtc>
    </>
  );
};

export default SkillContent;
