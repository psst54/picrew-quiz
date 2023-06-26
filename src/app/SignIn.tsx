import Link from "next/link";

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

const NotSignedIn = () => {
  return (
    <Container>
      <Title>만창 Picrew</Title>

      <PrimaryContainer>
        <InputItems>
          <InputItem>
            <InputTitle>이메일</InputTitle>
            <Input />
          </InputItem>

          <InputItem>
            <InputTitle>비밀번호</InputTitle>
            <Input />
          </InputItem>
        </InputItems>

        <Button isPrimary>로그인하기</Button>
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

export default NotSignedIn;
