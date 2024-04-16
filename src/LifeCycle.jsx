import React, { Component } from "react";
// import Life from "./Life.jsx";

export class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "tenny",
      age: 6238,
      mount: false,
    };
  }
  // static getDerivedStateFromProps(props, state) {
  //   return { age: props.age, name: props.name };
  // }

  componentDidMount() {
    console.log("componet mounted");
  }
  componentDidUpdate() {
    console.log("componet UPDATED");
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("pre").innerText = prevState.name;
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.name !== this.state.name) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
      <div>
        {this.state.name} - {this.state.age} - {this.props.props} <br />
        <button onClick={() => this.setState({ name: "welcome" })}>
          Change
        </button>{" "}
        <br />
        <h1 id="pre">Previous Value</h1>
        {/* {this.state.mount && <Life />}
        <button onClick={() => this.setState({ mount: true })}>
          Unmount Component
        </button> */}
      </div>
    );
  }
}

export default LifeCycle;
// import React, { useState } from "react";

// const LifeCycle = (props) => {
//   let [count, setCount] = useState(0);
//   return <div>{count} - {props.props}</div>;
// };

// export default LifeCycle;
