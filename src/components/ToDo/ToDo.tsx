import {
  StyledButton,
  StyledCardsContainer,
  StyledHeader,
  StyledQuantityCards,
  StyledTitle,
  StyledToDo,
} from "./styles";

const ToDo = () => {
  return (
    <StyledToDo>
      <StyledHeader>
        <StyledTitle>TODO:</StyledTitle>
        <StyledQuantityCards>2</StyledQuantityCards>
      </StyledHeader>
      <StyledCardsContainer></StyledCardsContainer>
      <StyledButton>ADD TODO</StyledButton>
    </StyledToDo>
  );
};

export default ToDo;
