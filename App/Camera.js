import React, { Component } from "react";
import { StyleSheet, ScrollView,  View,Keyboard, Image, Text,  TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Entypo';
import ImagePicker from 'react-native-image-picker'




const options = {
  title: 'Select Priscriptioin Image',
  takePhotoButtonTitle:'Take photo with your camera',
  chooseFromLibraryButtonTitle:'Choose photo from library',
  
};

export default class Camera extends Component {

  constructor(props) {
    super(props)
    this.state = {
      avatarSource: null,

    }

  }
  
  myCamera= () =>{
    
   // alert('button clicked')
   ImagePicker.showImagePicker(options, (response) => {
    console.log('Response = ', response);
  
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
    } 
    else {
      let source={uri: response.uri}; 
      // You can also display the image using data:
          //const source = { uri: 'data:image/jpeg;base64,' + response.data };
  
      this.setState({
        avatarSource: source,
      });
    }
  });
    
  } 



  render() {
    return (
      
      <View style={styles.container}>

        
        
        {this.state.avatarSource != null &&
        (<Image source ={this.state.avatarSource}
        style={{width:200, height:150, margin:20 }}/>)
        }
        <TouchableOpacity style={{backgroundColor:'', padding:10, margin:10, alignItems:'center',borderBottomLeftRadius:20,}}
        onPress={this.myCamera}>
          <Icon style={styles.icon2} name='camera' size={50} color={'#4285F4'} />
          <Text style={{color:'black', fontWeight:'bold', fontSize:14}}>Upload Prescription</Text>
        </TouchableOpacity>
      
      </View>
    
      
    );
  }
}
const styles = StyleSheet.create({
  container: {
    
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
     },
     
     

})