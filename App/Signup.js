import React, { Component } from "react";
import { StyleSheet, ScrollView, View, Image, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import firebaseApp from '../App/firebase';



//cd android
//./gradlew clean
//react-native log-android


export default class Signup extends Component {

  constructor(props) {
    super(props)
    this.state = {
      fname: '',
      number: '',
      email: '',
      password: '',
      cpassword: ''
    }
  }

  signupWithEmail() {
    const obj = this;
    try {
      firebaseApp.auth().createUserWithEmailAndPassword(
        this.state.email,
        this.state.password
      ).then(() => {
        const uid = firebaseApp.auth().currentUser.uid;
        firebaseApp.database().ref("/Users/" + uid).set({
          email: obj.state.email,
          fname: obj.state.fname,
          phone: obj.state.number
        }).then(() => {
          Alert.alert("Info", "Signup successful");
          this.props.navigation.navigate("Search");
        })

      });
    } catch (e) {
      Alert.alert("Error", e.toString())
    }
  }
  mySignUp = () => {
    const { fname, number, email, password, cpassword } = this.state;
    if (fname == '') {
      this.setState({ Error: 'Enter Fullname' })
    }
    else if (number == '') {
      this.setState({ Error: 'Pleae enter a valid number' })
    }
    else if (email == '') {
      this.setState({ Error: 'Email field is empty' })
    }
    else if (password == '') {
      this.setState({ Error: 'Password field is empty' })
    }
    else if (cpassword !== password || cpassword == '') {
      this.setState({ Error: 'Empty field or passwords do not match' })
    }
    else {
      this.signupWithEmail();
    }
    // else {this.setState({Error:'Signup succesfful'})}

  }

  render() {

    return (
      <ScrollView>
      <View style={styles.container}>
        <Text style={{ color: 'red', fontSize: 15 }}>{this.state.Error}</Text>
        <View style={styles.contain}>
       
          <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', margin: 15 }}>Kindly SignUp to continue</Text>

          <View style={styles.base}>

            <TextInput style={styles.input}
              placeholder='Full Name'
              value={this.state.fname}
              underlineColorAndroid="#000000"
              onChangeText={fname => this.setState({ fname })}
            />

            <TextInput style={styles.input}
              keyboardType='phone-pad'
              placeholder='Phone Number'
              underlineColorAndroid="#000000"
              value={this.state.number}
              onChangeText={number => this.setState({ number })}
            />

            <TextInput style={styles.input}
              keyboardType='email-address'
              placeholder='Email'
              underlineColorAndroid="#000000"
              value={this.state.email}
              onChangeText={email => this.setState({ email })} />

            <TextInput style={styles.input}
              textContentType='password'
              placeholder='Password'
              underlineColorAndroid="#000000"
              value={this.state.password}
              onChangeText={password => this.setState({ password })} />

            <TextInput style={styles.input}
              textContentType='password'
              placeholder='Confirm Password'
              underlineColorAndroid="#000000"
              value={this.state.cpassword}
              onChangeText={cpassword => this.setState({ cpassword })} />

            <TouchableOpacity style={styles.btn1}
              onPress={this.mySignUp} >

              <Text style={{ color: '#ffffff', fontSize: 18 }}> SignUp </Text>
            </TouchableOpacity>

          </View>
          <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>Already having an account? </Text>
          <TouchableOpacity style={styles.btn2}

            onPress={() => this.props.navigation.navigate("Login")}>
            <Text style={{ color: '#000000', fontSize: 18, fontWeight: 'bold' }}> Login here</Text>
          </TouchableOpacity>


        </View>

      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D8D8D8",
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'

  },
  input: {
    width: 200,

    fontSize: 18
  },


  contain: {
    marginVertical: 10,
    width: 250,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',


  },
  base: {


    width: 276.01,
    height: 300.45,
    backgroundColor: "#ffffff",

    elevation: 27,
    borderRadius: 8,
    shadowOffset: {
      width: 19,
      height: 15
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowRadius: 9,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn1: {

    color: "#833AB4",

    backgroundColor: "#25D366",
    width: 200,
    borderRadius: 8,
    alignItems: 'center'
  },
  btn2: {

    borderRadius: 6,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,

  },
  image: {
    height: 50,
    width: 50,
    marginHorizontal: 10
  },
  social: {
    flexDirection: 'row',
    marginTop: 10,

  },
  so: {
    flexDirection: 'row'
  }


});
