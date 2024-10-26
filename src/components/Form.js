import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      desc: "",
      skill: "React JS",
    };
  }

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handleOccupationChange = (event) => {
    this.setState({
      desc: event.target.value,
    });
  };

  handleSelectionChange = (event) => {
    this.setState({ skill: event.target.value });
  };

  handleSubmit = (event) => {
    alert(`${this.state.username} | ${this.state.desc} | ${this.state.skill}`);
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Username: </h1>
        <input
          type="text"
          value={this.state.username}
          onChange={this.handleUsernameChange}
        ></input>
        <h1>Occupation: </h1>
        <textarea
          value={this.state.desc}
          onChange={this.handleOccupationChange}
        ></textarea>
        <h1>Skill Selection Panel: </h1>
        <select value={this.state.skill} onChange={this.handleSelectionChange}>
          <option value="React JS">React JS</option>
          <option value="Next JS">Next JS</option>
          <option value="Node JS">Node JS</option>
        </select>
        <br />
        <button
          className="flex justify-center items-center p-2 mx-12 my-3 bg-yellow-400 rounded-lg"
          type="submit"
        >
          Submit
        </button>

        <p className="font-serif text-blue-700 flex justify-center items-center p-2 mx-2">
          Username :-) {this.state.username} |<br /> Occupation :-){" "}
          {this.state.desc} |<br /> Skills :-) {this.state.skill} |
        </p>
      </form>
    );
  }
}

export default Form;
