import styled from "styled-components";
import { colors } from "@styles/colors";

const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  top: 1.4rem;
  left: 1.4rem;

  width: content;
`;
const Message = styled.p`
  width: fit-content;

  background: #ffe;
  padding: 0.6rem 1rem;
  border-radius: 1rem;

  font-weight: 600;
`;

const ToastMessage = ({ toasts }: { toasts: Object[] }) => {
  return (
    <Container>
      {toasts.map((toast) => (
        <Message>✨ {toast?.message}</Message>
      ))}
    </Container>
  );
};

export default ToastMessage;
