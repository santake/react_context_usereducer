import React, {useState, useEffect} from "react";

export const Hello = (props) => {
  if (props.name) {
    return <h1>Hello, {props.name}</h1>;
  } else {
    return <h1>Hey, stranger</h1>;
  }
};


export const Toggle = (props) => {
  const [state, setState] = useState(false);
  return (
    <button
      onClick={()=> {
        setState(prevState => !prevState);
        props.onChange(!state);
      }}
      data-testid={'toggle'}>
      {state === true ? "Turn off" : "Turn on"}
    </button>
  );
};