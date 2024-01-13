import React, { useState } from 'react';
import './App.css';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e, setter) => {
    const value = e.target.value;
    setter(value);
  };

  const validateInput = () => {
    if (!num1.trim() || !num2.trim() || isNaN(num1) || isNaN(num2)) {
      setError('Please enter valid numbers in both fields.');
      return false;
    }
    setError('');
    return true;
  };

  const handleOperation = (operator) => {
    if (validateInput()) {
      const number1 = parseFloat(num1);
      const number2 = parseFloat(num2);

      switch (operator) {
        case '+':
          setResult(`Result: ${number1 + number2}`);
          break;
        case '-':
          setResult(`Result: ${number1 - number2}`);
          break;
        case '*':
          setResult(`Result: ${number1 * number2}`);
          break;
        case '/':
          if (number2 !== 0) {
            setResult(`Result: ${number1 / number2}`);
          } else {
            setError('Cannot divide by zero.');
          }
          break;
        default:
          break;
      }
    }
  };

  return (
    <div className="calculator">
      <div>
        <h1><span></span>React Calculator</h1>
        <label>
          <input type="text" placeholder="NUM 1" value={num1} onChange={(e) => handleInputChange(e, setNum1)} />
        </label>
      </div>
      <div>
        <label>
          <input type="text" placeholder="NUM 2" value={num2} onChange={(e) => handleInputChange(e, setNum2)} />
        </label>
      </div>
      <div>
        <button onClick={() => handleOperation('+')}>+</button>
        <button onClick={() => handleOperation('-')}>-</button>
        <button onClick={() => handleOperation('*')}>*</button>
        <button onClick={() => handleOperation('/')}>/</button>
      </div>
      {error && <div className="error">{error}</div>}
      {result && <div className="success">{result}</div>}
    </div>
  );
};

export default Calculator;
