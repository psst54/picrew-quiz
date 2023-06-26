import styled from "styled-components";
import { colors } from "@styles/colors";

const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 100vh;
  padding: 2rem 1rem;

  background: ${colors.background};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;
`;

const Title = styled.h1`
  color: ${colors.primary.standard};
  font-size: 3rem;
  margin-bottom: 3rem;
`;

const PrimaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 90vw;
  max-width: 26rem;
  padding: 2.4rem 2rem;

  border: 1px solid ${colors.primary.standard};
  border-radius: 1rem;
`;
const SecondaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 90vw;
  max-width: 26rem;
  padding: 2rem;
`;
const SignUpDesc = styled.p`
  margin-bottom: 0.4rem;

  color: ${colors.primary.standard};
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
  border-bottom: 2px solid ${colors.primary.standard};
  outline: none;

  color: ${colors.text.light};
`;
const Button = styled.button`
  width: 100%;
  padding: 0.8rem;

  border: none;

  border: ${({ isPrimary }) =>
    isPrimary ? "none" : `1px solid ${colors.primary.standard}`};
  border-radius: 0.8rem;

  background: ${({ isPrimary }) =>
    isPrimary ? colors.primary.standard : "transparent"};

  color: ${colors.text.light};
  font-size: 1.2rem;
  font-weight: 500;

  cursor: pointer;
`;

export {
  Background,
  Title,
  PrimaryContainer,
  SecondaryContainer,
  SignUpDesc,
  Container,
  InputItems,
  InputItem,
  InputTitle,
  Input,
  Button,
};
