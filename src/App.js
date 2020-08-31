import React, { Component } from "react";
import Header from "./compenents/layout/Header";
import Todos from "./compenents/Todos";
import AddTodo from "./compenents/AddTodo";
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

  // toggle Complete

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };
  //Delete Todo
  markDelete = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo />
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            markDelete={this.markDelete}
          />
        </div>
      </div>
    );
  }
}

export default App;
