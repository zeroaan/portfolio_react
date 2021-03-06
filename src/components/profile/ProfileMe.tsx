import React from "react"
import styled from "styled-components"

const DivMe = styled.div`
  flex: 1;
  font-family: "Noto Sans KR", sans-serif;
  margin-right: 50px;

  h1 {
    font-weight: bold;
    font-size: 35px;
    letter-spacing: 5px;
    margin-bottom: 60px;
  }
  h3 {
    color: rgb(36, 200, 255);
    font-size: 16px;
    margin-bottom: 10px;
  }
  p {
    font-size: 18px;
    word-spacing: 1px;
    line-height: 25px;
    margin-bottom: 30px;
  }
`

const ProfileMe = () => {
  return (
    <DivMe>
      <h1>안진영</h1>
      <h3>학력</h3>
      <p>
        가천대학교 산업경영공학과
        <br />
        컴퓨터공학과(복수전공)
      </p>
      <h3>교육</h3>
      <p>
        한국 소프트웨어 기술진흥협회
        <br />
        SW개발자 양성과정 수료
      </p>
    </DivMe>
  )
}

export default ProfileMe
