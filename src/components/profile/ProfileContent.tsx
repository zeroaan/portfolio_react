import React from "react"
import styled from "styled-components"

const DivData = styled.div`
  margin: 30px 0;
`
const DivTitle = styled.div`
  display: flex;
  align-items: flex-end;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid rgb(130, 130, 130);
`
const PTitle = styled.p`
  font-size: 22px;
  color: rgb(36, 200, 255);
`
const PDesc = styled.p`
  font-size: 17px;
  word-spacing: 1px;
  line-height: 25px;
`

interface Props {
  title: string
  desc: string
}

const ProfileContent: React.FC<Props> = ({ title, desc }) => {
  return (
    <DivData>
      <DivTitle>
        <PTitle>{title}</PTitle>
      </DivTitle>
      <PDesc>{desc}</PDesc>
    </DivData>
  )
}

export default ProfileContent
