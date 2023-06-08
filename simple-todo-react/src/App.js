import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      todoList: [],
    };
  }
  handleSubmit(e) {
    e.preventDefault();
    const newTodo = [...this.state.todoList, this.state.input];
    this.setState({ todoList: newTodo, input: "" });
  }
  handleChange(e) {
    this.setState({ input: e.target.value });
  }
  render() {
    return (
      <div className="App">
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            type="text"
            value={this.state.input}
            onChange={(e) => this.handleChange(e)}
            placeholder="Enter your todo list"
          />
          <button type="submit">Add</button>
        </form>
        {this.state.todoList.length > 0 ? (
          <ol>
            {this.state.todoList.map((todo, i) => {
              return <li key={i}>{todo}</li>;
            })}
          </ol>
        ) : (
          <p>No Todo list items</p>
        )}
      </div>
    );
  }
}

export default App;
