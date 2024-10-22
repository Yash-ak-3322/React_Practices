import React from "react";

function ChildCompo({ greetParent }) {
  return (
    <>
      <div className="flex justify-center items-center font-mono ">
        <button onClick={greetParent}>Click :)</button>
      </div>
    </>
  );
}

export default ChildCompo;
