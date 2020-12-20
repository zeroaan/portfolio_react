import React from "react";
import styled from "styled-components";

import { contactData } from "data/ContactData";

const DivBorder = styled.div`
  padding: 5px 10px;
  border-bottom: 1px solid rgb(50, 50, 50);
`;
const PInput = styled.p`
  font-size: 18px;
  padding: 8px 2px;
  color: rgb(255, 255, 255);
  font-weight: 300;
`;
const POutput = styled.p`
  font-size: 20px;
  padding: 8px 0;
  color: rgb(60, 173, 212);
  user-select: text;
`;

const ContactConsole = () => {
  return (
    <>
      {contactData.map((v) => (
        <DivBorder key={v.input}>
          <PInput>{"> " + v.input}</PInput>
          {v.input === `zeroaan.github` ? (
            <a href="http://github.com/zeroaan" target="_blank" rel="noreferrer">
              <POutput>{"< " + v.output}</POutput>
            </a>
          ) : (
            <POutput>{"< " + v.output}</POutput>
          )}
        </DivBorder>
      ))}
    </>
  );
};

export default ContactConsole;
