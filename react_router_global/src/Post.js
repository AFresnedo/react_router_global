import React, { Component } from 'react';
import './App.css';
import Comment from './Comment';

class Post extends Component {
  render() {
    const allComments = this.props.comments;
    return (
      <div className="App">
        <h1>{ this.props.title }</h1>
        <p>{ this.props.author }</p>
        <p>{ this.props.body }</p>
        <h3>Comments</h3>

        { allComments.map( item => {
          return <Comment
            individualComment = { item }
            />
        })}
      </div>
    );
  }
}

// if component cannot be imported, use Post as default
export default Post;
