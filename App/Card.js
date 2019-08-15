import React, { Component } from "react";
import { StyleSheet, ScrollView, View, Text,FlatList, TouchableOpacity,Image } from "react-native";






//cd android
//./gradlew clean



export default class Card extends Component {


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container1}>
          <TouchableOpacity style={styles.card}>
          
          
        <Image
          source={require("../App/Images/beba.png")}
          resizeMode={"cover"}
          style={styles.image}
        />
          
              <Text style={styles.cardtitle}>Drug name:</Text>
              <Text style={styles.cardtitle}>Price       : </Text>
              <Text style={styles.cardtitle}>Expirydate: </Text>

              </TouchableOpacity>
              
              
              
              </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        marginTop:20,
    backgroundColor: '#CACCCE',
    
        marginLeft:20,
        marginBottom:20,
        marginRight:20,
        


    },
    
  
  Card:{
    width: 365.64,
    height: 96.29,
    borderColor:'#000000',
    borderBottomWidth:5,
    backgroundColor: "#ffffff",
    position: "absolute",
    elevation: 24,
    shadowOffset: {
      width: 8,
      height: 5
    },
    
    shadowColor: "#000000",
    shadowOpacity: 9,
    shadowRadius: 8
      
      



  },
  image:{
    top: "8.35%",
    left: "78.38%",
    width: 89.65,
    height: 82.08,
    position: "absolute",
    resizeMode:"cover",

  },
  cardtitle:{
      marginVertical:8,
      fontSize:18
      
  },
 
});
