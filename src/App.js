import React, {useContext} from 'react';

import ThemeContext from "./theme-context";

import './App.css';
import UseReducerSample from "./UseReducerSample";
import {UseRefSample} from "./UseRefSample";


function App() {
  const theme = useContext(ThemeContext);

  return (
    <div className="App">
      <h1>Context Test</h1>
      <div style={
        {
          background: theme.background,
          color: theme.foreground,
          margin: "5px",
          padding: "1em"
        } }>
        This is a house that Jack built.
      </div>

      <UseReducerSample/>

      <hr/>

      <UseRefSample/>


    </div>
  );
}

export default App;
