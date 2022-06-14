import styled from "styled-components";

const StyledHeader = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffb6c1;
  border: 1px solid #ff1493;
  border-radius: 10px;
`;

const StyledTitle = styled.h1`
  margin-left: 20px;
  font-size: 30px;
  font-weight: 700;
`;

const StyledWatch = styled.div`
  padding: 20px 40px;
  font-size: 20px;
  font-weight: 700;
  border-radius: 10px;
  background-color: #fff;
`;

export { StyledHeader, StyledTitle, StyledWatch };
