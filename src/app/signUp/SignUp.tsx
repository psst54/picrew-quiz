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

const SignUp = ({ supabase }) => {
  const signUp = async () => {
    const { data, error } = await supabase.auth.signUp({
      email: "example@email.com",
      password: "example-password",
    });

    console.log(data);
    console.log(error);
  };

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

          <InputItem>
            <InputTitle>비밀번호 확인</InputTitle>
            <Input />
          </InputItem>
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
        <Button>로그인하기</Button>
      </SecondaryContainer>
    </Container>
  );
};

export default SignUp;
