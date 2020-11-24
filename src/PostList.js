import React from 'react';
import Post from './Post.js'

class PostList extends React.Component {
  render() {
    return (
      <div className="post-list" >
        {this.props.posts.map((post) =>
          <Post data={post} key={post.id} />
        )}
      </div>
    )
  }
}

export default PostList;