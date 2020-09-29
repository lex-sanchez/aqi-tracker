import React from 'react';
import './App.css';
import Header from "./components/Header";
import { AqiChecker } from "./components/AqiChecker";

function App() {
  return (
    <div className="App">
        <Header />
        <AqiChecker />
    </div>
  );
}

export default App;
