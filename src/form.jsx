'use strict';
import React from 'react';
import eventemitter from './eventemitter';

export default class Form extends React.Component {
  handleClick() {
    eventemitter.emit('addTodo', this.refs.field.value);
  }
  componentWillReceiveProps() {
    setTimeout(() => {
      if (!this.props.error) {
        this.refs.field.value = '';
      }
    }, 0);
  }
  render() {
    const style = this.props.error ?
      { backgroundColor: 'red' } : null;

    return (
      <p>
        <input ref="field" type="text" style={style} />
        {' '}
        <button onClick={this.handleClick.bind(this)}>add</button>
      </p>
    );
  }
}
