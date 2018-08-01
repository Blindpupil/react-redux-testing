import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentList extends Component {
  renderComments() {
    return this.props.comments.map(comment => <li key={comment}> {comment} </li>)
  }

  render() {
    return (
      <div>
        <h2>Comment List</h2>
        <ul>
          {this.renderComments()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({comments}) {
  return {
    comments
  }
}

export default connect(mapStateToProps)(CommentList);