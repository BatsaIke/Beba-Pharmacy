import React, { Component } from "react";
import { StyleSheet, ScrollView, View, Text, } from "react-native";
import firebaseApp from './App/firebase';




//cd android
//./gradlew clean



export default class SignUp extends Component {


  render() {
    return (
      <View style={styles.container}>
        

        <SignUp/>
        <Text>djkhgkdjsgsd</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D8D8D8",
    justifyContent: 'center',
    alignContent: 'center',

  },
  statusBar: {},
});
