import React from "react";
import styled, { keyframes } from "styled-components";

import AboutLayout from "components/AboutLayout";

import { contactData } from "data/ContactData";

const blinkTyping = keyframes`
    0%, 100%{
      border-color: transparent;
    }
    50% {
      border-color: white;
    }
`;

const DivStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  width: 100%;
  height: 100%;
`;
const DivContact = styled.div`
  letter-spacing: 1px;
  width: 700px;
  border: 1px solid rgb(60, 173, 212);
`;
const DivConsole = styled.div`
  width: 700px;
  height: 35px;
  background-color: rgb(60, 173, 212);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const H1Console = styled.h1`
  margin: 0 15px;
  color: black;
`;
const DivTool = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100px;
`;
const DivBorder = styled.div`
  padding: 5px 10px;
  border-bottom: 1px solid rgb(50, 50, 50);
`;
const PInput = styled.p`
  font-size: 18px;
  padding: 8px 0;
  color: rgb(255, 255, 255);
  font-weight: 300;
`;
const POutput = styled.p`
  font-size: 20px;
  padding: 8px 0;
  color: rgb(60, 173, 212);
`;
const DivBlinkInput = styled(PInput)`
  display: flex;
  align-items: center;
`;
const DivBlink = styled.div`
  margin: 0 7px;
  width: 13px;
  height: 15px;
  border-bottom: 3px solid white;
  animation: ${blinkTyping} 1s step-start infinite;
`;

const Contact = () => {
  return (
    <AboutLayout title="Contact">
      <DivStyle>
        <DivConsole>
          <H1Console>Console</H1Console>
          <DivTool>
            <p>—</p>
            <p>◻</p>
            <p>⨉</p>
          </DivTool>
        </DivConsole>
        <DivContact>
          {contactData.map((v) => (
            <DivBorder key={v.input}>
              <PInput>{v.input}</PInput>
              <POutput>{v.output}</POutput>
            </DivBorder>
          ))}
          <DivBorder>
            <DivBlinkInput>
              {"> "} <DivBlink />
            </DivBlinkInput>
          </DivBorder>
        </DivContact>
      </DivStyle>
    </AboutLayout>
  );
};

export default Contact;
