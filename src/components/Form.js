import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
    };
  }

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <h1>Username: </h1>
        <input
          type="text"
          value={this.state.username}
          onChange={this.handleUsernameChange}
        ></input>
        <p className="font-serif text-gray-400 flex justify-end items-end p-2 mx-2">
          Username :-) {this.state.username}
        </p>
      </div>
    );
  }
}

export default Form;
