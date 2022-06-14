import Done from "../Done/Done";
import InProgress from "../InProgress/InProgress";
import ToDo from "../ToDo/ToDo";
import { StyledMain } from "./styles";

const Main = () => {
  return (
    <StyledMain>
      <ToDo />
      <InProgress />
      <Done />
    </StyledMain>
  );
};

export default Main;
