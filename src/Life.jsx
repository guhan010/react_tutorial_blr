import React, { Component } from "react";

class Life extends Component {
  // static getDerivedStateFromProps(props, state) {
  //   return { age: props.age, name: props.name };
  // }

  componentDidMount() {
    console.log("life");
  }
  componentWillUnmount() {
    alert(" life component unmounted");
  }

  render() {
    return <div>Life</div>;
  }
}

export default Life;
