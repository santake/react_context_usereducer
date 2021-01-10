// Reference:
// https://www.youtube.com/watch?v=-Ls48dd-vJE

import React, {useState, useRef, useCallback} from 'react';

export const TestUseCallback = () => {
  const [counter, setCounter] = useState(0);

  const incrementCallback = useCallback((n = 1) => {
      setCounter(c => c + n);
    }, [setCounter]
  );

  return (
    <div>
      {/*
      <Counter increment={()=> setCounter(counter + 1)}/>
      NOTE:
      If you do like this, everytime you click the button, the function will be created.
      Instead, use 'useCallback' feature.
      */}

      <Counter increment={incrementCallback}/>
      <div>Counted: {counter}</div>
    </div>
  );
}


// useMemo() is important: it check if the value 'increment' changes or not, and rerender it only if the value changes.
export const Counter = React.memo(({increment}) => {
  useCountRenders();
  return <button onClick={ () => increment(3) }>Count up!</button>;
});


// this is only to check if the function is (re)rendered.
export const useCountRenders = () => {
  const renders = useRef(0);
  console.log("renders: " + renders.current++);
}