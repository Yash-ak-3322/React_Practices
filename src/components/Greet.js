import React from "react";

function Greet(props) {
  const { name } = props;
  return (
    <div>
      <h1 className="text-2xl font-mono text-orange-600">
        {" "}
        Welcome {name} :-)
      </h1>
    </div>
  );
}

export default Greet;
