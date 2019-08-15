import React, { Component } from "react";
import { StyleSheet, ScrollView, View, Text, TextInput, Image,TouchableOpacity } from "react-native";



export default class Logo extends Component {


  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image}
        source={require('../App/Images/beba.png')} />
        <Text style={styles.logotxt}> Welcome to Beba Pharmacy</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:  {
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
    
  },
  image: {
    
    
    width: 147.78,
    height: 105.16,
    position:'absolute',
   
  },
  logotxt: {
    
    
    color: "#121212",
    position: "absolute",
    top: 380

  }

    
    
});
