"use client";

import react from "react";

import Frame from "@components/Frame";
import { Background } from "@styles/styles";

import styled from "styled-components";
import { colors } from "@styles/colors";
import MakeSessionModal from "./MakeSessionModal";

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 100%;
  padding: 3rem 4rem;

  @media (max-width: 600px) {
    padding: 3rem 2rem;
  }
`;

const Title = styled.h1`
  display: flex;
  align-items: center;

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
  max-width: 100%;
  min-width: 16rem;
  padding: 0.4rem 0;
  background: transparent;

  border: none;
  border-bottom: 2px solid ${colors.primary.standard};
  outline: none;

  color: ${colors.text.light};
`;

const MakeSession = () => {
  const [sessionName, setSessionName] = react.useState("");
  const [picrewLink, setPicrewLink] = react.useState("");

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
              <Input
                value={sessionName}
                onChange={(event: react.ChangeEvent<HTMLInputElement>) => {
                  setSessionName(event.target.value);
                }}
              />
            </InputItem>

            <InputItem>
              <InputTitle>픽크루 링크</InputTitle>
              <Input
                value={picrewLink}
                onChange={(event: react.ChangeEvent<HTMLInputElement>) => {
                  setPicrewLink(event.target.value);
                }}
              />
            </InputItem>
          </InputItems>

          <MakeSessionModal sessionName={sessionName} picrewLink={picrewLink} />
        </Body>
      </Frame>
    </Background>
  );
};

export default MakeSession;
