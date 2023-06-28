"use client";

import react from "react";

import styled from "styled-components";
import { colors } from "@styles/colors";

import Frame from "@components/Frame";
import { Background } from "@styles/styles";
import { Body, Title, Emoji } from "@styles/session/styles";
import {
  CheckPasswordContainer,
  CheckPasswordItem,
} from "@styles/signUp/SignUp";

import MakeSessionModal from "./MakeSessionModal";
import CheckIcon from "@assets/CheckIcon";
import XIcon from "@assets//XIcon";

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
  const [password, setPassword] = react.useState("");

  const checkPasswordMinLength = react.useCallback(() => {
    return password.length >= 4;
  }, [password]);

  const checkPasswordMaxLength = react.useCallback(() => {
    return password !== "" && password.length <= 20;
  }, [password]);

  return (
    <Background>
      <Frame>
        <Body>
          <Title>
            <Emoji src={"/sparkles_twitter.png"} />
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

            <InputItem>
              <InputTitle>비밀번호</InputTitle>
              <Input
                value={password}
                onChange={(event: react.ChangeEvent<HTMLInputElement>) => {
                  setPassword(event.target.value);
                }}
              />
            </InputItem>

            <CheckPasswordContainer>
              <CheckPasswordItem isValid={checkPasswordMinLength()}>
                {checkPasswordMinLength() ? (
                  <CheckIcon size={"1rem"} color={colors.valid} />
                ) : (
                  <XIcon size={"1rem"} color={colors.invalid} />
                )}
                4자리 이상
              </CheckPasswordItem>
              <CheckPasswordItem isValid={checkPasswordMaxLength()}>
                {checkPasswordMaxLength() ? (
                  <CheckIcon size={"1rem"} color={colors.valid} />
                ) : (
                  <XIcon size={"1rem"} color={colors.invalid} />
                )}
                20자리 이하
              </CheckPasswordItem>
            </CheckPasswordContainer>
          </InputItems>

          <MakeSessionModal
            sessionName={sessionName}
            picrewLink={picrewLink}
            password={password}
            checkPasswordMinLength={checkPasswordMinLength}
            checkPasswordMaxLength={checkPasswordMaxLength}
          />
        </Body>
      </Frame>
    </Background>
  );
};

export default MakeSession;
