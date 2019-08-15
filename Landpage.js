import React, { Component } from "react";
import { StyleSheet, ScrollView, View, Text, StatusBar } from "react-native";

export default class Landpage extends Component {
  render() {
    return (
      <View>
        <Text> Component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center"
  }
});
