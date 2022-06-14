import styled from "styled-components";

const StyledToDo = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-radius: 10px;
  background-color: #b0c4de;
  border: 1px solid #4169e1;
`;
const StyledTitle = styled.h2`
  font-weight: 700;
`;

const StyledQuantityCards = styled.p`
  font-weight: 700;
`;

const StyledCardsContainer = styled.div`
  margin-top: -10px;
  padding: 20px 5px;
  width: 100%;
  height: 650px;

  border-left: 1px solid #4169e1;
  border-right: 1px solid #4169e1;
`;

const StyledButton = styled.button`
  width: 100%;
  padding: 20px;
  margin-top: -10px;
  border-radius: 10px;
  background-color: #b0c4de;
  border: 1px solid #4169e1;
  font-weight: 700;
  transition: all 0.4s;
  :hover {
    background-color: #1e90ff;
    color: #fff;
  }
  :active {
    background-color: #4169e1;
  }
`;

export {
  StyledToDo,
  StyledHeader,
  StyledTitle,
  StyledQuantityCards,
  StyledCardsContainer,
  StyledButton,
};
