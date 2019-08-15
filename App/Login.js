import React, { Component } from "react";
import { Alert, Image,ActivityIndicator,TouchableWithoutFeedback,Keyboard, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import firebaseApp from '../App/firebase';


export default class Login extends Component {
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props)
    this.state = {
      fname: '',
      password: '',
      isLoading: false,
     

    }

  }

  signinWithEmailPassword() {
    var obj = this;
    try {
      this.setState({isLoading:true});
      firebaseApp.auth().signInWithEmailAndPassword(
        this.state.fname,
        this.state.password
      ).then(() => {
        Alert.alert("Info", "Login Successful");
        obj.props.navigation.navigate("Alert1");
      }).catch(e => {
        this.setState({isLoading:false})
        alert('Invalid Email or password')
      })

      
    } catch (e) {
      Alert.alert("Error", e.toString())

    }
  }

  myLogin = () => {
    const { fname, password } = this.state;
    
    if (fname == '') {
      this.setState({ Error: 'Enter Email or Phone number' })
    }
    else if (password == '') {
      this.setState({ Error: 'Enter Email or Password' })
    } else {
      this.signinWithEmailPassword();
      //this.setState({isLoading:true});
    }
    // else{this.setState({Error:'Login succesfful'})}


  }



  render() {
    return (
     
      <SafeAreaView style={styles.container}>
      <ScrollView>
         
      {this.state.isLoading == false ?

(<>
     
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <View style={styles.top}>
        <Text style={{textAlign:'center',fontSize:20,color:'#ffffff',}}>Welcome,   Log in!</Text>
      </View>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}  style={styles.container} >

     
      
        <View style={styles.contain}>
        <Image style={styles.image}
            source={require('../App/Images/beba.png')} />
            

          <Text style={{ color: 'red', fontSize: 15 }}>{this.state.Error}</Text>
          




          <Icon style={styles.icon1} name='cellphone-dock' size={30} color={'#000000'} />
          <TextInput style={styles.txt1}
            placeholderTextColor='#000000'
            placeholder='Email/Phonenumber'
            returnKeyType='next'
          
            clearTextOnFocus={true}
            onChangeText={fname => this.setState({ fname })}
          />
          <Icon style={styles.icon1} name='lock-outline' size={30} color={'#000000'} />
          <TextInput style={styles.txt1}
            clearTextOnFocus={true}
            mode='outline'
            placeholderTextColor='#000000'
            placeholder='Password'
          
            secureTextEntry={true}
            returnKeyType='go'
            autoCorrect={false}
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />


          <TouchableOpacity style={styles.btn1}
            onPress={this.myLogin}>
            <Text style={styles.login}>Login</Text>
              </TouchableOpacity>

              
          

          <Text style={{ fontSize: 12 }}>Altenative Login with </Text>




          <View style={styles.so}>

            <TouchableOpacity style={styles.social}>
              <Image style={styles.image1}
                source={require('../App/Images/fb.png')} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.social}>
              <Image style={styles.image1}
                source={require('../App/Images/g.png')} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.signup}
            onPress={() => {this.props.navigation.navigate("Signup")}}>
            <Text style={{ fontSize: 15, fontWeight:'bold' }}>or   Signup Here</Text>

          </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.social}>
            <Text>Forgoten Password? Resset Here</Text>
          </TouchableOpacity>
        </View>
       
        
        
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      
        </>) : <ActivityIndicator size="large" color="#0000ff" alignSelf='center' alignItems='center' />
          

          }
      </ScrollView>
      </SafeAreaView>
      
      
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    marginBottom:10,
    justifyContent: "center",
    
  },

  btn1: {
    borderColor:'#4285F4',
    borderRightWidth:20,
    borderLeftWidth:20,
    color:'#ffffff',
    backgroundColor: "#4285F4",
    marginBottom:20,
    width: 250,
    borderRadius: 100,
    alignItems: 'center',
    paddingVertical: 8,
    marginTop: 20,
    
    shadowOffset: {
      height: 1,
      width: 2
    },
    shadowColor: "blue",
    shadowOpacity: 0.8,
    shadowRadius:5,
    elevation:20
  },

  login: {
    color: "#ffffff",
    marginVertical: 3,
    fontSize: 18,
    fontWeight:'700',
  },
  signup: {
    paddingVertical: 5,
    marginTop: 8,

    borderColor: '#000000'


  },
  icon1: {
    flexDirection: 'row',
    top: 50,
    marginRight: 250,
  },
  txt1: {
    width: 300,
    marginVertical: 1,
    color: '#000000',
    fontSize: 14,
    borderWidth: 0.5,
    borderColor:'#000000',
    borderRadius: 20,
    textAlign: 'center',
    

    borderRadius: 8,
    shadowOffset: {
      width: 50,
      height: 15
    },
    shadowColor: "#000000",
  },
contain:{
alignSelf:'center',
alignItems:'center',
marginTop:70,
flex:1,


},
top:{
marginTop:30,
backgroundColor:'#4285F4',
height:50,
marginRight:80,
borderBottomRightRadius:40,
justifyContent:'center',
elevation:20,
shadowOffset: {
  height: 1,
  width: 2
},
shadowColor: "blue",
shadowOpacity: 0.8,
shadowRadius:5,
elevation:20


},


  image: {

    width: 140.78,
    height: 120.16,
    justifyContent: 'center',

  },

  bebatxt: {

    fontSize: 18,
    paddingVertical: 5,
    textAlign: 'center',
    fontWeight: 'bold',



  },
  imagey:{
    flex: 1,
justifyContent: 'center',
alignItems:'center',
  },

  image1: {
    height: 30,
    width: 30,
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
