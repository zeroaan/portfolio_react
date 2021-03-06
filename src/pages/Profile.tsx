import React from "react"
import styled from "styled-components"

import AboutLayout from "components/layout/AboutLayout"
import ProfileMe from "components/profile/ProfileMe"
import ProfileContent from "components/profile/ProfileContent"

import { ProfileData } from "data/ProfileData"

const DivStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(220, 220, 220);
  margin: auto;
  width: 80%;
  height: 100%;
`
const DivProfile = styled.div`
  flex: 2;
  font-family: "Noto Sans KR", sans-serif;
`

const Profile = () => {
  return (
    <AboutLayout title="Profile">
      <DivStyle>
        <ProfileMe />

        <DivProfile>
          {ProfileData.map((v) => (
            <ProfileContent key={v.id} title={v.title} desc={v.desc} />
          ))}
        </DivProfile>
      </DivStyle>
    </AboutLayout>
  )
}

export default Profile
