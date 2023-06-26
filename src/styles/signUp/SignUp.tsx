import styled from "styled-components";
import { colors } from "@styles/colors";

const CheckPasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const CheckPasswordItem = styled.div`
  display: flex;
  gap: 0.6rem;
  align-items: center;

  margin-left: 1rem;

  color: ${({ isValid }) => (isValid ? colors.valid : colors.invalid)};
`;

export { CheckPasswordContainer, CheckPasswordItem };
