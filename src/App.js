import React, {useContext} from 'react';

import ThemeContext from "./theme-context";

import './App.css';
import UseReducerSample from "./UseReducerSample";
import {UseRefSample} from "./UseRefSample";
import {Counter} from './LocalStorageCounter';
import {FuncComp} from "./FuncComp";
import {Clock} from "./Clock";
import {TestUseCallback} from "./TestUseCallback";

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

      <hr/>
      <Counter/>

      <hr/>
      <FuncComp/>
      <FuncComp name={'hanage'}/>
      {/*
      <hr/>
      <Clock/>
*/}

      <hr/>
      <TestUseCallback/>
    </div>
  );
}

export default App;
