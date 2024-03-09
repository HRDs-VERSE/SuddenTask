// Calculation.js
import React, { useState } from 'react';
import "./App.css"

const Calculation = () => {
  const [operation, setOperation] = useState('');
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleCalculation = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/calculate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          operation,
          num1: parseFloat(num1),
          num2: parseFloat(num2)
        })
      });
      const data = await response.json();
      setResult(data.result);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div>
      <h2>Arithmetic Calculation</h2>
      <div className='operation-site'>
        <div>Hello</div>
        <div>Let's study Quantum level math</div>

      <input
        
        type="text"
        placeholder="Enter Operation + - x /"
        value={operation}
        onChange={(e) => setOperation(e.target.value)}
      />
      <input
        
        type="text"
        placeholder="Number 1"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        
        type="text"
        placeholder="Number 2"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <button onClick={handleCalculation}>Calculate</button>
      {result && <p>Result: {result}</p>}
      </div>
    </div>
  );
};

export default Calculation;
