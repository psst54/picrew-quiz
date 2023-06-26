"use client";

import react from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@supabase/supabase-js";
import { useAppSelector } from "@/redux/hooks";

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
}: {
  sessionName: string;
  picrewLink: string;
}) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = react.useState(false);
  const userId = useAppSelector((state) => state.userReducer.id);

  return (
    <Container>
      <ConfirmButton
        isPrimary
        onClick={() => {
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
                try {
                  const res = await supabase.from("gameSessions").insert([
                    {
                      sessioin_id: "testId" + new Date().getTime(),
                      session_name: sessionName,
                      picrew_link: picrewLink,
                      made_by: userId,
                      password: new Date().getTime(),
                    },
                  ]);

                  router.push("/session");
                } catch (err) {
                  // console.error("[debug]", err);
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
