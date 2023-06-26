"use client";

import Frame from "@components/Frame";
import { Background } from "@styles/styles";

import styled from "styled-components";
import { colors } from "@styles/colors";
import { Button } from "@styles/styles";

const Body = styled.div`
  width: 100%;
  padding: 3rem 4rem;
`;

const Title = styled.h1`
  display: flex;
  align-items: center;

  margin-bottom: 2rem;

  color: ${colors.text.light};
  font-size: 1.6rem;
  font-weight: 800;
`;
const Emoji = styled.img`
  width: 1.6rem;
  height: 1.6rem;
  margin-right: 0.4rem;
`;
const InputItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const InputItem = styled.div`
  display: flex;
  flex-direction: column;
`;
const InputTitle = styled.h2`
  color: ${colors.text.light};
  font-size: 1.2rem;
  font-weight: 400;
`;
const Input = styled.input`
  width: 80%;
  max-width: 32rem;
  min-width: 16rem;
  padding: 0.4rem 0;
  background: transparent;

  border: none;
  border-bottom: 2px solid ${colors.primary.standard};
  outline: none;

  color: ${colors.text.light};
`;

const SmallButton = styled(Button)`
  width: auto;
  padding: 0.8rem 4rem;
  margin-top: 6rem;
`;

const MakeSession = () => {
  return (
    <Background>
      <Frame>
        <Body>
          <Title>
            <Emoji src={"sparkles_twitter.png"} />
            새로운 세션 만들기
          </Title>

          <InputItems>
            <InputItem>
              <InputTitle>세션 이름</InputTitle>
              <Input />
            </InputItem>

            <InputItem>
              <InputTitle>픽크루 링크</InputTitle>
              <Input />
            </InputItem>
          </InputItems>

          <SmallButton
            isPrimary
            onClick={() => {
              console.log("[debug]", "make session");
            }}
          >
            세션 만들기
          </SmallButton>

          {/* <Modal /> */}
        </Body>
      </Frame>
    </Background>
  );
};

export default MakeSession;
