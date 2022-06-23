import React, { useState, useReducer } from 'react';

import logo from './logo.svg';
import './App.css';
import Form from './Form';
import List from './List';
import todoReducer from './todoReducer';

function App() {
  let [items, dispatch] = useReducer(todoReducer, []);

  const handleAdd = text => {
    dispatch({ type: 'ADD_TODO', text });
  };

  const handleDelete = id => {
    dispatch({ type: 'DELETE_TODO', id });
  };

  return (
    <div className="App">
      <Form onAdd={handleAdd} />
      <List items={items} onDelete={handleDelete} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
    </div>
    
  );
}

export default App;