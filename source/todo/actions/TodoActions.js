import dispatcher from '../dispatcher';

export function createTodo (text) {
  dispatcher.dispatch({
    type: "CREATE_TODO",
    text
  });
}

export function deleteTodo () {
  dispatcher.dispatch({
    type: "DELETE_TODO",
    id
  })
}

export function reloadTodo () {
  dispatcher.dispatch({
    type: "FETCH_TODO"
  })

  setTimeout(() => {
    dispatcher.dispatch({
      type: "RECEIVE_TODO",
      todos: [{
        id: 3,
        text: 'Step',
        complete: false
      }, {
        id: 4,
        text: 'PPN',
        complete: false
      }]
    });
  }, 1000);

  if (false) {
    dispatcher.dispatch({
      type: "RECEIVE_TODOS_ERROR"
    })
  }
}
