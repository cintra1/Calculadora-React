import { ButtonContainer } from "./styles";

const ButtonWhite = ({label, onClick}) => {
    return (
      <ButtonContainer onClick={onClick}>
       {label}
      </ButtonContainer>
    );
  }
  
  export default ButtonWhite;
  