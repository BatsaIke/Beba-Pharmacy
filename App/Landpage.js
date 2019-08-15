import React, {Component} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';





export default class Landpagee extends Component{
  render(){
    return(
        
      <View style={styles.container}>
      
      <View style={styles.btn1}>
        <TouchableOpacity style={styles.touch1}>
        <Text style={{color:'white',textAlign:'center', fontSize: 18}}>Search Pescription</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.btn2}>
        <TouchableOpacity style={styles.touch1}>
        <Text style={{color:'white',textAlign:'center', fontSize: 18}}>Request for Nurse/Doctor</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.btn3}>
        <TouchableOpacity style={styles.touch1}>
        <Text style={{color:'white',textAlign:'center', fontSize: 18}}>My Appointment</Text>
        </TouchableOpacity>
        </View>
        
        </View>
      
    )
  }
}


const styles = StyleSheet.create({
  container: {
    //backgroundColor: 'white',
    alignContent: 'center',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
  },
  btn1:{
      width:300,
    backgroundColor:'#1c313a',
      padding:10,
      borderRadius:25,
      borderEndColor:'blue',
      marginVertical:10,

  },
  btn2:{
      
    width:300,
    backgroundColor:'#1c313a',
      padding:10,
      borderRadius:25,
      borderEndColor:'blue',
      marginVertical:10,

  },
  btn3:{
      
    
    width:300,
    backgroundColor:'#1c313a',
      padding:10,
      borderRadius:25,
      borderEndColor:'blue',
      marginVertical:10,

},
touch1:{
    //bo
}
});


