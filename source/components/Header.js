import React, {Component} from 'react';

export default class Header extends Component {
  handleChange (e) {
    const title = e.target.value;
    this.props.changeTitle(title);
  }

  render () {
    console.log(this.props);
    return (
      <header>
        {this.props.title} <br />
        {this.props.name}
        <input value={this.props.name} onChange={this.handleChange.bind(this)} />
      </header>
    );
  }
}
