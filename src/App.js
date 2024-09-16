import { useState, useEffect } from 'react';
import './App.css';
import { evaluate } from 'mathjs';

const App = () => {
  const [screen, setScreen] = useState('0');

  useEffect(() => {
    const value = parseFloat(screen);
    if (screen === 'Error' || screen === 'Infinity') {
      setTimeout(() => setScreen('0'), 2000);
    }
    if (isNaN(value)) {
      setScreen('Error');
    }
  }, [screen]);

  const addToScreen = (key) => {
    setScreen((prev) => {
      if (['+', '-', '/', '*'].includes(prev.slice(-1)) && ['+', '-', '/', '*'].includes(key)) {
        return prev.slice(0, -1) + key;
      }
      return prev === '0' ? (['+', '-', '/', '*', '.'].includes(key) ? prev + key : key) : prev + key;
    });
  };

  const populateCalcul = () => {
    try {
      setScreen(evaluate(screen).toString());
    } catch {
      setScreen('Error');
    }
  };

  const deleteAll = () => setScreen('0');

  const deleteLast = () => setScreen(screen.length > 1 ? screen.slice(0, -1) : '0');

  const populateSign = () => {
    setScreen((prev) => {
      // Séparation en tokens pour gérer les différentes parties de l'expression
      const tokens = prev.match(/([+\-*/()]|\d+(\.\d+)?)/g) || [];
  
      // Si aucun nombre, on retourne simplement l'expression précédente
      if (!tokens.length) return prev;
  
      // On récupère le dernier token (nombre ou opérateur)
      const lastToken = tokens.pop();
  
      // Si le dernier token est un nombre, on change son signe
      if (!isNaN(lastToken)) {
        const newToken = parseFloat(lastToken) > 0 ? '-' + lastToken : lastToken.slice(1);
        tokens.push(newToken);
      } else {
        // Si ce n'est pas un nombre, on remet l'ancien token
        tokens.push(lastToken);
      }
  
      return tokens.join('');
    });
  };
  

  const percentage = () => {
    const value = parseFloat(screen);
    if (!isNaN(value)) {
      setScreen((value / 100).toFixed(2).toString());
    } else {
      setScreen('Error');
    }
  };

  const inverse = () => {
    const value = parseFloat(screen);
    if (!isNaN(value)) {
      setScreen((1 / value).toString());
    } else {
      setScreen('Error');
    }
  };

  const square = () => {
    const value = parseFloat(screen);
    if (!isNaN(value)) {
      setScreen((value * value).toString());
    } else {
      setScreen('Error');
    }
  };

  const sqrt = () => {
    const value = parseFloat(screen);
    if (!isNaN(value)) {
      setScreen(Math.sqrt(value).toString());
    } else {
      setScreen('Error');
    }
  };

  const addParenthesis = () => {
    setScreen((prev) => {
      const openParentheses = (prev.match(/\(/g) || []).length;
      const closeParentheses = (prev.match(/\)/g) || []).length;
  
      // Si le nombre de parenthèses ouvrantes est supérieur à celui des parenthèses fermantes,
      // on ajoute une parenthèse fermante.
      if (openParentheses > closeParentheses) {
        return prev + ')';
      } else {
        // Sinon, on ajoute une parenthèse ouvrante.
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
            <input type="text" readOnly value={screen} />
          </div>
          <div className="keyboard">
            <div className="key" onClick={percentage}><span>%</span></div>
            <div className="key" onClick={addParenthesis}><span>( )</span></div>
            <div className="key" onClick={deleteAll}><span>CE</span></div>
            <div className="key" onClick={deleteLast}><span>&larr;</span></div>
            <div className="key" onClick={inverse}><span>1/x</span></div>
            <div className="key" onClick={square}><span>x²</span></div>
            <div className="key" onClick={sqrt}><span>√x</span></div>
            {['/', 7, 8, 9].map((key) => (
              <div className="key" onClick={() => addToScreen(key.toString())} key={key}><span>{key}</span></div>
            ))}
            {['*', 4, 5, 6].map((key) => (
              <div className="key" onClick={() => addToScreen(key.toString())} key={key}><span>{key}</span></div>
            ))}
            {['-', 1, 2, 3].map((key) => (
              <div className="key" onClick={() => addToScreen(key.toString())} key={key}><span>{key}</span></div>
            ))}
            {['+', '+/-', 0, '.'].map((key) => (
              <div className="key" onClick={() => key === '+/-' ? populateSign() : addToScreen(key.toString())} key={key}><span>{key}</span></div>
            ))}
            <div className="key equal" onClick={populateCalcul}><span>=</span></div>
          </div>
        </div>
      </main>
      <footer>
        <p>&copy; 2024 by BOUNYAMINE OUSMANOU</p>
      </footer>
    </div>
  );
};

export default App;
