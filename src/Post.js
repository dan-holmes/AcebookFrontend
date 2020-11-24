import React from 'react';

class Post extends React.Component {
  render() {
    return (
      <div className="post">
        {this.props.data.message}<br />
        {this.props.data.username}<br />
        {this.props.data.created_at}<br /><br />
      </div>
    )
  }
}

export default Post;