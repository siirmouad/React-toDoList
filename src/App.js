import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./compenents/layout/Header";
import Todos from "./compenents/Todos";
import AddTodo from "./compenents/AddTodo";
import "./App.css";
import { v4 as uuid } from "uuid";

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4,
        title: "Take out the trash",
        completed: false,
      },
      {
        id: uuid.v4,
        title: "finish homework",
        completed: false,
      },
      {
        id: uuid.v4,
        title: "Do laundry",
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

  // Add Todo
  AddTodo = (title) => {
    const newTodo = {
      id: uuid.v4,
      title: title,
      completed: false,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <AddTodo AddTodo={this.AddTodo} />
            <Todos
              todos={this.state.todos}
              markComplete={this.markComplete}
              markDelete={this.markDelete}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
