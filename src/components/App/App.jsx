import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from '../Header';
import Welcome from '../Welcome/Welcome';
import Feeling from '../Steps/Feeling';
import Content from '../Steps/Content';
import Support from '../Steps/Support';
import Comment from '../Steps/Comment';
import Review from '../Steps/Review';
import Success from '../Steps/Success';
import Admin from '../Admin/Admin';

function App() {

  return (
    <div className='App'>
      {/* Using React Router to navigate between components */}
      <Router>
        <Header />
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route exact path="/feeling">
          <Feeling />
        </Route>
        <Route exact path="/content">
          <Content />
        </Route>
        <Route exact path="/support">
          <Support />
        </Route>
        <Route exact path="/comments">
          <Comment />
        </Route>
        <Route exact path="/review">
          <Review />
        </Route>
        <Route exact path="/success">
          <Success />
        </Route>
        <Route exact path="/admin">
          <Admin />
        </Route>
      </Router>
    </div>
  );
}

export default App;
