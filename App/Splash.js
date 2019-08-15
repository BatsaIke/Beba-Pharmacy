import React, { Component } from "react";
import { StyleSheet,  View, Text, ActivityIndicator, Image } from "react-native";
import * as Animatable from 'react-native-animatable'
import firebaseApp from "./firebase";







//cd android
//./gradlew clean



export default class Splash extends Component {

  componentDidMount(){
    var obj = this;
    setTimeout(() => {
      firebaseApp.auth().onAuthStateChanged(function(user){
        if(user){
          obj.props.navigation.navigate('Alert1')
        }
        else{
          this.props.navigation.navigate('Login')
        }
      }
      
      )
      
    
    }, 4000);

   
  }

  render() {
    return (
      <Animatable.View animation='fadeIn'  duration={4000} style={styles.container}>
        <Image style={styles.image}
            source={require('../App/Images/beba.png')} />
            

            
        <Text style={styles.company}> Welcome to Beba Pharmacy</Text>



        <ActivityIndicator size='large' color='blue'
        style={{margin:10}}/>
              
              <Text style={styles.compan}>Experince Speed & Quality</Text>
       
          
              </Animatable.View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        alignItems:'center'
        


    },
    company:{
      fontSize:25,
      fontWeight:"bold",
      color: '#073CC3',
    },
    image:{
      height:200,
      width:180,
      marginTop:10
    },
    compan:{
      fontSize:15,
      fontWeight:"bold",
      color: '#073CC3',
    },
  
 
});
