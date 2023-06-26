import {
  Container,
  Title,
  SignInContainer,
  InputItems,
  InputItem,
  InputTitle,
  Input,
  Button,
  SignUpContainer,
  SignUpDesc,
} from "@styles/SignIn";

const NotSignedIn = () => {
  return (
    <Container>
      <Title>만창 Picrew</Title>

      <SignInContainer>
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
      </SignInContainer>

      <SignUpContainer>
        <SignUpDesc>아직 계정이 없다면</SignUpDesc>
        <Button>이메일로 가입하기</Button>
      </SignUpContainer>
    </Container>
  );
};

export default NotSignedIn;
