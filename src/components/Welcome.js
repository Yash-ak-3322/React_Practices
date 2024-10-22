import React, { Component } from "react";

class Welcome extends Component {
  render() {
    const { name } = this.props;
    return (
      <div>
        <h1 className="text-4xl font-bold font-serif text-blue-500 my-3">
          Hey getting start with {name} :-){" "}
        </h1>
      </div>
    );
  }
}

export default Welcome;
