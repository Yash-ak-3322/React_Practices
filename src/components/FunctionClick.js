import React from "react";

function FunctionClick() {
  function buttonClick() {
    console.log("Button Clicked");
    // When we use Event handling, we use function not function call in para.
  } // Passing the function as parameter not Function call in Click Event
  return (
    <div>
      <button onClick={buttonClick}>Click Me :-) </button>
    </div>
  );
}

export default FunctionClick;
