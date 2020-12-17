import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";

const DivStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: black;
  height: 60px;
`;
const LinkStyled = styled(Link)<{ $current: boolean }>`
  padding: 0 30px;
  font-size: 18px;
  text-align: center;
  height: 100%;
  line-height: 60px;
  opacity: ${(props) => (props.$current ? 1 : 0.6)};
  border-bottom: 5px solid ${(props) => (props.$current ? "rgb(60, 173, 212)" : "transparent")};
  transition: all 0.3s linear;
  &:hover {
    opacity: 1;
  }
`;

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <>
      <DivStyled>
        <LinkStyled to="/" $current={pathname === "/"}>
          Home
        </LinkStyled>
        <LinkStyled to="/about" $current={pathname === "/about"}>
          About
        </LinkStyled>
        <LinkStyled to="/project" $current={pathname === "/project"}>
          Project
        </LinkStyled>
      </DivStyled>
    </>
  );
};

export default Navbar;
