import React, { useRef } from "react";
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
const DivEtc = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;
const H1Etc = styled.h1`
  font-size: 30px;
  margin-right: 10px;
`;
const DivEtcQues = styled.div`
  border: 1px solid rgb(150, 150, 150);
  border-radius: 50%;
  width: 17px;
  height: 17px;
  line-height: 17px;
  font-size: 14px;
  text-align: center;
  color: rgb(150, 150, 150);
  cursor: help;
`;
const PEtcQues = styled.p`
  position: absolute;
  top: 7px;
  left: 90px;
  width: 250px;
  font-size: 14px;
  opacity: 0;
  transition: all 0.1s ease;
  color: rgb(150, 150, 150);
  font-family: "Noto Sans KR", sans-serif;
`;

const SkillContent = () => {
  const etcEl = useRef<HTMLParagraphElement>(null);

  const onmouseEnter = () => {
    if (etcEl.current) {
      etcEl.current.style.opacity = "1";
    }
  };
  const onMouseLeave = () => {
    if (etcEl.current) {
      etcEl.current.style.opacity = "0";
    }
  };

  return (
    <>
      <DivSkills>
        {SkillData.map((v) => (
          <PSkill key={v}>{v}</PSkill>
        ))}
      </DivSkills>
      <DivEtcSkills>
        <DivEtc>
          <H1Etc>Etc.</H1Etc>
          <DivEtcQues onMouseEnter={onmouseEnter} onMouseLeave={onMouseLeave}>
            ?
          </DivEtcQues>
          <PEtcQues ref={etcEl}>기초 지식 습득 & 현재 공부 중인 기술</PEtcQues>
        </DivEtc>
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
