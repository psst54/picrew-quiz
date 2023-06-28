import styled from "styled-components";
import { colors } from "@styles/colors";

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
  gap: 0.4rem;

  color: ${colors.text.light};
  font-size: 2rem;
  font-weight: 400;
`;
const Emoji = styled.img`
  width: 1.6rem;
  height: 1.6rem;
  margin-right: 0.4rem;
`;

export { Body, Title, Emoji };
