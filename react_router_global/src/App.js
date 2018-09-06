import React, { Component } from 'react';
import './App.css';
import Post from './Post.js';


const post = {
  title: 'Welcome to the Blog of',
  author: 'Andres',
  body: 'This is the body!',
  comments: [ 'Was cool', 'Would read again' ]
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Post
          title = { post.title }
          author = { post.author }
          body = { post.body }
          comments = { post.comments }
        />
      </div>
    );
  }
}

// if component cannot be imported, use Post as default
export default App;
