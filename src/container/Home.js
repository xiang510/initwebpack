import React, { Component } from "react";
import Text from "../component/Text";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: "Hello React!"
    };
  }
  componentDidMount() {
    console.log("1111111");
  }
  render() {
    return <Text value={this.state.hello} />;
  }
}

export default Home;
