import { ButtonContainer } from "./styles";

const Void = ({label, onClick}) => {
    return (
      <ButtonContainer onClick={onClick}>
       {label}
      </ButtonContainer>
    );
  }
  
  export default Void;
  