import { useEffect, useState } from "react";
import { StyledHeader, StyledTitle, StyledWatch } from "./styles";

const Header = () => {
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 3000);
}, []);
  return (
    <StyledHeader>
      <StyledTitle>Trello</StyledTitle>
      <StyledWatch>
        {dateState.toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        })}
      </StyledWatch>
    </StyledHeader>
  );
};

export default Header;
