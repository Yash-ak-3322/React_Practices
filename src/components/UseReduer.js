import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 5;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }

  //   return newState;
};

export default function UseReduer() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>Count :-) {count}</div>
      <div>
        <button onClick={() => dispatch("increment")}>Increment (+)</button>{" "}
        <t />
        <button onClick={() => dispatch("decrement")}>
          Decrement (-)
        </button>{" "}
        <t />
        <button onClick={() => dispatch("reset")}>Reset (:)</button>
      </div>
    </div>
  );
}
