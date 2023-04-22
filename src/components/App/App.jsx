import React from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header';
import Welcome from '../Welcome/Welcome';

function App() {

  return (
    <div className='App'>
      <Header />
      <Welcome />
    </div>
  );
}

export default App;
