import react from "react";
import Link from "next/link";

import { Database } from "@libs/types";
import { colors } from "@styles/colors";
import {
  Container,
  Title,
  PrimaryContainer,
  SecondaryContainer,
  SignUpDesc,
  InputItems,
  InputItem,
  InputTitle,
  Input,
  Button,
} from "@styles/styles";
import {
  CheckPasswordContainer,
  CheckPasswordItem,
} from "@styles/signUp/SignUp";

import CheckIcon from "./CheckIcon";
import XIcon from "./XIcon";

const SignUp = ({ supabase }: { supabase: Database }) => {
  const [email, setEmail] = react.useState("");
  const [password, setPassword] = react.useState("");
  const [confirmPassword, setConfirmPassword] = react.useState("");

  const checkEmail = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const checkPasswordLength = () => {
    return password !== "" && password.length > 6;
  };

  const checkConfirmPassword = () => {
    return (
      password !== "" && confirmPassword !== "" && password === confirmPassword
    );
  };

  const signUp = async () => {
    if (!checkEmail()) {
      alert("이메일 주소가 올바른지 확인해주세요");
      return;
    }

    if (!checkPasswordLength()) {
      alert("비밀번호는 6자리 이상으로 입력해주세요");
      return;
    }

    if (!checkConfirmPassword()) {
      alert("비밀번호가 일치하지 않습니다");
      return;
    }

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) throw new Error("회원가입 실패");
    } catch (e) {
      alert("회원가입에 실패했습니다.\n잠시 뒤에 다시 시도해주세요");
    }
  };

  return (
    <Container>
      <Title>만창 Picrew</Title>

      <PrimaryContainer>
        <InputItems>
          <InputItem>
            <InputTitle>이메일</InputTitle>
            <Input
              value={email}
              onChange={(event: react.ChangeEvent<HTMLInputElement>) => {
                setEmail(event.target.value);
              }}
            />
          </InputItem>

          <InputItem>
            <InputTitle>비밀번호</InputTitle>
            <Input
              value={password}
              type="password"
              onChange={(event: react.ChangeEvent<HTMLInputElement>) => {
                setPassword(event.target.value);
              }}
            />
          </InputItem>

          <InputItem>
            <InputTitle>비밀번호 확인</InputTitle>
            <Input
              value={confirmPassword}
              type="password"
              onChange={(event: react.ChangeEvent<HTMLInputElement>) => {
                setConfirmPassword(event.target.value);
              }}
            />
          </InputItem>

          <CheckPasswordContainer>
            <CheckPasswordItem isValid={checkPasswordLength()}>
              {checkPasswordLength() ? (
                <CheckIcon size={"1rem"} color={colors.valid} />
              ) : (
                <XIcon size={"1rem"} color={colors.invalid} />
              )}
              6자리 이상
            </CheckPasswordItem>
            <CheckPasswordItem isValid={checkConfirmPassword()}>
              {checkConfirmPassword() ? (
                <CheckIcon size={"1rem"} color={colors.valid} />
              ) : (
                <XIcon size={"1rem"} color={colors.invalid} />
              )}
              비밀번호 일치함
            </CheckPasswordItem>
          </CheckPasswordContainer>
        </InputItems>

        <Button
          isPrimary
          onClick={() => {
            signUp();
          }}
        >
          회원가입하기
        </Button>
      </PrimaryContainer>

      <SecondaryContainer>
        <SignUpDesc>이미 계정이 있다면</SignUpDesc>
        <Link href="/" style={{ width: "100%" }}>
          <Button>로그인하기</Button>
        </Link>
      </SecondaryContainer>
    </Container>
  );
};

export default SignUp;
