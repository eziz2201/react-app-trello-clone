import {
  StyledCardsContainer,
  StyledHeader,
  StyledQuantityCards,
  StyledTitle,
  StyledInProgress,
} from "./styles";

const InProgress = () => {
  return (
    <StyledInProgress>
      <StyledHeader>
        <StyledTitle>IN PROGRESS</StyledTitle>
        <StyledQuantityCards>2</StyledQuantityCards>
      </StyledHeader>
      <StyledCardsContainer></StyledCardsContainer>
    </StyledInProgress>
  );
};

export default InProgress;
