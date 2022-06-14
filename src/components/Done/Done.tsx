import {
  StyledButton,
  StyledCardsContainer,
  StyledHeader,
  StyledQuantityCards,
  StyledTitle,
  StyledDone,
} from "./styles";

const Done = () => {
  return (
    <StyledDone>
      <StyledHeader>
        <StyledTitle>DONE</StyledTitle>
        <StyledQuantityCards>2</StyledQuantityCards>
      </StyledHeader>
      <StyledCardsContainer></StyledCardsContainer>
      <StyledButton>DELETE ALL</StyledButton>
    </StyledDone>
  );
};

export default Done;
