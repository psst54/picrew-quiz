import react from "react";

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
  MiddleSection,
  GameCardContainer,
  GameCard,
  GameCardTitle,
  FriendContainer,
  TmpP,
  BottomSection,
} from "@styles/Main";
import { colors } from "@/styles/colors";

import NavigateIcon from "./NavigateIcon";

const Main = () => {
  function getCurrentDimension() {
    return window?.innerWidth;
  }

  const [screenWidth, setScreenWidth] = react.useState(getCurrentDimension());

  react.useEffect(() => {
    const updateDimension = () => {
      setScreenWidth(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenWidth]);

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
              <NavigateIcon
                size={screenWidth > 600 ? "3rem" : "1rem"}
                color={"#fff"}
              />
            </NavigateIconWrapper>
          </SessionCard>

          <SessionCard backgroundColor={colors.primary.veryDark}>
            <SessionCardInfo>
              <SessionCardTitle>문제 맞추기</SessionCardTitle>
              <SessionCardCnt>1개</SessionCardCnt>
            </SessionCardInfo>

            <NavigateIconWrapper>
              <NavigateIcon
                size={screenWidth > 600 ? "3rem" : "1rem"}
                color={"#fff"}
              />
            </NavigateIconWrapper>
          </SessionCard>

          <SessionCard backgroundColor={colors.primary.dark}>
            <SessionCardInfo>
              <SessionCardTitle>결과 보기</SessionCardTitle>
              <SessionCardCnt>1개</SessionCardCnt>
            </SessionCardInfo>

            <NavigateIconWrapper>
              <NavigateIcon
                size={screenWidth > 600 ? "3rem" : "1rem"}
                color={"#fff"}
              />
            </NavigateIconWrapper>
          </SessionCard>
        </SessionCardContainer>

        <MiddleSection>
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

          <FriendContainer>
            <TmpP>
              준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!
            </TmpP>
          </FriendContainer>
        </MiddleSection>

        <BottomSection>준비중!</BottomSection>
      </Body>
    </Conatiner>
  );
};

export default Main;
