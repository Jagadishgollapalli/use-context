import React from 'react';
import { CounterContext, NameContext } from './context';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Test3() {
  return (
    <CounterContext.Consumer>
      {counterContext => {
        return (
          <NameContext.Consumer>
            {nameContext => {
              return (
                <>
                  <h2>Section C</h2>
                  <p>Name - {nameContext.name}</p>
                  <p><b>Counter - {counterContext.count}</b></p>
                  <button className="btn btn-danger active mb-5" onClick={counterContext.increment}>
                    Increment-C
                  </button>&nbsp;
                  <button className="btn btn-danger active mb-5" onClick={counterContext.decrement}>
                    Decrement-C 
                  </button>&nbsp;
                  <button className="btn btn-danger active mb-5" onClick={counterContext.reset}>Reset-C</button>
                </>
              );
            }}
          </NameContext.Consumer>
        );
      }}
    </CounterContext.Consumer>
  );
}
