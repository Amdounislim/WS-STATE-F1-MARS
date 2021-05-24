import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    myInput: "",
  };

  render() {
    return (
      <div>
        <h3>{this.props.x}</h3>

        <input
          type="text"
          //   onChange={(e) => this.props.handelChange(e.target.value)}
          onChange={(e) => this.setState({ myInput: e.target.value })}
        />
        <button onClick={()=>this.props.add(this.state.myInput)}>Add</button>
      </div>
    );
  }
}
