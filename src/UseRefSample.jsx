import React, {useRef} from "react";

export const UseRefSample = () => {
  const textInputRef = useRef(null);

  const handleClick = () => {
    textInputRef.current.focus();
  }
  return (
    <div>
      <h4>Test of <pre>useRef()</pre></h4>
      <input type={'text'}
             ref={textInputRef}/>

      <input type={'button'} value={'Click me to focus the field!'}
             onClick={handleClick}/>
    </div>
  );
};


