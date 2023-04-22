import React from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header';
import Welcome from '../Welcome/Welcome';
import Feeling from '../Steps/Feeling';
import Content from '../Steps/Content';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {

  return (
    <div className='App'>
      <Router>
        <Header />
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route exact path={"/feeling"}>
          <Feeling />
        </Route>
        <Route exact path="/content">
          <Content />
        </Route>
      </Router>

    </div>
  );
}

export default App;
