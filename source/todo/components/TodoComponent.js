import React, {Component} from 'react';

import Todo from './Todo';
import TodoStore from '../stores/TodoStore';

export default class TodoComponent extends Component {
  constructor () {
    super();
    this.state = {
      todos: TodoStore.getAll()
    };
  }

  componentWillMount() {
    TodoStore.on("change", () => {
        this.setState({
          todos: TodoStore.getAll()
        })
    })
  }

  render () {
    const {todos} = this.state;

    const TodoComponents = todos.map((todo) => {
      return <Todo key={todo.id} {...todo}/>
    });

    return (
      <div>
        <h1>Todo</h1>
        <ul>{TodoComponents}</ul>
      </div>
    )
  }
}
