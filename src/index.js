import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import ThemeContext, {themes} from "./theme-context";


ReactDOM.render(
  <ThemeContext.Provider value={themes.dark}>
    <App/>
  </ThemeContext.Provider>,
  document.getElementById('root')
);


