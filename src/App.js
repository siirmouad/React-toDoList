import React, { Component } from "react";
import Todos from "./compenents/Todos";
import "./App.css";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Take out the trash",
        completed: false,
      },
      {
        id: 2,
        title: "finish homework",
        completed: false,
      },
      {
        id: 3,
        title: "Do laundrey",
        completed: false,
      },
    ],
  };

  markComplete = (id) => {
    console.log(id);
  };

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete} />
      </div>
    );
  }
}

export default App;
