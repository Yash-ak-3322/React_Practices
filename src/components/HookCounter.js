import React, { useState } from "react";

function HookCounter() {
  let initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const [name, setName] = useState({ firstName: "", lastName: "" });

  return (
    <>
      <div className="text-black p-5">
        {" "}
        <h1>Working with Numberirc Type using Hooks :-)</h1>
        <div>
          Counter{" "}
          <div className="p-3 flex justify-center items-center text-yellow-400 bg-cyan-600 content-center my-3 mx-3 line-coverage">
            {count}{" "}
          </div>
          <t />
          <t />
          <button
            onClick={() => setCount((prevCount) => prevCount + 1)}
            className=" px-4 bg-blue-700 rounded transition-transform transform hover:scale-105 hover:bg-green-300 "
          >
            {" "}
            (+){" "}
          </button>
          <button
            onClick={() => setCount((prevCount) => prevCount - 1)}
            className="px-4 bg-blue-700 rounded transition-transform transform hover:scale-105 hover:bg-red-700"
          >
            {" "}
            (-){" "}
          </button>{" "}
          <t />
          <button
            onClick={() => setCount(initialCount)}
            className="px-4 bg-blue-700 rounded transition-transform transform hover:scale-105 hover:bg-red-700"
          >
            {" "}
            (Reset){" "}
          </button>{" "}
        </div>
        <div>
          {" "}
          Increment/Decrement 5 Times :-){" "}
          <button
            onClick={() => setCount((prevCount) => prevCount + 5)}
            className=" px-4 bg-blue-700 rounded transition-transform transform hover:scale-105 hover:bg-green-300 "
          >
            {" "}
            (+){" "}
          </button>
          <button
            onClick={() => setCount((prevCount) => prevCount - 5)}
            className="px-4 bg-blue-700 rounded transition-transform transform hover:scale-105 hover:bg-red-700"
          >
            {" "}
            (-){" "}
          </button>{" "}
        </div>
      </div>
      <div className="align-middle p-3">
        {" "}
        First Name :-){" "}
        <input
          type="text"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        ></input>{" "}
        <br />
        <br />
        Last Name :-){" "}
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        ></input>{" "}
        <br />
        <br />
        {name.firstName} | {name.lastName}
      </div>
    </>
  );
}

export default HookCounter;
