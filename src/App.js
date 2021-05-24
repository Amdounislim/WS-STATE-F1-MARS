import React, { Component } from "react";
import "./App.css";
import Counter from "./components/Counter";

export default class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: "Mariem",
  //     age: 20,
  //   };
  // }
  state = {
    name: "Slim",
    age: 20,
    adress: { country: "Tunis", city: "Bardo" },
    count: 0,
    // myInput:"",
    arr: ["Mehdi", "Ines"],
  };

  add = (y) => {
    this.setState({
      arr: [...this.state.arr, y],
    });
  };

  handelChange = (x) => {
    this.setState({
      myInput: x,
    });
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrement = () => {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1,
      });
    }
  };

  render() {
    const {
      name,
      age,
      adress: { country, city },
      count,
      myInput,
    } = this.state;
    return (
      <div className="App">
        {/* <h2>{this.state.name}</h2>
        <span>{this.state.age}</span> */}
        {/* <h2>{name}</h2>
        <span>{age}</span>
        <span>{country}</span>
        <span>{city}</span> */}

        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        {/* <h3>{count}</h3> */}
        {/* <Counter x={count} handelChange={this.handelChange} /> */}
        <Counter add={this.add} />
        {/* <p>{myInput}</p> */}
        {this.state.arr.map((el) => (
          <h2>{el}</h2>
        ))}
      </div>
    );
  }
}
