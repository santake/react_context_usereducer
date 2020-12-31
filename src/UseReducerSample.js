import React, {useReducer} from "react";

const initialState = {count: 0};

const countReducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  };
};


export default () => {
  const [state, invoke] = useReducer(countReducer, initialState);

  return (
    <>
      <h3>tried to utilize 'useReducer()' --- and counted: {state.count} </h3>

      <button onClick={()=> invoke({type:'decrement'})}> - </button>
      &nbsp;
      <button onClick={()=> invoke({type:'increment'})}> + </button>
    </>
  );
}