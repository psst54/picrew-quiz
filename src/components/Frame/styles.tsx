import styled from "styled-components";
import { colors } from "@styles/colors";

const Container = styled.div`
  display: flex;

  width: 90vw;
  max-width: 1200px;

  border: 2px solid ${colors.primary.standard};
  border-radius: 2rem;
`;

const NavBar = styled.div`
  flex-shrink: 0;
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

export { Container, NavBar, Logo, ProfileContainer, LinkItems, LinkItem };
