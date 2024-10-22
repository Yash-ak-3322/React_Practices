import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      Message: "Warm Welcome Guests :) ",
      Counter: 0,
    };
  }

  onClickEvent() {
    this.setState({
      Message: "Thank u for Visiting ",
    });
  }

  incrementState() {
    this.setState({
      Counter: this.state.Counter + 1,
    });
  }

  decrementState() {
    this.setState((prevState, props) => ({
      Counter: prevState.Counter - 1,
    }));
  }

  render() {
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
