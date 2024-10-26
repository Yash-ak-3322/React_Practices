import React, { useEffect, useState } from "react";

function UseEffectHook() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You Clicked ${count} times`;
  });

  // useEffect runs after every render
  // For Conditionally render the useEffect Hook, we need to pass in parameter as an array.
  // E.g. :- [count]

  return (
    <>
      <div>UseEffect Hook Demo :-)</div>

      <div>
        <button
          onClick={() => setCount((prevCount) => prevCount + 1)}
          className="bg-rose-600 p-2 mx-3 my-3 rounded-md text-white font-medium transition-transform transform hover:scale-110 hover:bg-green-500 "
        >
          Counter :- {count}
        </button>
      </div>
    </>
  );
}

export default UseEffectHook;
