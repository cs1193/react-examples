import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route} from 'react-router-dom';

import Example from '../source/index';
import TodoComponent from '../source/todo/index';
import Settings from '../source/components/Settings'

const example = document.getElementById('example');

// ReactDOM.render(<Example />, example);

ReactDOM.render(
  <HashRouter>
    <div>
      <Route path="/example" component={Example}></Route>
      <Route path="/todo" component={TodoComponent}></Route>
      <Route path="/settings" component={Settings}></Route>
    </div>
  </HashRouter>,
example);
