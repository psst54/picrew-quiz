import react from "react";
import Link from "next/link";

import Frame from "@components/Frame";
import {
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

import NavigateIcon from "@assets/NavigateIcon";

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
    <Frame>
      <Body>
        <SessionCardContainer>
          <SessionCard backgroundColor={colors.primary.veryveryDark}>
            <SessionCardInfo>
              <SessionCardTitle>이미지 올리기</SessionCardTitle>
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
            <Link
              href="/session/makeSession"
              style={{ textDecoration: "none" }}
            >
              <GameCard>
                <GameCardTitle>세션 만들기</GameCardTitle>
                <NavigateIcon size={"2rem"} color={"#fff"} />
              </GameCard>
            </Link>

            <Link
              href="/session/makeSession"
              style={{ textDecoration: "none" }}
            >
              <GameCard>
                <GameCardTitle>세션 들어가기</GameCardTitle>
                <NavigateIcon size={"2rem"} color={"#fff"} />
              </GameCard>
            </Link>
          </GameCardContainer>

          <FriendContainer>
            <TmpP>
              준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!준비중!
            </TmpP>
          </FriendContainer>
        </MiddleSection>

        <BottomSection>준비중!</BottomSection>
      </Body>
    </Frame>
  );
};

export default Main;
