import { useState } from 'react';
import './App.css';


function App() {
  const[display, setDisplay] = useState(0)
  const[previousValue, setPreviousValue] = useState(null);
  const[operator, setOperator] = useState(null);
  const[waitingForNewValue, setWaitingForNewValue] = useState(false);
 
  const handleClick = (value) => {
    if (waitingForNewValue) {
      setWaitingForNewValue (value);
      setWaitingForNewValue (false);
    } else {
      if (display === "0" && value !== ".") {
        setDisplay(value);
      } else {
        setDisplay(display + value);
      }
    }
  }
  
  const handleOperator = (op) => {
    if (previousValue === null) {
      setPreviousValue(display);
      setOperator(op);
      setWaitingForNewValue(true);
    } else {
      const result = calculate();
      setDisplay(result);
      setPreviousValue(result);
      setOperator(op);
      setWaitingForNewValue(true);
    }
  }

  const calculate = () => {
    let result;
    switch (operator) {
      case "+":
        result = parseFloat(previousValue) + parseFloat(display);
        break;
      case "-":
        result = parseFloat(previousValue) - parseFloat(display);
        break;
      case "/":
        result = parseFloat(previousValue) / parseFloat(display);
        break;
      case "*":
        result = parseFloat(previousValue) * parseFloat(display);
        break;    
      default:
        return display;
    }
    return result.toString();
  };

  const handlerClear = () => {
    setDisplay('0')
    setOperator(null)
    setPreviousValue(null)
    setWaitingForNewValue(false)
  }

  return (
    <>

    </>
  );
};

export default App;
