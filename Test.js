import { Text, View } from "react-native";
import React, { Component } from "react";

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = { val: this.props.test };
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  render() {
    return (
      <View>
        <Text>
          {this.props.test}
          {this.state.val}
        </Text>
      </View>
    );
  }
}
