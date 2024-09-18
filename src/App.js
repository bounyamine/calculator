import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import { evaluate } from 'mathjs';

const App = () => {
  const [screen, setScreen] = useState('0');
  const [calculated, setCalculated] = useState(false);

  useEffect(() => {
    if (screen === 'Syntax Error' || screen === 'Division by 0' || screen === 'Math Error' || screen === 'NaN' || screen === 'Parenthesis Error') {
      setTimeout(() => setScreen('0'), 2000);
    }
  }, [screen]);

  const isOperator = (key) => ['+', '-', '/', '*'].includes(key);
  // const isParenthesis = (key) => key === '(' || key === ')';

  const addToScreen = (key) => {
    setScreen((prev) => {
      if (calculated) {
        setCalculated(false);
        return isOperator(key) ? prev + key : key;
      }
      if (isOperator(prev.slice(-1)) && isOperator(key)) {
        return prev.slice(0, -1) + key;
      }
      if (prev === '0' && key === '0') {
        return '0';
      }
      return prev === '0' && !isOperator(key) && key !== '.' ? key : prev + key;
    });
  };

  const validateExpression = (expr) => {
    const openParentheses = (expr.match(/\(/g) || []).length;
    const closeParentheses = (expr.match(/\)/g) || []).length;
    return openParentheses === closeParentheses;
  };

  const populateCalcul = () => {
    if (!validateExpression(screen)) {
      setScreen('Parenthesis Error');
      return;
    }

    try {
      const result = evaluate(screen).toString();
      setScreen(result);
      setCalculated(true);
    } catch (error) {
      setScreen('Syntax Error');
    }
  };

  const deleteAll = () => setScreen('0');

  const deleteLast = () => {
    if (calculated) {
      setCalculated(false);
      return deleteAll();
    }
    return setScreen(screen.length > 1 ? screen.slice(0, -1) : '0');
  }

  const populateSign = () => {
    setScreen((prev) => {
      const value = parseFloat(prev);
      return !isNaN(value) ? (value > 0 ? '-' + prev : prev.slice(1)) : prev;
    });
  };

  const percentage = () => {
    const value = parseFloat(screen);
    if (!isNaN(value)) {
      setScreen((value / 100).toFixed(2).toString());
    } else {
      setScreen('Math Error');
    }
  };

  const inverse = () => {
    const value = parseFloat(screen);
    if (!isNaN(value)) {
      if (value === 0) {
        setScreen('Division by 0');
      } else {
        setScreen((1 / value).toString());
      }
    } else {
      setScreen('Math Error');
    }
  };

  const square = () => {
    const value = parseFloat(screen);
    if (!isNaN(value)) {
      setScreen((value * value).toString());
    } else {
      setScreen('Math Error');
    }
  };

  const sqrt = () => {
    const value = parseFloat(screen);
    if (!isNaN(value)) {
      setScreen(Math.sqrt(value).toString());
    } else {
      setScreen('Math Error');
    }
  };

  const addParenthesis = () => {
    setScreen((prev) => {
      const openParentheses = (prev.match(/\(/g) || []).length;
      const closeParentheses = (prev.match(/\)/g) || []).length;

      if (openParentheses > closeParentheses) {
        return prev + ')';
      } else {
        return prev === '0' ? '(' : prev + '(';
      }
    });
  };

  return (
    <div className="container">
      <h2>Calculator</h2>
      <main className="main">

        <div className="calculator">
          <div className="screen">
            <input
              type="text"
              readOnly
              value={screen}
              aria-label="calculator screen"
              aria-live="polite"
            />
          </div>
          <div className="keyboard">
            <div className="key" onClick={percentage} aria-label="percentage"><span>%</span></div>
            <div className="key" onClick={addParenthesis} aria-label="parentheses"><span>( )</span></div>
            <div className="key" onClick={deleteAll} aria-label="clear all"><span>CE</span></div>
            <div className="key" onClick={deleteLast} aria-label="delete last"><span>&larr;</span></div>
            <div className="key" onClick={inverse} aria-label="inverse"><span>1/x</span></div>
            <div className="key" onClick={square} aria-label="square"><span>x²</span></div>
            <div className="key" onClick={sqrt} aria-label="square root"><span>√x</span></div>
            {['/', 7, 8, 9].map((key) => (
              <div className="key" onClick={() => addToScreen(key.toString())} key={key} aria-label={key}><span>{key}</span></div>
            ))}
            {['*', 4, 5, 6].map((key) => (
              <div className="key" onClick={() => addToScreen(key.toString())} key={key} aria-label={key}><span>{key}</span></div>
            ))}
            {['-', 1, 2, 3].map((key) => (
              <div className="key" onClick={() => addToScreen(key.toString())} key={key} aria-label={key}><span>{key}</span></div>
            ))}
            {['+', '+/-', 0, '.'].map((key) => (
              <div className="key" onClick={() => key === '+/-' ? populateSign() : addToScreen(key.toString())} key={key} aria-label={key}><span>{key}</span></div>
            ))}
            <div className="key equal" onClick={populateCalcul} aria-label="equal"><span>=</span></div>
          </div>
        </div>
      </main>
      <footer>
        <p>&copy; Calculator par <a href="https://github.com/bounyamine">Bounyamine</a></p>
      </footer>
    </div>
  );
};

export default App;
