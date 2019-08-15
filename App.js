import React, { Component } from "react";
import { StyleSheet, ScrollView, View, Text,StatusBar  } from "react-native";

import Navigation from './App/Navigation';
import Search from "./App/Search";
import Reset from './App/Reset'
import Login from './App/Login'
import Signup from "./App/Signup";
import Camera from "./App/Camera";
import PocketNurse from "./App/PocketNurse";
import Payment from "./App/Payment";
import DeliveryDetails from "./App/DeliveryDetails";
import Delvered from './App/Delvered'

import Pharmainput from "./App/Pharmainput";
import  Card  from "./App/Card";
import  Map  from "./App/Map";
import Alert from "./App/Alert";
import { Modal1 } from "./App/Modal";
import Geolocation from "./App/Pharmacy";
import Splash from "./App/Splash";
import Pharmacy from "./App/Pharmacy";
import Alert1 from "./App/Alert";
import CustomMarker from "./App/CustomMarker";










//cd android
//./gradlew clean


export default class App extends Component {

  

  render() {
    return (
      <View style={styles.container}>
        

        <Navigation/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    backgroundColor: "#ffffff",
    

    

  },
  statusBar: {},
});
