import React from 'react';
import axios from 'axios';
import './App.css';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Header from '../Header/Header';
import { HashRouter as Router, Route } from 'react-router-dom'

function App() {

  return (
    <Router>
      <div className='App'>

        <Header />

        <Route exact path="/">
          <Feeling />
        </Route>

        <Route exact path="/understanding">
          <Understanding />
        </Route>

        <Route exact path="/support">
          <Support />
        </Route>

        <Route exact path="comments">
          <Comments />
        </Route>

      </div>
    </Router>
  );
}

export default App;


