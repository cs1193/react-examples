import React, {Component} from 'react';

import Todo from './Todo';
import * as TodoActions from '../actions/TodoActions';
import TodoStore from '../stores/TodoStore';

export default class TodoComponent extends Component {
  constructor () {
    super();
    this.getTodos = this.getTodos.bind(this);
    this.state = {
      todos: TodoStore.getAll()
    };
  }

  componentWillMount() {
    TodoStore.on("change", this.getTodos)
    console.log(TodoStore.listenerCount("change"))
  }

  componentWillUnmount () {
    TodoStore.removeListener("change", this.getTodos);
  }

  getTodos() {
    this.setState({
      todos: TodoStore.getAll()
    });
  }

  reloadTodo () {
    TodoActions.reloadTodo(Date.now());
  }

  render () {
    const {todos} = this.state;

    const TodoComponents = todos.map((todo) => {
      return <Todo key={todo.id} {...todo}/>
    });

    return (
      <div>
        <button onClick={this.reloadTodo.bind(this)}>Reload</button>
        <h1>Todo</h1>
        <ul>{TodoComponents}</ul>
      </div>
    )
  }
}
