import React from 'react';
import logo from './logo.svg';
import './App.css';
import SayHello from './components/SayHello/SayHello'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Moja pierwsza aplikacja React-TypeScript</h1>
        <SayHello name="Mati" />
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
