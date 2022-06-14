import styled from "styled-components";

const StyledDone = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-radius: 10px;
  background-color: #98fb98;
  border: 1px solid #3cb371;
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

  border-left: 1px solid #3cb371;
  border-right: 1px solid #3cb371;
`;

const StyledButton = styled.button`
  width: 100%;
  padding: 20px;
  margin-top: -10px;
  border-radius: 10px;
  background-color: #98fb98;
  border: 1px solid #3cb371;
  font-weight: 700;
  transition: all 0.4s;
  :hover {
    background-color: #32cd32;
    color: #fff;
  }
  :active {
    background-color: #3cb371;
  }
`;

export {
  StyledDone,
  StyledHeader,
  StyledTitle,
  StyledQuantityCards,
  StyledCardsContainer,
  StyledButton,
};
