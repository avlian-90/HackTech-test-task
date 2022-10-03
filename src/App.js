import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
       <h1>Test - Task</h1>
       <Link to="/login">Login</Link>
    </div>
  );
}

export default App;
