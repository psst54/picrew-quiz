import styled from "styled-components";
import { colors } from "@styles/colors";

const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  width: 100%;
  max-width: 600px;
  padding: 2rem 0.4rem;
  background: ${({ isDragging }) =>
    isDragging ? colors.primary.veryveryDark : "transparent"};

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
  gap: 1rem;

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

export {
  UploadContainer,
  UploadDesc,
  UploadSubDesc,
  FileInput,
  FileInputLabel,
  PreviewContainer,
  PreviewImage,
  SubmitButton,
};
