'use strict';
import React from 'react';
import eventemitter from './eventemitter';
import Form from './form.jsx';
import List from './list.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      error: false
    };
  }
  addTodo(value) {
    if (!value.trim()) {
      return this.setState({ error: true });
    }

    const todos = this.state.todos;
    const todo = { value, id: Date.now() };
    todos.push(todo);
    this.setState({ todos, error: false });
  }
  componentWillMount() {
    eventemitter.on('addTodo', this.addTodo.bind(this));
  }
  render() {
    return (
      <div>
        <Form error={this.state.error} />
        <List items={this.state.todos} />
      </div>
    );
  }
}
