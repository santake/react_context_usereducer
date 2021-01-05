

import React from 'react';
import {useLocalStorageState} from "./useLocalStorageState";

export const Counter = () => {
  // use your own Hook:
  const [count, setCount] = useLocalStorageState("myapp-counter", 0);

  return (
    <>
      <h3>Counter from Local Storage (hook)</h3>
      <button onClick={ () => setCount(count+1) } >Current number: {count}</button>

    </>
  );


};