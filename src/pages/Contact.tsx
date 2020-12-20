import React from "react";
import styled, { keyframes } from "styled-components";

import AboutLayout from "components/AboutLayout";
import ContactMenu from "components/contact/ContactMenu";
import ContactConsole from "components/contact/ContactConsole";

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
  width: 100%;
  height: 100%;
`;
const DivConsole = styled.div`
  letter-spacing: 1px;
  width: 700px;
  border: 1px solid rgb(60, 173, 212);
`;
const DivBlinkInput = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  padding: 12px 12px;
  color: rgb(255, 255, 255);
  font-weight: 300;
`;
const DivBlink = styled.div`
  margin: 0 8px;
  width: 12px;
  height: 15px;
  border-bottom: 3px solid white;
  animation: ${blinkTyping} 1s step-start infinite;
`;

const Contact = () => {
  return (
    <AboutLayout title="Contact">
      <DivStyle>
        <ContactMenu />
        <DivConsole>
          <ContactConsole />
          <DivBlinkInput>
            {"> "} <DivBlink />
          </DivBlinkInput>
        </DivConsole>
      </DivStyle>
    </AboutLayout>
  );
};

export default Contact;
