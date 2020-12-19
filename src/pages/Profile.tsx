import React from "react";
import styled from "styled-components";

import AboutLayout from "components/AboutLayout";

const DivStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 100%;
  height: 100%;
`;

const Profile = () => {
  return (
    <AboutLayout title="Profile">
      <DivStyle>
        <h1>Profile</h1>
      </DivStyle>
    </AboutLayout>
  );
};

export default Profile;
