import React, { useRef } from "react";
import styled from "styled-components";

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

const SkillEtc = () => {
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
    <DivEtc>
      <H1Etc>Etc.</H1Etc>
      <DivEtcQues onMouseEnter={onmouseEnter} onMouseLeave={onMouseLeave}>
        ?
      </DivEtcQues>
      <PEtcQues ref={etcEl}>기초 지식 습득 & 현재 공부 중인 기술</PEtcQues>
    </DivEtc>
  );
};

export default SkillEtc;
