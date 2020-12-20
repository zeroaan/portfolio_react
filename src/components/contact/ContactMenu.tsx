import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const DivMenu = styled.div`
  width: 700px;
  height: 35px;
  background-color: rgb(60, 173, 212);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const H1Menu = styled.h1`
  font-size: 18px;
  margin: 0 15px;
  color: black;
`;
const DivMenuTool = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100px;
  height: 100%;
  color: rgb(255, 255, 255);
`;
const PMenu = styled.p`
  width: 35px;
  height: 100%;
  line-height: 35px;
  text-align: center;
`;

const ContactMenu = () => {
  return (
    <DivMenu>
      <H1Menu>Console</H1Menu>
      <DivMenuTool>
        <PMenu>—</PMenu>
        <PMenu>◻</PMenu>
        <Link to="/about">
          <PMenu>⨉</PMenu>
        </Link>
      </DivMenuTool>
    </DivMenu>
  );
};

export default ContactMenu;
