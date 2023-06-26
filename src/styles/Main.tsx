import styled from "styled-components";
import { colors } from "@styles/colors";

const Conatiner = styled.div`
  display: flex;

  width: 90vw;
  max-width: 1200px;

  border: 2px solid ${colors.primary.standard};
  border-radius: 2rem;
`;

const NavBar = styled.div`
  display: flex;
  flex-direction: column;

  background: ${colors.primary.veryDark};
  width: 15rem;
  padding: 1.6rem 2rem;

  border-radius: 2rem;

  @media (max-width: 1200px) {
    display: none;
  }
`;
const Logo = styled.h1`
  color: ${colors.text.light};
  font-size: 2rem;
  margin-bottom: 1rem;

  border: 1px solid white;
  border-radius: 1rem;
`;
const ProfileContainer = styled.div`
  width: 100%;
  height: 10rem;

  border: 1px solid white;
  border-radius: 1rem;
`;
const LinkItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  padding: 2rem 0 0 0;
`;
const LinkItem = styled.button`
  width: 100%;
  padding: 0.6rem 1.2rem;
  background: transparent;

  border: 1px solid white;
  border-radius: 1rem;

  color: white;
`;

const Body = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 1.4rem;

  border-radius: 2rem;
`;
const SessionCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.2rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
`;
const SessionCard = styled.button`
  display: flex;
  justify-content: space-between;
  gap: 0.4rem;

  background: ${({ backgroundColor }) => backgroundColor};

  height: 10rem;
  padding: 1rem 1rem;
  border: 2px solid ${({ backgroundColor }) => backgroundColor};
  border-radius: 2rem;
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
  color: ${colors.text.light};
  font-size: 1.2rem;
  font-weight: 400;
  text-align: start;
`;
const SessionCardCnt = styled.p`
  color: ${colors.text.light};
  font-size: 1.6rem;
`;
const NavigateIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1rem;

  border: 1px solid #fff;
  border-radius: 100%;
`;

const BottomSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const GameCardContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 1rem;
`;
const GameCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  background: ${colors.primary.dark};

  padding: 1.4rem 1rem;
  border: none;
  border-radius: 2rem;
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
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  background: ${colors.primary.veryveryDark};

  padding: 1.4rem 1rem;
  border: none;
  border-radius: 2rem;
  outline: none;
`;

export {
  Conatiner,
  NavBar,
  Logo,
  ProfileContainer,
  LinkItems,
  LinkItem,
  Body,
  SessionCardContainer,
  SessionCard,
  SessionCardInfo,
  SessionCardTitle,
  SessionCardCnt,
  NavigateIconWrapper,
  BottomSection,
  GameCardContainer,
  GameCard,
  GameCardTitle,
  FriendContainer,
};
