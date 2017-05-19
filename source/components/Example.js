import React, {Component} from 'react';
import Header from './Header';

export default class Example extends Component {
  constructor () {
    super();
    this.cname = 'cname';
    // this.state === null by default is nulls
    this.state = {
      statename: 'Will',
      title: 'Title Pass'
    }
  }
  getVal (value) {
    return 'value ' + value + ' returned';
  }

  changeTitle (title) {
    this.setState({title});
  }

  render () {
    const name = "Hello";
    setTimeout(() => {
      this.setState({
        statename: 'Rob'
      })
    }, 1000)
    const title = "Welcome Will!";
    // setTimeout(() => {
    //   this.setState({
    //     title: 'Title Place'
    //   })
    // }, 2000)
    return (
      <div>
        <Header changeTitle={this.changeTitle.bind(this)} title={title} name={this.state.title} />
        It's {name} {3 + 2} {(function () { return 'Anonymous Function'; })} {this.getVal(1)} {this.cname} <br/>
        State: {this.state.statename} // React only updates, that particular dom element using ID and does not render if there are no changes to the state variable
      </div>
    );
  }
}
