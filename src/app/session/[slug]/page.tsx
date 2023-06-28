"use client";

import react from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@supabase/supabase-js";
import { useAppSelector } from "@/redux/hooks";

import styled from "styled-components";
import { colors } from "@styles/colors";

import { Database } from "@libs/types";

import Frame from "@components/Frame";
import { Background } from "@styles/styles";
import { Body, Title, Emoji } from "@styles/session/styles";
import ToastMessage from "./ToastMessage";
import ArrowRight from "./arrowRight";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
const supabase = createClient<Database>(supabaseUrl, supabaseKey);

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 100%;
  max-width: 600px;
  padding: 0.6rem 1rem;

  background: ${colors.invalid}33;
  border: 1px solid red;
  border-radius: 1rem;
`;
const InfoItem = styled.div`
  display: flex;
  align-items: center;
`;
const InfoText = styled.p`
  color: ${colors.text.light};
  word-break: keep-all;
`;

const ProgressContainer = styled.div`
  width: 100%;
  max-width: 600px;
`;
const ProgressItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  width: 100%;
  height: 100%;
`;
const ProgressItem = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: calc((100% - 4rem) / 3);
  height: 100%;
  padding: 1.2rem 1rem;

  background: ${({ isCurrent }) =>
    isCurrent ? colors.primary.standard : colors.primary.veryDark};
  border: 2px solid
    ${({ isCurrent }) =>
      isCurrent ? colors.primary.standard : colors.primary.veryDark};
  border-radius: 1rem;
  outline: none;

  color: ${({ isCurrent }) =>
    isCurrent ? colors.text.light : colors.text.littleLight};
  font-size: 1.2rem;
  word-break: keep-all;
  text-align: center;

  cursor: pointer;

  &:hover {
    border: 2px solid
      ${({ isCurrent }) => (isCurrent ? "#fff" : colors.primary.veryDark)};
  }
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 100%;
  max-width: 600px;
`;
const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.4rem;
`;
const CopiableItemField = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const ItemTitle = styled.h2`
  color: ${colors.text.light};
  font-size: 1.2rem;
  font-weight: 400;
`;
const CopiableItemButton = styled.button`
  padding: 0.6rem 1rem;

  color: ${colors.text.light};
  font-size: 1.2rem;
  font-weight: 500;

  background: ${colors.primary.standard};
  border: none;
  border-radius: 1rem;

  word-break: keep-all;

  cursor: pointer;
`;
const CopiableItemTextWraper = styled.a`
  flex-grow: 1;
  overflow-x: auto;
`;
const CopiableItemTextContainer = styled.div`
  flex-grow: 1;
  display: flex;
  padding: 0.6rem 1rem;

  border: 1px solid ${colors.primary.standard};
  border-radius: 1rem;

  overflow-x: auto;
`;
const CopiableItemText = styled.div`
  color: ${colors.text.light};
  font-size: 1.2rem;

  overflow-x: auto;
  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background: ${colors.primary.standard};
  }
`;

const PeopleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  padding: 0.6rem 1rem;

  border: 1px solid ${colors.primary.standard};
  border-radius: 1rem;
`;
const PeopleName = styled.p`
  color: ${colors.text.littleLight};
`;
const StartGameButton = styled.button`
  width: fit-content;
  padding: 0.6rem 1rem;

  color: ${colors.text.light};
  font-size: 1.2rem;
  font-weight: 500;

  background: ${colors.primary.standard};
  border: none;
  border-radius: 1rem;

  word-break: keep-all;

  cursor: pointer;
`;

const SessionPage = ({ params }: { params: { slug: string } }) => {
  const router = useRouter();
  const [data, setData] = react.useState(null);
  const [isMaster, setIsMaster] = react.useState(false);
  const [toasts, setToasts] = react.useState([]);
  const userId = useAppSelector((state) => state.userReducer.id);

  const getData = async ({ slug }: { slug: string }) => {
    try {
      const { error, data: rawData } = await supabase
        .from("gameSessions")
        .select(
          "session_id, made_by, picrew_link, session_name, password, people, progress"
        )
        .eq("session_id", slug);

      if (error) throw new Error();

      const data = rawData[0];
      setData(data);
    } catch (err) {
      console.error("[debug]", err);
    }
  };

  const checkInfoExists = react.useCallback(() => {
    return data?.progress === "ready";
  }, [data]);

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
    getData({ slug: params.slug });
  }, []);

  react.useEffect(() => {
    setIsMaster(data?.made_by === userId);
    console.log(data);
  }, [data, userId]);

  return (
    <Background>
      <Frame>
        <Body>
          <Title>
            <Emoji src={"/left_speech_bubble_twitter.png"} />
            {data?.session_name}
          </Title>

          {checkInfoExists() && (
            <InfoContainer>
              {isMaster && data?.progress === "ready" && (
                <InfoItem>
                  <Emoji src={"/exclamation_mark_twitter.png"} />
                  <InfoText>
                    아래에서 참가자를 확인하고 시작하기 버튼을 눌러 게임을
                    시작해주세요
                  </InfoText>
                </InfoItem>
              )}

              {!isMaster && data?.progress === "ready" && (
                <InfoItem>
                  <Emoji src={"/exclamation_mark_twitter.png"} />
                  <InfoText>게임이 시작될 때까지 기다려주세요</InfoText>
                </InfoItem>
              )}
            </InfoContainer>
          )}

          <ProgressContainer>
            <ProgressItems>
              <ProgressItem
                isCurrent={data?.progress === "upload"}
                disabled={data?.progress !== "upload"}
                onClick={() => {
                  router.push(`/session/upload/${params?.slug}`);
                }}
              >
                픽크루 만들기
              </ProgressItem>
              <ArrowRight size={"2rem"} color={colors.primary.standard} />
              <ProgressItem
                isCurrent={data?.progress === "solve"}
                disabled={data?.progress !== "solve"}
              >
                문제 맞추기
              </ProgressItem>
              <ArrowRight size={"2rem"} color={colors.primary.standard} />
              <ProgressItem
                isCurrent={data?.progress === "result"}
                disabled={data?.progress !== "result"}
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
                  <CopiableItemText>{data?.password}</CopiableItemText>
                </CopiableItemTextContainer>
                <CopiableItemButton
                  onClick={() => {
                    navigator.clipboard
                      .writeText(data?.picrew_link)
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
                  href={data?.picrew_link}
                  target="_blank"
                >
                  <CopiableItemTextContainer>
                    <CopiableItemText>{data?.picrew_link}</CopiableItemText>
                  </CopiableItemTextContainer>
                </CopiableItemTextWraper>
                <CopiableItemButton
                  onClick={() => {
                    navigator.clipboard
                      .writeText(data?.picrew_link)
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
                {data?.people?.map((person) => (
                  <PeopleName>{person}</PeopleName>
                ))}
              </PeopleContainer>

              {isMaster && data?.progress === "ready" && (
                <StartGameButton
                  onClick={async () => {
                    try {
                      const { error } = await supabase
                        .from("gameSessions")
                        .update({ progress: "upload" })
                        .eq("session_id", params?.slug);

                      if (error) throw new Error();

                      setData({ ...data, progress: "upload" });

                      addToastMessage({
                        message: "시작합니다!",
                      });
                    } catch (e) {}
                  }}
                >
                  시작하기
                </StartGameButton>
              )}
            </Item>
          </Items>

          <ToastMessage toasts={toasts} />
        </Body>
      </Frame>
    </Background>
  );
};

export default SessionPage;
