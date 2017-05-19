import {EventEmitter} from 'events';

import dispatcher from '../dispatcher';

class TodoStore extends EventEmitter {
  constructor () {
    super();
    this.todos =  [{
      id: 1,
      text: 'Todo 1',
      complete: false
    }, {
      id: 2,
      text: 'Todo 2',
      complete: false
    }];
  }

  createTodo (text) {
    const id = Date.now();
    this.todos.push({
      id,
      text,
      complete: false
    });

    this.emit("change")
  }

  getAll() {
    return this.todos;
  }

  handleActions (action) {
    console.log('TodoStore  received an action');

    switch (action.type) {
      case "CREATE_TODO":
        this.createTodo(action.text)
      case "RECEIVE_TODO":
        this.todos = action.todos;
        this.emit("change");
    }
  }
}

const todoStore = new TodoStore();

dispatcher.register(todoStore.handleActions.bind(todoStore));
window.dispatcher = dispatcher;
export default todoStore;
