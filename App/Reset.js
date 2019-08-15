import React, { Component } from "react";
import { StyleSheet, ScrollView,  View,Keyboard, Image, Text, TextInput, TouchableOpacity } from "react-native";
import firebase from '../App/firebase'

export default class Reset extends Component {

  constructor(props) {
    super(props)
    this.state={
      number:'',
      
     
    }

  }
  myLogin= () =>{
    const {number}= this.state;
    if(number==''){
      this.setState({Error:'Enter phonenumber'})
    }
    //else if(number!==''){
     // this.setState({Error:'wrong Number'})
    //}
    else{this.setState({Error:'Login succesfful'})}
    
    
  } 



  render() {
    return (
      <View style={styles.container}>
        
        <Text>Enter your email or Phone Number</Text>
        <TextInput style={styles.input}
        placeholder='Phone Number/Email'/>


        <TouchableOpacity>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor:'#CACCCE',
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
    
    
    

  },

})