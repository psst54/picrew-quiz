import {
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
} from "@styles/Main";
import { colors } from "@/styles/colors";

import NavigateIcon from "./NavigateIcon";

const Main = () => {
  return (
    <Conatiner>
      <NavBar>
        <Logo>Logo</Logo>
        <ProfileContainer>profile</ProfileContainer>

        <LinkItems>
          <LinkItem>링크1</LinkItem>
          <LinkItem>링크2</LinkItem>
          <LinkItem>링크3</LinkItem>
        </LinkItems>
      </NavBar>

      <Body>
        <SessionCardContainer>
          <SessionCard backgroundColor={colors.primary.veryveryDark}>
            <SessionCardInfo>
              <SessionCardTitle>픽크루 만들기</SessionCardTitle>
              <SessionCardCnt>1개</SessionCardCnt>
            </SessionCardInfo>

            <NavigateIconWrapper>
              <NavigateIcon size={"3rem"} color={"#fff"} />
            </NavigateIconWrapper>
          </SessionCard>

          <SessionCard backgroundColor={colors.primary.veryDark}>
            <SessionCardInfo>
              <SessionCardTitle>문제 맞추기</SessionCardTitle>
              <SessionCardCnt>1개</SessionCardCnt>
            </SessionCardInfo>

            <NavigateIconWrapper>
              <NavigateIcon size={"3rem"} color={"#fff"} />
            </NavigateIconWrapper>
          </SessionCard>

          <SessionCard backgroundColor={colors.primary.dark}>
            <SessionCardInfo>
              <SessionCardTitle>결과 보기</SessionCardTitle>
              <SessionCardCnt>1개</SessionCardCnt>
            </SessionCardInfo>

            <NavigateIconWrapper>
              <NavigateIcon size={"3rem"} color={"#fff"} />
            </NavigateIconWrapper>
          </SessionCard>
        </SessionCardContainer>

        <BottomSection>
          <GameCardContainer>
            <GameCard>
              <GameCardTitle>세션 만들기</GameCardTitle>
              <NavigateIcon size={"2rem"} color={"#fff"} />
            </GameCard>
            <GameCard>
              <GameCardTitle>세션 들어가기</GameCardTitle>
              <NavigateIcon size={"2rem"} color={"#fff"} />
            </GameCard>
          </GameCardContainer>

          <FriendContainer>준비중!</FriendContainer>
        </BottomSection>
      </Body>
    </Conatiner>
  );
};

export default Main;
