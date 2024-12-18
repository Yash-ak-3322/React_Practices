import React, { Component } from "react";
import ChildCompo from "./ChildCompo";

class ParentCompo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Parent",
    };
    // Don't Forget, whenever we use click event make sure we do event binding
    this.buttonClick = this.buttonClick.bind(this);
  }

  buttonClick(childname) {
    // Get the Para from Child Compo.
    alert(`Message From ${this.state.message} Component from ${childname}`);
  }

  render() {
    return (
      <div>
        <header>Child Component</header>
        <ChildCompo greetParent={this.buttonClick} />{" "}
        {/* Just pass the instance of method as props */}
      </div>
    );
  }
}

export default ParentCompo;
