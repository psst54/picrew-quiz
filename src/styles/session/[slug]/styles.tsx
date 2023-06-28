import styled from "styled-components";
import { colors } from "@styles/colors";

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

export {
  InfoContainer,
  InfoItem,
  InfoText,
  ProgressContainer,
  ProgressItems,
  ProgressItem,
  Items,
  Item,
  CopiableItemField,
  ItemTitle,
  CopiableItemButton,
  CopiableItemTextWraper,
  CopiableItemTextContainer,
  CopiableItemText,
  PeopleContainer,
  PeopleName,
  StartGameButton,
};
