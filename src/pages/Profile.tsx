import React from "react";
import styled from "styled-components";

import AboutLayout from "components/layout/AboutLayout";
import ProfileContent from "components/profile/ProfileContent";

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

const Profile = () => {
  return (
    <AboutLayout title="Profile">
      <DivStyle>
        <H1WhoAmI>WHO AM I</H1WhoAmI>
        <DivProfile>
          {ProfileData.map((v) => (
            <ProfileContent key={v.id} id={v.id} title={v.title} desc={v.desc} />
          ))}
        </DivProfile>
      </DivStyle>
    </AboutLayout>
  );
};

export default Profile;
