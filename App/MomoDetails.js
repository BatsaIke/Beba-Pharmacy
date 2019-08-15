import React, { Component } from "react";
import { StyleSheet, ScrollView, View, Text,TextInput,TouchableOpacity } from "react-native";




//cd android
//./gradlew clean



export default class MomoDetails extends Component {


  render() {
    return (
      <View style={styles.container}>
          <View style={styles.base}>

              <Text style={styles.txt} >Payment Details: </Text>
        <TextInput style={styles.txt}
        placeholder='Phone Number'
        underlineColorAndroid='#000000'
        />


        <Text style={styles.txt}>Amount: </Text>
        
        

           <TouchableOpacity style={styles.btn1}>
          <Text  style={{color:'#ffffff',fontSize:18}}> Cancel </Text>
          </TouchableOpacity> 

          <TouchableOpacity style={styles.btn2}>
          <Text  style={{color:'#ffffff',fontSize:18}}> Pay</Text>
          </TouchableOpacity> 


        
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    
    justifyContent: 'center',
    alignContent: 'center',
    alignItems:'center'
    

  },
  btn1: {
      right:80,
      top:27,
    color: "#121212",
    flexDirection:'column',
    
    backgroundColor:"rgba(139,87,42,1)",
    width:100,
    borderRadius:8,
    alignItems:'center'
  },
  btn2: {
      
    color: "#121212",
    flexDirection:'column',
    left:80,
    backgroundColor:"rgba(139,87,42,1)",
    width:100,
    borderRadius:8,
    alignItems:'center'
  },
  base: {
   
    borderRadius:25,
    width: 276.01,
    height: 300.45,
    backgroundColor: "#ffffff",
    
    elevation: 27,
    borderRadius:8,
    shadowOffset: {
      width: 19,
      height: 15
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowRadius: 9,
    alignContent:'center',
    justifyContent:'center',
    alignItems:'center'
  },
  txt:{
    width:250,
    marginVertical:10,
    fontSize:18,
    textAlign:'center',

  }

});
