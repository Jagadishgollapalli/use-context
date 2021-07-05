import React from 'react';
import Test3 from './Test3';
import { CounterContext, NameContext } from './context';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Test2() {
  const counterContext = React.useContext(CounterContext);
  const nameContext = React.useContext(NameContext);

  const incrementFromTest2 = () => {
    console.log('incrementFromTest2');
    counterContext.increment();
  };

  return (
    <>
      <h2>Section B</h2>
      <p>Name - {nameContext.name}</p>
      <p><b>Counter - {counterContext.count}</b></p>
      <button className="btn btn-danger active" onClick={incrementFromTest2}>Increment - B
      </button>&nbsp;
      <button className="btn btn-danger active" onClick={counterContext.decrement}>Decrement - B</button>
      &nbsp;
      <button className="btn btn-danger active" onClick={counterContext.reset}>Reset - B</button>
      <NameContext.Provider value={{ name: 'Guvi' }}>
        <Test3 />
      </NameContext.Provider>
    </>
  );
}
