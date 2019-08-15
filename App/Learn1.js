import React, { Component } from "react";
import { StyleSheet, View, Text,Keyboard, TouchableOpacity, TextInput } from "react-native";










//cd android
//./gradlew clean



export default class Learn1 extends Component {
  constructor(props) {
    super(props)
    this.state={
      fname:'',
      pword:''
     
    }

  }
  myFuction= () =>{
    const {fname,pword}= this.state;
    if(fname==''){
      this.setState({Error:'plase fill the first name'})
    }
    else if(pword==''){
      this.setState({Error:'plase fill the first name'})
    }
    else{this.setState({Error:'Log in succesfful'})}
    
    
  } 

  render() {
    return (

      <View style={styles.container}>
          <Text>{this.state.Error}</Text>
        <TextInput style={styles.txt1}
        
          placeholder='Username' 
          onChangeText={fname=>this.setState({fname})
    }/>

        <TextInput style={styles.txt1}
          placeholder='Password'
          onChangeText={pword=>this.setState({pword})} />


        <TouchableOpacity style={styles.touch}
          onPress={this.myFuction}>
          <Text style={{ color: "#ffffff" }}>Click here</Text>
        </TouchableOpacity>



      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D8D8D8",
  },
  touch: {
    backgroundColor: '#000000'
  }
});
