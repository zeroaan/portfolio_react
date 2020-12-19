import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";

import LOGO from "assets/images/navbar/logo.png";
import GITHUB from "assets/images/navbar/github.png";

const DivStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  background-color: black;
  height: 60px;
  user-select: none;
  z-index: 10;
`;
const LinkStyled = styled(Link)<{ $current: boolean }>`
  padding: 12px 30px;
  font-size: 18px;
  text-align: center;
  opacity: ${(props) => (props.$current ? 1 : 0.5)};
  border-bottom: 5px solid ${(props) => (props.$current ? "rgb(60, 173, 212)" : "transparent")};
  transition: all 0.3s linear;
  &:hover {
    opacity: 1;
  }
`;
const ImgLogo = styled.img`
  height: 40px;
  margin: 0 30px;
  pointer-events: none;
`;
const AGithub = styled.a`
  margin: 0 30px 0 55px;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  opacity: 0.8;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.1);
    opacity: 1;
  }
`;
const ImgGithub = styled.img`
  height: 40px;
  pointer-events: none;
`;

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <>
      <DivStyled>
        <ImgLogo src={LOGO} alt="LOGO" />
        <div>
          <LinkStyled to="/" $current={pathname === "/"}>
            Home
          </LinkStyled>
          <LinkStyled to="/about" $current={pathname === "/about"}>
            About
          </LinkStyled>
          <LinkStyled to="/project" $current={pathname === "/project"}>
            Project
          </LinkStyled>
        </div>
        <AGithub href="https://github.com/zeroaan" target="_blank">
          <ImgGithub src={GITHUB} alt="GITHUB" />
        </AGithub>
      </DivStyled>
    </>
  );
};

export default Navbar;
