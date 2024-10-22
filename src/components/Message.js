import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      Message: "Warm Welcome Guests :) ",
      Counter: 0,
    };
  }

  // We can us State in Class Compo. with calling the class constructor.
  // After we need to set the state using This.State = {}
  // For trigger the click event, we can pass the Function call using ES6.
  // Inside the setState method, we pass one object as state and callback function.

  onClickEvent() {
    this.setState({
      Message: "Thank u for Visiting ",
    });
    console.log(this.state.Message);
  }

  incrementState() {
    this.setState(
      {
        Counter: this.state.Counter + 1,
      },
      () => {
        console.log(this.state.Counter);
      }
    );
  }

  decrementState() {
    this.setState(
      (prevState, props) => ({
        Counter: prevState.Counter - 1,
      }),
      () => {
        console.log(this.state.Counter);
      }
    );
  }

  render() {
    // const { state1, state2 } = this.state;
    return (
      <div>
        <h1 className="font-mono ">{this.state.Message}</h1>
        <button
          onClick={() => this.onClickEvent()}
          className="justify-center items-center p-3 my-5 mx-16 rounded-xl bg-blue-500 text-white"
        >
          Enjoy
        </button>
        <p>
          <div>
            Counter :- {this.state.Counter}{" "}
            <button
              onClick={() => this.incrementState()}
              className="bg-blue-500 mx-3 text-white font-bold py-2 px-4 rounded transition-transform transform hover:scale-105 hover:bg-green-500"
            >
              {" "}
              Increment (+){" "}
            </button>{" "}
            <button
              onClick={() => this.decrementState()}
              className="bg-blue-500 mx-3 text-white font-bold py-2 px-4 rounded transition-transform transform hover:scale-105 hover:bg-red-700"
            >
              {" "}
              Decrement (-){" "}
            </button>{" "}
          </div>
        </p>
      </div>
    );
  }
}

export default Message;
