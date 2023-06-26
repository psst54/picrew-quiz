"use client";

import Frame from "@components/Frame";
import { Background } from "@styles/styles";

import styled from "styled-components";
import { colors } from "@styles/colors";

const Title = styled.h1`
  color: ${colors.text.light};
  font-size: 1.4rem;
  font-weight: 400;
`;

const MakeSession = () => {
  return (
    <Background>
      <Frame>
        <div>
          <Title>세션 만들기</Title>
          <h2>세션 이름</h2>
          <h2>픽크루 링크</h2>
        </div>
      </Frame>
    </Background>
  );
};

export default MakeSession;
