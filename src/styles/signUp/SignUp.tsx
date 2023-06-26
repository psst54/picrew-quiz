import styled from "styled-components";
import { colors } from "@styles/colors";

const PrimaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 90vw;
  max-width: 26rem;
  padding: 2.4rem 2rem;

  border: 1px solid ${colors.primary};
  border-radius: 1rem;
`;

export { PrimaryContainer };
