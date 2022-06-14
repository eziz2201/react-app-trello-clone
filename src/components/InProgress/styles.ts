import styled from "styled-components";

const StyledInProgress = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-radius: 10px;
  background-color: #dcdcdc;
  border: 1px solid #808080;
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
  height: 700px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left: 1px solid #808080;
  border-right: 1px solid #808080;
  border-bottom: 1px solid #808080;
`;

export {
  StyledInProgress,
  StyledHeader,
  StyledTitle,
  StyledQuantityCards,
  StyledCardsContainer,
};
