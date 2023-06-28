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
import ToastMessage from "@components/ToastMessage";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
const supabase = createClient<Database>(supabaseUrl, supabaseKey);

const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  width: 100%;
  max-width: 600px;
  padding: 2rem 0.4rem;

  border: 1px solid ${colors.primary.standard};
  border-radius: 2rem;
`;
const UploadDesc = styled.h2`
  color: ${colors.text.light};
  font-size: 1.2rem;
  font-weight: 400;
  word-break: keep-all;
`;
const UploadSubDesc = styled.p`
  color: ${colors.text.littleLight};
  word-break: keep-all;
`;
const FileInput = styled.input`
  display: none;
`;
const FileInputLabel = styled.label`
  padding: 0.8rem 2rem;
  background: ${colors.primary.standard};
  border-radius: 1rem;

  color: ${colors.text.light};
  font-size: 1.2rem;
  font-weight: 600;
  word-break: keep-all;

  cursor: pointer;

  &:hover {
    background: ${colors.primary.dark};
  }
`;

const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;

  width: 100%;
  max-width: 600px;
`;
const PreviewImage = styled.img`
  width: 80%;
  max-width: 18rem;
  height: auto;
`;

const SubmitButton = styled.button`
  padding: 0.8rem 2rem;
  background: ${colors.primary.standard};
  border: none;
  border-radius: 1rem;
  outline: none;

  color: ${colors.text.light};
  font-size: 1.2rem;
  font-weight: 600;
  word-break: keep-all;

  cursor: pointer;

  &:hover {
    background: ${colors.primary.dark};
  }
`;

const SessionPage = ({ params }: { params: { slug: string } }) => {
  const router = useRouter();
  const [sessionData, setSessionData] = react.useState(null);
  const userId = useAppSelector((state) => state.userReducer.id);
  const [fileObj, setFileObj] = react.useState(null);
  const [fileSrc, setFileSrc] = react.useState(null);
  const [toasts, setToasts] = react.useState([]);

  const getSessionData = async ({ slug }: { slug: string }) => {
    try {
      const { error, data } = await supabase
        .from("gameSessions")
        .select(
          "session_id, made_by, picrew_link, session_name, password, people, progress"
        )
        .eq("session_id", slug);

      if (error) throw new Error();
      if (!data || data.length === 0) throw new Error();
      setSessionData(data[0]);
    } catch (e) {}
  };

  const getImageData = async ({ slug }: { slug: string }) => {
    try {
      const fileName = `user_picrew_images/${userId}_${slug}.png`;

      const { data, error } = await supabase.storage
        .from("picrew-psst54")
        .download(fileName);

      if (error) throw new Error();

      console.log(data);
      const obj = new File([data], "tmp name");
      console.log(obj);
      setFileObj(obj);
      resolveFile({ fileObj: obj });
    } catch (e) {}
  };

  const resolveFile = ({ fileObj }: { fileObj: File }) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileObj);
    return new Promise((resolve) => {
      reader.onload = () => {
        setFileSrc(reader.result);
        resolve();
      };
    });
  };

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
    getSessionData({ slug: params.slug });
    getImageData({ slug: params.slug });
  }, []);

  return (
    <Background>
      <Frame>
        <Body>
          <Title>
            <Emoji src={"/left_speech_bubble_twitter.png"} />
            {sessionData?.session_name}
          </Title>

          <UploadContainer>
            <UploadDesc>드래그 앤 드롭으로 이미지 업로드하기</UploadDesc>
            <UploadSubDesc>또는</UploadSubDesc>
            <FileInputLabel htmlFor="fileInput">
              파일탐색기에서 선택하기
            </FileInputLabel>
            <FileInput
              type="file"
              id="fileInput"
              accept="image/*"
              onChange={(event: react.ChangeEvent<HTMLInputElement>) => {
                const file = event.target.files[0];
                setFileObj(file);
                resolveFile({ fileObj: file });
              }}
            />
          </UploadContainer>

          {fileSrc && (
            <PreviewContainer>
              <PreviewImage src={fileSrc} />
              <SubmitButton
                onClick={async () => {
                  try {
                    addToastMessage({
                      message: "이미지를 업로드하는 중...",
                    });

                    const fileName = `user_picrew_images/${userId}_${params?.slug}.png`;
                    const { data, error } = await supabase.storage
                      .from("picrew-psst54")
                      .upload(fileName, fileObj, {
                        upsert: true,
                      });

                    if (error) throw new Error();

                    addToastMessage({
                      message: "이미지를 업로드했습니다!",
                    });
                  } catch (e) {
                    addToastMessage({
                      message: "업로드 오류! 잠시 뒤에 다시 시도해주세요",
                    });
                  }
                }}
              >
                이 이미지를 제출하기
              </SubmitButton>
            </PreviewContainer>
          )}

          <ToastMessage toasts={toasts} />
        </Body>
      </Frame>
    </Background>
  );
};

export default SessionPage;
