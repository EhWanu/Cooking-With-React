import React from 'react';
import Counter from './Counter';
import CounterHooks from './CounterHooks';

function App() {
  
  return (
    <>
    <Counter initialCount={0} />
    <CounterHooks initialCount={0} />
    </>
   )
}

export default App;
