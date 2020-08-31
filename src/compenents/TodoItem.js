import React, { Component } from "react";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      backgroundColor: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };

  render() {
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" /> {"  "}
          {this.props.todo.title}
        </p>
      </div>
    );
  }
}

export default TodoItem;
