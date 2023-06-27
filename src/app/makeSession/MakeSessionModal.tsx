"use client";

import react from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@supabase/supabase-js";
import { useAppSelector } from "@/redux/hooks";
import CryptoJS from "crypto-js";

import styled from "styled-components";
import { colors } from "@styles/colors";
import { Button } from "@styles/styles";
import { Database } from "@libs/types";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
const supabase = createClient<Database>(supabaseUrl, supabaseKey);

const Container = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
`;
const ConfirmButton = styled(Button)`
  width: auto;
  padding: 0.8rem 4rem;
`;

const ModalWrapper = styled.div`
  position: relative;
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background: #0008;

  z-index: 9;
`;

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  position: fixed;

  padding: 2rem;
  width: 80vw;
  max-width: 400px;

  background: ${colors.background};
  border: 1px solid ${colors.primary.standard};
  border-radius: 2rem;

  top: 25vh;
  left: max(10vw, calc((100vw - 400px) / 2));

  z-index: 10;
`;
const Description = styled.p`
  color: ${colors.text.light};
  font-size: 1.2rem;
`;

const MakeSessionModal = ({
  sessionName,
  picrewLink,
  password,
  checkPasswordMinLength,
  checkPasswordMaxLength,
}: {
  sessionName: string;
  picrewLink: string;
  password: string;
  checkPasswordMinLength: Function;
  checkPasswordMaxLength: Function;
}) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = react.useState(false);
  const userId = useAppSelector((state) => state.userReducer.id);

  const sessinNameIsEmpty = () => {
    return sessionName === "";
  };

  const picrewLinkIsEmpty = () => {
    return picrewLink === "";
  };

  const isValidPicrewLink = () => {
    if (picrewLink.includes("picrew.me/ja/image_maker/")) return true;
    if (picrewLink.includes("picrew.me/en/image_maker/")) return true;
    return false;
  };

  const generateHash = ({ string }) => {
    const date = new Date().getTime().toString().slice(-3);
    const name = CryptoJS.SHA256(string + date)
      .toString()
      .slice(0, 3);
    const source = name + date;

    let encodedHash = "";
    let alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let i = 0; i < 6; i++) {
      encodedHash += alphabet[source.charCodeAt(i) % alphabet.length];
    }

    return encodedHash;
  };

  return (
    <Container>
      <ConfirmButton
        isPrimary
        onClick={() => {
          if (sessinNameIsEmpty()) {
            alert("세션 이름을 입력해주세요");
            return;
          }

          if (picrewLinkIsEmpty()) {
            alert("픽크루 링크를 입력해주세요");
            return;
          }

          if (!isValidPicrewLink()) {
            alert("픽크루 링크를 확인해주세요");
            return;
          }

          if (!checkPasswordMinLength()) {
            alert("비밀번호는 4자리 이상이어야 합니다");
            return;
          }

          if (!checkPasswordMaxLength()) {
            alert("비밀번호는 20자리 이하여야 합니다");
            return;
          }

          setIsOpen(true);
        }}
      >
        세션 만들기
      </ConfirmButton>

      {isOpen && (
        <ModalWrapper>
          <Backdrop
            onClick={() => {
              setIsOpen(false);
            }}
          />
          <Modal>
            <Description>이대로 세션을 생성합니다</Description>
            <ConfirmButton
              isPrimary
              onClick={async () => {
                const sessionId = generateHash({ string: sessionName });

                try {
                  await supabase.from("gameSessions").insert([
                    {
                      sessioin_id: sessionId,
                      session_name: sessionName,
                      picrew_link: picrewLink,
                      made_by: userId,
                      password,
                    },
                  ]);

                  router.push("/session");
                } catch (err) {
                  console.error("[debug]", err);
                }
              }}
            >
              확인
            </ConfirmButton>
          </Modal>
        </ModalWrapper>
      )}
    </Container>
  );
};

export default MakeSessionModal;
