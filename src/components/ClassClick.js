import React, { Component } from "react";

class ClassClick extends Component {
  buttonClick() {
    console.log("Button Clicked ");
  } // If we use class compo. for event handling we need to use this.function()

  // Just because of this keywod, event binding is necesssary while working with class compo.
  // When we want to set state based on certain event click button click, we need to use event binding.
  // using bing method inside the render method onclick event this.function.bind(this).
  render() {
    return (
      <div>
        <button onClick={this.buttonClick}>Click Me :-) </button>
      </div>
    );
  }
}

export default ClassClick;
