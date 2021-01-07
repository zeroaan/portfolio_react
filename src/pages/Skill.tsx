import React from "react"
import styled from "styled-components"

import AboutLayout from "components/layout/AboutLayout"
import SkillContent from "components/skill/SkillContent"

import REACT from "assets/images/skill/react.png"
import JAVASCRIPT from "assets/images/skill/javascript.png"
import REDUX from "assets/images/skill/redux.png"

const DivStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
  margin-bottom: 15px;
  color: rgb(220, 220, 220);
`
const DivSkills = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 250px;
  margin: 0 30px;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`
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
`
const ImgSkill = styled.img`
  width: 150px;
  height: 150px;
`
const PSkill = styled.p`
  font-size: 25px;
  margin-top: 10px;
  text-transform: uppercase;
`

const Skill = () => {
  return (
    <AboutLayout title="Skill">
      <DivStyle>
        <DivSkills>
          <DivBlur />
          <ImgSkill src={REACT} alt="REACT" />
          <PSkill>React</PSkill>
        </DivSkills>
        <DivSkills>
          <DivBlur />
          <ImgSkill src={JAVASCRIPT} alt="JAVASCRIPT" />
          <PSkill>Javascript</PSkill>
        </DivSkills>
        <DivSkills>
          <DivBlur />
          <ImgSkill src={REDUX} alt="REDUX" />
          <PSkill>Redux</PSkill>
        </DivSkills>
      </DivStyle>

      <SkillContent />
    </AboutLayout>
  )
}

export default Skill
