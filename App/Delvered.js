

import React, { Component } from "react";
import { StyleSheet, ScrollView, View, Text,TextInput, Alert  } from "react-native";
import { Button, ThemeProvider, Input ,Header} from 'react-native-elements';









//cd android
//./gradlew clean


export default class Delvered extends Component {
  static navigationOptions = {
    header: null
  }

  constructor(props){
    super(props)
  
    this.state = {
      num: '',
      text: ''

    }
    
  }

  render() {
    return (
      
      <View style={styles.container}>
          
        <Header
          placement="left"
          leftComponent={{ icon: 'keyboard-backspace', color: '#fff' } }
          onPress={() => this.props.navigation.navigate("Search")}
          centerComponent={{ text: 'Feedback', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <ScrollView style={styles.scrow}>
        <View style={styles.V1}>
        <Text style={{fontSize:18,textAlign:'center', }}>
          Contact 0543869957/0209038215 {"\n"} Kindly report your Feedback below, an agent would contact you as soon as possible to address your concern</Text>
        
        <TextInput style={styles.input1}
        onChangeText={num => this.setState({ num})}
        borderColor='black'
        
          placeholder='Phone Number Here'
        />
        <TextInput style={styles.input2}
        onChangeText={text => this.setState({ text })}
        borderColor='black'
        
          placeholder='Enter text here'
        />
        
          
    
        <Button style={styles.button}
         onPress={this.Delivered}
          title="Submit"
        />
        </View>
        </ScrollView>
      </View>
    );
  }
  Delivered=()=>{
    const {num, text} =this.state;
    
    if(num==''){
      this.setState(alert('enter your phone number'))
    }
    else if (text==''){
      this.setState((alert('Enter feedback')))
    }
     else(alert('Feedback Submitted '))
    this.props.navigation.navigate("Search")
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    backgroundColor: "#ffffff",
    
    
    

    

  },
  scrow:{
    flex: 1,
    marginBottom: 100,
  },
  input1:{
borderWidth:2,
borderColor:'black',
marginTop:50,

  },
  input2:{
    borderWidth:2,
    borderColor:'black',
    marginTop:50,
    height:150,
    
      },
      V1:{
       marginTop:20,
       padding: 20,
       
        borderBottomWidth: 2,
        borderBottomColor: '#ededed',
        
      }
  
  
});
