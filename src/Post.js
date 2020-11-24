import React from 'react';

class Post extends React.Component {
  render() {
    return (
      <div className="post">
        <div className="post-info">
          <span className="post-username">{this.props.data.username}</span>&nbsp;
          <span className="post-created-at">{this.props.data.created_at}</span>
        </div>
        <div className="post-message">
          {this.props.data.message}
        </div>
      </div>
    )
  }
}

export default Post;