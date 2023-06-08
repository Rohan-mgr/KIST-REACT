import { Component } from "react";

class Rohan extends Component {
  constructor() {
    super();
    this.state = {
      color: "red",
    };
  }
  componentDidUpdate() {
    document.body.style.backgroundColor = this.state.color;
  }
  render() {
    return (
      <>
        <button onClick={() => this.setState({ color: "red" })}>Red</button>
        <button onClick={() => this.setState({ color: "green" })}>Green</button>
        <button onClick={() => this.setState({ color: "yellow" })}>
          Yellow
        </button>
        <button onClick={() => this.setState({ color: "blue" })}>Blue</button>
      </>
    );
  }
}
export default Rohan;
