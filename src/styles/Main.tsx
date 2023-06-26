import styled from "styled-components";
import { colors } from "@styles/colors";

const Body = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  padding: 1.4rem;
`;
const SessionCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.6rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
`;
const SessionCard = styled.button`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.4rem;

  background: ${({ backgroundColor }) => backgroundColor};

  height: 10rem;
  padding: 1rem 1rem;
  border: 2px solid ${({ backgroundColor }) => backgroundColor};
  border-radius: 1.6rem;
  outline: none;

  cursor: pointer;

  &:hover {
    border: 2px solid ${colors.primary.standard};
  }

  @media (max-width: 600px) {
    height: 8rem;
  }
`;
const SessionCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  height: 100%;
`;
const SessionCardTitle = styled.h2`
  color: ${colors.text.littleLight};
  font-size: 1.2rem;
  font-weight: 200;
  text-align: start;
  word-break: keep-all;
`;
const SessionCardCnt = styled.p`
  color: ${colors.text.light};
  font-size: 1.8rem;
  font-weight: 500;
`;
const NavigateIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1rem;

  border: 1px solid #fff;
  border-radius: 100%;
`;

const MiddleSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.6rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const GameCardContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 0.6rem;
`;
const GameCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  background: ${colors.primary.dark};

  height: 5rem;
  padding: 0 1rem;
  border: none;
  border-radius: 1.6rem;
  outline: none;

  cursor: pointer;

  &:hover {
    background: ${colors.primary.standard};
  }
`;
const GameCardTitle = styled.h2`
  color: ${colors.text.light};
  font-size: 1.2rem;
  font-weight: 400;
`;

const FriendContainer = styled.div`
  display: flex;
  gap: 1rem;

  background: ${colors.primary.veryveryDark};

  height: 11rem;
  padding: 1rem 1rem;

  border-radius: 1.6rem;
`;
const TmpP = styled.p`
  overflow-y: scroll;
  padding-right: 1rem;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background: ${colors.primary.standard};
  }
`;

const BottomSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  background: ${colors.primary.veryveryDark};

  padding: 1.4rem 1rem;
  height: 12rem;

  border: none;
  border-radius: 1.6rem;
  outline: none;
`;

export {
  Body,
  SessionCardContainer,
  SessionCard,
  SessionCardInfo,
  SessionCardTitle,
  SessionCardCnt,
  NavigateIconWrapper,
  MiddleSection,
  GameCardContainer,
  GameCard,
  GameCardTitle,
  FriendContainer,
  TmpP,
  BottomSection,
};
