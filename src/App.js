import { Container, Content, Row } from "./styles";
import Input from "./Components/Input";
import Button from "./Components/Button";
import ButtonWhite from "./Components/ButtonWhite";
import ButtonOrange from "./Components/ButtonOrange";
import { useState } from "react";
import Void from "./Components/Espaço";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  };

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  }

  const handleSumNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('+')
    }else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }

  }

  const handleMinusNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('-')
    }else {
      const min = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(min))
      setOperation('')
    }

  }

  const handleMultNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('*')
    }else {
      const mult = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(mult))
      setOperation('')
    }

  }

  const handleDivNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('/')
    }else {
      const div = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(div))
      setOperation('')
    }

  }

  const changeSign = () => {
    if (currentNumber > 0) {
      setCurrentNumber(-currentNumber);
    } else {
      setCurrentNumber(Math.abs(currentNumber));
    }
  }

  const porcentage = () => {
    setCurrentNumber(currentNumber / 100);
  }

  const handleEquals = () => {

    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
        switch(operation){
          case '+':
            handleSumNumbers();
            break;
          case '-':
            handleMinusNumbers();
            break;
          case '*':
            handleMultNumbers();
            break;
          case '/':
            handleDivNumbers();
            break;
          
          default: 
            break;
        }
    }

  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <ButtonWhite label="AC" onClick={handleOnClear}/>
          <ButtonWhite label="+/-" onClick={changeSign}/>
          <ButtonWhite label="%" onClick={porcentage}/>
          <ButtonOrange label="/" onClick={handleDivNumbers}/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <ButtonOrange label="x" onClick={handleMultNumbers}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <ButtonOrange label="-" onClick={handleMinusNumbers}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <ButtonOrange label="+" onClick={handleSumNumbers}/>
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumber('0')}/>
          <Button label="," onClick={() => handleAddNumber('.')}/>
          <Void />
          <ButtonOrange label="=" onClick={handleEquals}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
