"use client";

import react from "react";
import Link from "next/link";
import { createClient } from "@supabase/supabase-js";
import { useAppSelector } from "@/redux/hooks";

import { colors } from "@styles/colors";
import { Database } from "@libs/types";

import Frame from "@components/Frame";
import { Background } from "@styles/styles";
import { Body, Header, Title, Emoji, Navigation } from "@styles/session/styles";
import ToastMessage from "@components/ToastMessage";
import {
  UploadContainer,
  UploadDesc,
  UploadSubDesc,
  FileInput,
  FileInputLabel,
  PreviewContainer,
  PreviewImage,
  SubmitButton,
} from "@styles/session/upload/[slug]/styles";

import NavigateIcon from "@assets/NavigateIcon";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
const supabase = createClient<Database>(supabaseUrl, supabaseKey);

const SessionPage = ({ params }: { params: { slug: string } }) => {
  const [sessionData, setSessionData] = react.useState(null);
  const userId = useAppSelector((state) => state.userReducer.id);
  const [fileObj, setFileObj] = react.useState(null);
  const [fileSrc, setFileSrc] = react.useState(null);
  const [toasts, setToasts] = react.useState([]);
  const dragRef = react.useRef<HTMLLabelElement | null>(null);
  const [isDragging, setIsDragging] = react.useState(false);

  const onChangeFiles = react.useCallback(
    (e: react.ChangeEvent<HTMLInputElement> | any): void => {
      let selectFiles: File[] = [];

      if (e.type === "drop") {
        selectFiles = e.dataTransfer.files;
      } else {
        selectFiles = e.target.files;
      }

      if (selectFiles.length === 1) {
        setFileObj(selectFiles[0]);
        resolveFile({ fileObj: selectFiles[0] });
      }
    },
    [fileObj]
  );

  const handleDragIn = react.useCallback((e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragOut = react.useCallback((e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();

    setIsDragging(false);
  }, []);

  const handleDragOver = react.useCallback((e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer!.files) {
      setIsDragging(true);
    }
  }, []);

  const handleDrop = react.useCallback(
    (e: DragEvent): void => {
      e.preventDefault();
      e.stopPropagation();

      onChangeFiles(e);
      setIsDragging(false);
    },
    [onChangeFiles]
  );

  const initDragEvents = react.useCallback((): void => {
    if (dragRef.current !== null) {
      dragRef.current.addEventListener("dragenter", handleDragIn);
      dragRef.current.addEventListener("dragleave", handleDragOut);
      dragRef.current.addEventListener("dragover", handleDragOver);
      dragRef.current.addEventListener("drop", handleDrop);
    }
  }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);

  const resetDragEvents = react.useCallback((): void => {
    if (dragRef.current !== null) {
      dragRef.current.removeEventListener("dragenter", handleDragIn);
      dragRef.current.removeEventListener("dragleave", handleDragOut);
      dragRef.current.removeEventListener("dragover", handleDragOver);
      dragRef.current.removeEventListener("drop", handleDrop);
    }
  }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);

  react.useEffect(() => {
    initDragEvents();

    return () => resetDragEvents();
  }, [initDragEvents, resetDragEvents]);

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
          <Header>
            <Title>
              <Emoji src={"/left_speech_bubble_twitter.png"} />
              {sessionData?.session_name}
            </Title>

            <Link
              href={`/session/${params?.slug}`}
              style={{ textDecoration: "none" }}
            >
              <Navigation>
                세션 메인으로 이동하기
                <NavigateIcon size={"1.4rem"} color={colors.text.littleLight} />
              </Navigation>
            </Link>
          </Header>

          <UploadContainer ref={dragRef} isDragging={isDragging}>
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
