import React, {Component} from 'react';

export default class Todo  extends Component {
  constructor () {
    super();
  }

  render () {
    const {text} = this.props;
    return (
      <li>
        {text}
      </li>
    );
  }
}
