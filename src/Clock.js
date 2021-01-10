import React, {useState, useEffect} from 'react';

export const Clock = (props) => {

  const [now, setNow] = useState(new Date());

  useEffect(() => {
    setNow(new Date());
  }, [now]);

  return (
    <>
      <h3>Clock Test</h3>
      <h4>{now.toLocaleDateString() + "  " + now.toLocaleTimeString()}</h4>
    </>
  );
}