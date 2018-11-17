import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import { Link } from 'react-router-dom';
import _ from 'lodash';

class PostsIndex extends Component {
  componentDidMount() { 
    // React method called one time (automatically) when component 
    // is rendered to DOM
    this.props.fetchPosts()
  }

  renderPosts() {
    // Takes an object of Posts and returns one <li> per Post
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={`/posts/${post.id}`}>
            { post.title } 
          </Link>
        </li>
      )
    })
  }

  render(){
    return(
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          { this.renderPosts() }
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { posts: state.posts }
}

export default connect(mapStateToProps, { fetchPosts } )(PostsIndex); // Identical to using MapStateToProps()
