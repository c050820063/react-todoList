import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItems extends Component {
  constructor(props) {
    super(props)
    this.handleDelet = this.handleDelet.bind(this)
  }

  render() {
    const { content } = this.props
    return (
      <li onClick={this.handleDelet}>{content}</li>
    )
  }

  handleDelet() {
    const { index, onDelete } = this.props
    onDelete(index)
  }
}

TodoItems.propTypes = {
  index: PropTypes.number,
  content: PropTypes.string,
  onDelete: PropTypes.func
}

export default TodoItems