import {EventEmitter} from 'events';

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
}

const todoStore = new TodoStore();

export default todoStore;
