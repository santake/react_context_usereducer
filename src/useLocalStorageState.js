// Example of Original Hook

// https://blog.bitsrc.io/writing-your-own-custom-hooks-4fbcf77e112e

import React, {useState, useEffect} from "react";

export const useLocalStorageState = (key, defaultValue) => {
  const [state, setState] = useState(()=> {
    let value;
    try {
      value = JSON.parse(
        window.localStorage.getItem(key) || String(defaultValue)
      );
    } catch(e) {
      value = defaultValue;
    }
    return value;
  });

  useEffect( () => {
    window.localStorage.setItem(key, state);
  }, [state]);

  return [state, setState];
} ;

