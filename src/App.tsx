import React from 'react';
import logo from './logo.svg';
import './App.css';

import CostOverview from './components/CostOverview';
import Estimator from './components/Estimator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Test von Jure
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
        <CostOverview />
        <Estimator />
      </main>
    </div>
  );
}

export default App;
