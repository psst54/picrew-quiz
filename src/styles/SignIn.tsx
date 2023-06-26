import styled from "styled-components";
import { colors } from "@styles/colors";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
`;

const Title = styled.h1`
  color: ${colors.primary};
  font-size: 3rem;
  margin-bottom: 3rem;
`;

const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 90vw;
  max-width: 26rem;
  padding: 2.4rem 2rem;

  border: 1px solid ${colors.primary};
  border-radius: 1rem;
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
const InputTitle = styled.p`
  color: ${colors.text.light};
  font-size: 1.2rem;
`;
const Input = styled.input`
  width: 100%;
  padding: 0.4rem 0;
  background: transparent;

  border: none;
  border-bottom: 2px solid ${colors.primary};
  outline: none;

  color: ${colors.text.light};
`;
const Button = styled.button`
  width: 100%;
  padding: 0.8rem;

  border: none;

  border: ${({ isPrimary }) =>
    isPrimary ? "none" : `1px solid ${colors.primary}`};
  border-radius: 0.8rem;

  background: ${({ isPrimary }) =>
    isPrimary ? colors.primary : "transparent"};

  color: ${colors.text.light};
  font-size: 1.2rem;
  font-weight: 500;

  cursor: pointer;
`;

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 90vw;
  max-width: 26rem;
  padding: 2rem;
`;
const SignUpDesc = styled.p`
  margin-bottom: 0.4rem;

  color: ${colors.primary};
`;

export {
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
};
