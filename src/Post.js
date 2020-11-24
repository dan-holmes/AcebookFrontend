import React from 'react';

class Post extends React.Component {
  render() {
    return (
      <div className="post">
        <div className="post-message">
          {this.props.data.username}: {this.props.data.message}
        </div>
        <div className="post-created-at">
          {this.props.data.created_at}
        </div>
      </div>
    )
  }
}

export default Post;