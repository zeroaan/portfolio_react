import React from "react";
import styled from "styled-components";

import AboutLayout from "components/layout/AboutLayout";

import { ProfileData } from "data/ProfileData";

const DivStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(220, 220, 220);
  margin: auto;
  width: 80%;
  height: 100%;
`;
const H1WhoAmI = styled.h1`
  flex: 1;
  font-size: 35px;
`;
const DivProfile = styled.div`
  flex: 2;
  font-family: "Noto Sans KR", sans-serif;
`;
const DivData = styled.div`
  margin: 25px 0;
`;
const DivTitle = styled.div`
  display: flex;
  align-items: flex-end;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid rgb(130, 130, 130);
`;
const PId = styled.p`
  font-size: 28px;
  margin-right: 16px;
`;
const PTitle = styled.p`
  font-size: 22px;
`;
const PDesc = styled.p`
  font-size: 17px;
  word-spacing: 1px;
  line-height: 25px;
`;

const Profile = () => {
  return (
    <AboutLayout title="Profile">
      <DivStyle>
        <H1WhoAmI>WHO AM I</H1WhoAmI>
        <DivProfile>
          {ProfileData.map((v) => (
            <DivData key={v.id}>
              <DivTitle>
                <PId>{v.id}</PId>
                <PTitle>{v.title}</PTitle>
              </DivTitle>
              <PDesc>{v.desc}</PDesc>
            </DivData>
          ))}
        </DivProfile>
      </DivStyle>
    </AboutLayout>
  );
};

export default Profile;
