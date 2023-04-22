import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from '../Header';
import Welcome from '../Welcome/Welcome';
import Feeling from '../Steps/Feeling';
import Content from '../Steps/Content';
import Support from '../Steps/Support';
import Comment from '../Steps/Comment';
import Review from '../Steps/Review';

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
        <Route exact path="/support">
          <Support />
        </Route>
        <Route exact path="/comment">
          <Comment />
        </Route>
        <Route exact path="/review">
          <Review />
        </Route>
      </Router>
    </div>
  );
}

export default App;
