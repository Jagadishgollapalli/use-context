import React from 'react';
import Test2 from './Test2';
import { CounterContext, NameContext } from './context';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Test1 extends React.Component {
  incrementFromTest1 = () => {
    console.log('incrementFromTest1');
    this.context.increment();
  };
  static contextType = CounterContext;

  render() {
    return (
      <NameContext.Consumer>
        {nameContext => {
          return (
            <>
              <h2>Section A</h2>
              <p>Name - {nameContext.name}</p>
              <p><b>Counter - {this.context.count}</b></p>
              <button className="btn btn-danger active" onClick={this.incrementFromTest1}>
                Increment - A
              </button>&nbsp;
              <button className="btn btn-danger active" onClick={this.context.decrement}>
                Decrement - A
              </button>&nbsp;
              <button className="btn btn-danger active" onClick={this.context.reset}>Reset - A</button>
              <Test2 />
            </>
          );
        }}
      </NameContext.Consumer>
    );
  }
}
