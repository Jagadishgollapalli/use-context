import React from 'react';
import Test1 from './Test1';
import { CounterContext } from './context';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  increment = () => this.setState({ count: this.state.count + 1 });
  decrement = () => this.setState({ count: this.state.count - 1 });
  reset = () => this.setState({ count: 0 });

  render() {
    return (
      <CounterContext.Provider
        value={{
          count: this.state.count,
          increment: this.increment,
          decrement: this.decrement,
          reset: this.reset
        }}
      >
        <h3>Context-API / useState()</h3>
        <p>Counter - {this.state.count}</p>
        <button className="btn btn-success active" onClick={this.increment}>Increment</button>
        &nbsp;
        <button className="btn btn-success active" onClick={this.decrement}>Decrement</button>
        &nbsp;
        <button className="btn btn-success active" onClick={this.reset}>Reset</button>
        <Test1 />
      </CounterContext.Provider>
    );
  }
}
