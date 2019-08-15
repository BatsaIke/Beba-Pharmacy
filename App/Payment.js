import React, { Component } from "react";
import { StyleSheet, ScrollView, View, Text,TouchableOpacity   } from "react-native";







//cd android
//./gradlew clean



export default class Payment extends Component {


  render() {
    return (
      <View style={styles.container}>

        <View style={styles.drugcontain}>
        <Text style={styles.drugtxt}>Drug Details</Text>
        <Text style={styles.drugtxt2}>
          Drug name:{"\n"}
          {"\n"}Price:{"\n"}
          {"\n"}Expiry Date{"\n"}
          Delivery Charge:
        </Text>


        </View >
        <View style={styles.paymentcontain}>
        <Text style={{fontSize:35,textAlign:'center',color:'#ffffff' }}>Payment Details</Text>
            <TouchableOpacity style={styles.momo}>
              <Text style={{textAlign:'center', fontSize:30,}}>Pay With Mobile money </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.delivery}>
              <Text style={{textAlign:'center', fontSize:30,}}>Payment on Delivery   </Text>
            </TouchableOpacity>
        </View>

     
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {

    backgroundColor: "#D8D8D8",
    
    flexDirection:'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems:'center'
    

  },
  drugcontain:{
    marginTop:40,
    borderRadius:8,
    width: 350.27,
    height:200.2,
    backgroundColor: "rgba(255,255,255,1)",
    opacity: 1,
    shadowOffset: {
      width: 10,
      height: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 1,
    overflow: "visible"
  },
  paymentcontain:{
           borderRadius:10,
           borderBottomEndRadius:1,
           marginTop:40,
            width: 311.27,
            height: 200.59,
            backgroundColor: "#DB4437",
            shadowOffset: {
              width: 10,
              height: 5
            },
            shadowColor: "rgba(0,0,0,1)"
          },
          drugtxt:{
              fontSize:25,
              textAlign:'center',
              fontWeight:'600'
              
          },
          drugtxt2:{
                fontSize:20,
                top: 28.52,
                left: 15.24,
                color: "#121212",
                position: "absolute",
          },
          momo:{
            paddingVertical:10,
            backgroundColor:'#F4B400',

          },
          delivery:{
            paddingVertical:10,
            backgroundColor:'#0F9D58'

          }
});
