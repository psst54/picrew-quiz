import react from "react";
import Link from "next/link";

import styled from "styled-components";
import { colors } from "@styles/colors";
import { Button } from "@styles/styles";

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
  border: 1px solid #fff;
  border-radius: 1rem;

  top: 20vh;
  left: max(10vw, calc((100vw - 400px) / 2));

  z-index: 10;
`;
const Description = styled.p`
  color: ${colors.text.light};
  font-size: 1.2rem;
`;

const MakeSessionModal = () => {
  const [isOpen, setIsOpen] = react.useState(false);

  return (
    <Container>
      <ConfirmButton
        isPrimary
        onClick={() => {
          setIsOpen(true);
          console.log("[debug]", "make session");
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
            <Link href="/session?id=test" style={{ textDecoration: "none" }}>
              <ConfirmButton
                isPrimary
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                확인
              </ConfirmButton>
            </Link>
          </Modal>
        </ModalWrapper>
      )}
    </Container>
  );
};

export default MakeSessionModal;
