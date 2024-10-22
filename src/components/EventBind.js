import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    // Just because of this keywod, event binding is necesssary while working with class compo.
    // When we want to set state based on certain event click button click, we need to use event binding.

    // Approaches to deal with :-)
    // using bing method inside the render method onclick event this.function.bind(this).
    // Using Arrow function inside the render method
    // Using bind method inside the constructor
    // Change the way to define the method inside the class using arrow function.

    // 4 Ways : Binding in render, Arrow function in render, Binding in Class Constructor and Class Property as Arrow Function.

    this.state = {
      message: "Hello",
    };

    // this.buttonClick = this.buttonClick.bind(this); Bing inside constructor
  }

  //   buttonClick() {
  //     this.setState({
  //       message: "GoodBye",
  //     });
  //   }

  buttonClick = () => {
    this.setState({ message: "GoodBye" });
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* <button onClick={this.buttonClick.bind(this)}>  Using Bind Method*/}
        {/* <button onClick={() => this.buttonClick()}>  Using Arrow Function*/}
        <button onClick={this.buttonClick}>Click Event Binding </button>
      </div>
    );
  }
}

export default EventBind;
