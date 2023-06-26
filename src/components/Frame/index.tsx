import { ReactElement } from "react";
import {
  Container,
  NavBar,
  Logo,
  ProfileContainer,
  LinkItems,
  LinkItem,
} from "./styles";

const Frame = ({ children }: { children: ReactElement }) => {
  return (
    <Container>
      <NavBar>
        <Logo>Logo</Logo>
        <ProfileContainer>profile</ProfileContainer>

        <LinkItems>
          <LinkItem>링크1</LinkItem>
          <LinkItem>링크2</LinkItem>
          <LinkItem>링크3</LinkItem>
        </LinkItems>
      </NavBar>

      {children}
    </Container>
  );
};

export default Frame;
