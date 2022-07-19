import { Button, StatusBar, Text, View } from "react-native";
import React, { Component } from "react";
import Test from "./Test";

export default class App extends Component {
  constructor() {
    super();
    this.state = { name: "nirav", show: true, number: 0 };
    console.log("constructor");
  }

  componentDidMount() {
    console.log("Componet did Mount");
  }

  updateName() {
    this.setState({ name: "abc" });
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
    if (this.state.number == 0)
      this.setState({ show: !this.state.show, number: 1 });
  }

  render() {
    console.log("render");
    return (
      <View>
        <StatusBar hidden />
        <Text>{this.state.name}</Text>
        {this.state.show && <Test test={this.state.name} />}
        <Button title="abcd" onPress={() => this.updateName()} />
      </View>
    );
  }
}
