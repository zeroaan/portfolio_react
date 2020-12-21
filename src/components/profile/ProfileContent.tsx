import React from "react";
import styled from "styled-components";

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

interface Props {
  id: number;
  title: string;
  desc: string;
}

const ProfileContent: React.FC<Props> = ({ id, title, desc }) => {
  return (
    <DivData>
      <DivTitle>
        <PId>{id}</PId>
        <PTitle>{title}</PTitle>
      </DivTitle>
      <PDesc>{desc}</PDesc>
    </DivData>
  );
};

export default ProfileContent;
