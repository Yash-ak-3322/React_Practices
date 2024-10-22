import React from "react";

function ChildCompo({ greetParent }) {
  return (
    <>
      <div className="flex justify-center items-center font-mono ">
        <button onClick={() => greetParent("Child")}>Click :)</button>
        {/* Pass the Value by calling the props from parent  */}
      </div>
    </>
  );
}

export default ChildCompo;
