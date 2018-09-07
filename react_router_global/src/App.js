import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// components
import Post from './Post.js';
import Landing from './Landing.js';


const post = {
  title: 'This is THE Blog (only one on this localhost anyway)',
  author: 'By Andres',
  body: 'This is the body!',
  comments: [ 'Was cool', 'Would read again' ]
};

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <Link to='/'>Landing</Link>{' '}
            <Link to='/blog'>Blog</Link>{' '}
          </nav>
          <Route exact path='/' component={Landing} />
          <Route path='/blog' component={
            () => (<Post post={post} />) } />
        </div>
      </Router>
    );
  }
}

// if component cannot be imported, use Post as default
export default App;
