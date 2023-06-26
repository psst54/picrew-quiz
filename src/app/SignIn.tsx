import react from "react";
import Link from "next/link";
import { useAppDispatch } from "@/redux/hooks";
import { setSignIn } from "@features/userSlice";

import { Database } from "@libs/types";
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

const SignIn = ({ supabase }: { supabase: Database }) => {
  const dispatch = useAppDispatch();

  const [email, setEmail] = react.useState("");
  const [password, setPassword] = react.useState("");

  const signIn = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw new Error("로그인 실패");

      dispatch(setSignIn(data.user.id));

      console.log("[debug]", data);
    } catch (e) {
      alert("로그인에 실패했습니다.\n잠시 뒤에 다시 시도해주세요");
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
        </InputItems>

        <Button
          isPrimary
          onClick={() => {
            signIn();
          }}
        >
          로그인하기
        </Button>
      </PrimaryContainer>

      <SecondaryContainer>
        <SignUpDesc>아직 계정이 없다면</SignUpDesc>
        <Link href="/signUp" style={{ width: "100%" }}>
          <Button>이메일로 가입하기</Button>
        </Link>
      </SecondaryContainer>
    </Container>
  );
};

export default SignIn;
