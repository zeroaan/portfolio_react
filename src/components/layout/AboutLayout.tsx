import React from "react"
import styled, { keyframes } from "styled-components"
import { useHistory } from "react-router-dom"
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai"

import Layout from "components/layout/Layout"

const fadeIn = keyframes` 
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const DivStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  animation: ${fadeIn} 0.5s linear;
  user-select: none;
`
const H1Title = styled.h1`
  font-size: 30px;
  color: white;
  padding: 7px;
  margin: 50px;
  letter-spacing: 2px;
  border-bottom: 5px solid rgb(60, 173, 212);
`
const DivContent = styled.div`
  width: 1100px;
  height: 450px;
  color: white;
`
const IconLeft = styled(AiOutlineDoubleLeft)`
  font-size: 50px;
  position: absolute;
  top: 50%;
  left: 30px;
  cursor: pointer;
`
const IconRight = styled(AiOutlineDoubleRight)`
  font-size: 50px;
  position: absolute;
  top: 50%;
  right: 30px;
  cursor: pointer;
`

interface Props {
  title: string
}

const AboutLayout: React.FC<Props> = ({ children, title }) => {
  const history = useHistory()

  const TogglePage = (title: string) => {
    if (title === "Profile") {
      return <IconRight onClick={() => history.push("/about/skill")} />
    } else if (title === "Skill") {
      return (
        <>
          <IconLeft onClick={() => history.push("/about/profile")} />
          <IconRight onClick={() => history.push("/about/contact")} />
        </>
      )
    } else if (title === "Contact") {
      return <IconLeft onClick={() => history.push("/about/skill")} />
    }
  }

  return (
    <Layout>
      <DivStyle>
        <H1Title>{title}</H1Title>
        <DivContent>
          {children}
          {TogglePage(title)}
        </DivContent>
      </DivStyle>
    </Layout>
  )
}

export default AboutLayout
