"use client";

import react from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@supabase/supabase-js";
import { useAppSelector } from "@/redux/hooks";

import { colors } from "@styles/colors";
import { Database } from "@libs/types";

import Frame from "@components/Frame";
import { Background } from "@styles/styles";
import { Body, Header, Title, Emoji, Navigation } from "@styles/session/styles";
import ToastMessage from "@components/ToastMessage";
import ArrowRight from "./arrowRight";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
const supabase = createClient<Database>(supabaseUrl, supabaseKey);

import {
  InfoContainer,
  InfoItem,
  InfoText,
  ProgressContainer,
  ProgressItems,
  ProgressItem,
  Items,
  Item,
  CopiableItemField,
  ItemTitle,
  CopiableItemButton,
  CopiableItemTextWraper,
  CopiableItemTextContainer,
  CopiableItemText,
  PeopleContainer,
  PeopleName,
  StartGameButton,
} from "@styles/session/[slug]/styles";

const SessionPage = ({ params }: { params: { slug: string } }) => {
  const router = useRouter();
  const [sessionData, setSessionData] = react.useState(null);
  const [imageData, setImageData] = react.useState(null);
  const [isMaster, setIsMaster] = react.useState(false);
  const [toasts, setToasts] = react.useState([]);
  const userId = useAppSelector((state) => state.userReducer.id);

  const [isReadyToUpload, setIsReadyToUpload] = react.useState(false);
  const [isReadyToSolve, setIsReadyToSolve] = react.useState(false);

  const getSessionData = react.useCallback(async () => {
    try {
      const { data: supabaseSessionData, error: supabaseSessionError } =
        await supabase
          .from("gameSessions")
          .select(
            "session_id, made_by, picrew_link, session_name, password, people, progress"
          )
          .eq("session_id", params?.slug);

      if (supabaseSessionError) throw new Error();

      const data = supabaseSessionData[0];
      if (!data) return;

      setSessionData(data);

      if (data?.progress === "ready") setIsReadyToUpload(true);
    } catch (err) {}
  }, [params.slug]);

  const getImageData = react.useCallback(async () => {
    const { data: supabaseImageData, error: supabaseImageError } =
      await supabase.from("images").select().eq("session_id", params.slug);

    const data = supabaseImageData[0];
    if (!data) return;

    setImageData(data);

    if (
      sessionData?.progress === "upload" &&
      supabaseImageData.length === sessionData?.people.length
    )
      setIsReadyToSolve(true);
  }, [sessionData, params.slug]);

  const checkInfoExists = react.useCallback(() => {
    return isReadyToUpload || isReadyToSolve;
  }, [isReadyToUpload, isReadyToSolve]);

  const addToastMessage = ({ message }: { message: string }) => {
    const id = Date.now();
    const newToast = {
      id,
      message,
    };

    setToasts((oldToasts) => [...oldToasts, newToast]);
    setTimeout(() => {
      setToasts((oldToasts) => oldToasts.filter((toast) => toast.id !== id));
    }, 5000);
  };

  react.useEffect(() => {
    getSessionData();
  }, []);

  react.useEffect(() => {
    getImageData();
  }, [sessionData]);

  react.useEffect(() => {
    setIsMaster(sessionData?.made_by === userId);
  }, [sessionData, userId]);

  return (
    <Background>
      <Frame>
        <Body>
          <Header>
            <Title>
              <Emoji src={"/left_speech_bubble_twitter.png"} />
              {sessionData?.session_name}
            </Title>

            <Navigation
              onClick={() => {
                getSessionData();
              }}
            >
              새로고침
            </Navigation>
          </Header>

          {checkInfoExists() && (
            <InfoContainer>
              {isMaster && sessionData?.progress === "ready" && (
                <InfoItem>
                  <Emoji src={"/exclamation_mark_twitter.png"} />
                  <InfoText>
                    아래에서 참가자를 확인하고 시작하기 버튼을 눌러 게임을
                    시작해주세요
                  </InfoText>
                </InfoItem>
              )}

              {!isMaster && isReadyToUpload && (
                <InfoItem>
                  <Emoji src={"/exclamation_mark_twitter.png"} />
                  <InfoText>게임이 시작될 때까지 기다려주세요</InfoText>
                </InfoItem>
              )}

              {isMaster && isReadyToSolve && (
                <InfoItem>
                  <Emoji src={"/exclamation_mark_twitter.png"} />
                  <InfoText>
                    모든 참가자가 이미지를 제출했습니다. 다음 버튼을 눌러 다음
                    단계로 이동해주세요
                  </InfoText>
                </InfoItem>
              )}
            </InfoContainer>
          )}

          {isMaster && (
            <>
              {isReadyToUpload && (
                <StartGameButton
                  onClick={async () => {
                    try {
                      const { error } = await supabase
                        .from("gameSessions")
                        .update({ progress: "upload" })
                        .eq("session_id", params?.slug);

                      if (error) throw new Error();

                      setSessionData({ ...sessionData, progress: "upload" });

                      addToastMessage({
                        message: "시작합니다!",
                      });
                    } catch (e) {}
                  }}
                >
                  시작하기
                </StartGameButton>
              )}

              {isReadyToSolve && (
                <StartGameButton
                  onClick={async () => {
                    try {
                      const { error } = await supabase
                        .from("gameSessions")
                        .update({ progress: "solve" })
                        .eq("session_id", params?.slug);

                      if (error) throw new Error();

                      setSessionData({ ...sessionData, progress: "solve" });
                      setIsReadyToSolve(false);

                      addToastMessage({
                        message: "문제 맞추기 탭에서 문제를 풀어주세요!",
                      });
                    } catch (e) {}
                  }}
                >
                  다음으로
                </StartGameButton>
              )}
            </>
          )}

          <ProgressContainer>
            <ProgressItems>
              <ProgressItem
                isCurrent={sessionData?.progress === "upload"}
                disabled={sessionData?.progress !== "upload"}
                onClick={() => {
                  router.push(`/session/upload/${params?.slug}`);
                }}
              >
                이미지 올리기
              </ProgressItem>
              <ArrowRight size={"2rem"} color={colors.primary.standard} />
              <ProgressItem
                isCurrent={sessionData?.progress === "solve"}
                disabled={sessionData?.progress !== "solve"}
                onClick={() => {
                  router.push(`/session/solve/${params?.slug}`);
                }}
              >
                문제 맞추기
              </ProgressItem>
              <ArrowRight size={"2rem"} color={colors.primary.standard} />
              <ProgressItem
                isCurrent={sessionData?.progress === "result"}
                disabled={sessionData?.progress !== "result"}
              >
                결과 보기
              </ProgressItem>
            </ProgressItems>
          </ProgressContainer>
          <Items>
            <Item>
              <ItemTitle>비밀번호</ItemTitle>

              <CopiableItemField>
                <CopiableItemTextContainer>
                  <CopiableItemText>{sessionData?.password}</CopiableItemText>
                </CopiableItemTextContainer>
                <CopiableItemButton
                  onClick={() => {
                    navigator.clipboard
                      .writeText(sessionData?.picrew_link)
                      .then(() => {
                        addToastMessage({
                          message: "비밀번호가 복사되었습니다",
                        });
                      })
                      .catch((error) => {});
                  }}
                >
                  복사
                </CopiableItemButton>
              </CopiableItemField>
            </Item>

            <Item>
              <ItemTitle>픽크루 링크</ItemTitle>

              <CopiableItemField>
                <CopiableItemTextWraper
                  href={sessionData?.picrew_link}
                  target="_blank"
                >
                  <CopiableItemTextContainer>
                    <CopiableItemText>
                      {sessionData?.picrew_link}
                    </CopiableItemText>
                  </CopiableItemTextContainer>
                </CopiableItemTextWraper>
                <CopiableItemButton
                  onClick={() => {
                    navigator.clipboard
                      .writeText(sessionData?.picrew_link)
                      .then(() => {
                        addToastMessage({ message: "링크가 복사되었습니다" });
                      })
                      .catch((error) => {});
                  }}
                >
                  복사
                </CopiableItemButton>
              </CopiableItemField>
            </Item>

            <Item>
              <ItemTitle>참가자</ItemTitle>

              <PeopleContainer>
                {sessionData?.people?.map((person) => (
                  <PeopleName>{person}</PeopleName>
                ))}
              </PeopleContainer>
            </Item>
          </Items>

          <ToastMessage toasts={toasts} />
        </Body>
      </Frame>
    </Background>
  );
};

export default SessionPage;
