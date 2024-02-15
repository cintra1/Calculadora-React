import { ButtonContainer } from "./styles";

const ButtonOrange = ({label, onClick}) => {
    return (
      <ButtonContainer onClick={onClick}>
       {label}
      </ButtonContainer>
    );
  }
  
  export default ButtonOrange;
  