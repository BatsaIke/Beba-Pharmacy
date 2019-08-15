import React, { Component } from "react";
import { StyleSheet, ScrollView,Image, View, Alert, Text, TouchableOpacity, ActivityIndicator,
} from "react-native";

import ImagePicker from 'react-native-image-picker'
import RNFetchBlob from 'rn-fetch-blob'


import { Button, Header, SearchBar } from 'react-native-elements';
import { FontAwesome5 } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome5';
import firebaseApp from '../App/firebase'
import * as Animatable from 'react-native-animatable';

//const {width: WIDTH}=Dimensions.get('window')
//const {height: HEIGHT}=Dimensions.get('window')



// Prepare Blob support
const Blob = RNFetchBlob.polyfill.Blob
const fs = RNFetchBlob.fs
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
window.Blob = Blob

const options = {
  title: 'Select Priscriptioin Image',
  takePhotoButtonTitle:'Take photo with your camera',
  chooseFromLibraryButtonTitle:'Choose photo from library',
  
};

export default class Search extends Component {

  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);

    this.state = {
      isSearching: false,
      SearchBarFocused: false,
      search: '',
      avatarSource: null,
      imageuri:null
     
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
         imageuri:response.uri 
       });
     }
   });
     
   } 
  /*myAlert() {
    const { Camera } = this.setState;
    if (Camera == null) {
      Alert.alert(
        'Alert Title',
        'Do you have?',
        [

          {
            text: 'No',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          { text: 'Yes', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false },
      );
    }
  }*/
  genetateIDs () {
    return '_' + Math.random().toString(36).substr(2, 9);
  };

   
  addSearch(url)
  {
    var uid = this.genetateIDs();
    var search = this.state.search;
    var url = url;
    var id = firebaseApp.auth().currentUser.uid

    firebaseApp.database().ref('Search/'+uid).set({
      uid,
      search,
      url,
      id,
      status:'pending'
     
    }).then(()=>{
      Alert.alert('info','success');
    })
  }

  uploadImage(userid, uri, mime = 'application/octet-stream') {
    
    this.setState({isSearching:true});
    return new Promise((resolve, reject) => {
      const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri
      let uploadBlob = null
      //alert(uploadUri);
      //console.log(uploadUri);
      var uid = this.genetateIDs();
      const imageRef = firebaseApp.storage().ref('images/'+uid).child(userid)
        
      fs.readFile(uploadUri, 'base64')
        .then((data) => {

          return Blob.build(data, { type: `${mime};BASE64` })
        })
        .then((blob) => {
          console.log("BLOB DATA:", blob);
          uploadBlob = blob
          return imageRef.put(blob, { contentType: mime })
          
        })
        .then(() => {
          uploadBlob.close()
          this.setState({isSearching:false});
          return imageRef.getDownloadURL();
         
        })
        .then((url) => {
          resolve(url)
          //console.log(url);
          this.addSearch(url);
        })
        .catch((error) => {
          reject(error)
        })
    })


  }



  render() {
    const {imageuri}= this.state;
    return (
      <ScrollView style={styles.scrow}>
        <View style={styles.root}>

          <Header
          containerStyle={{backgroundColor:'#4285F4', borderBottomEndRadius:30,borderBottomLeftRadius:30,borderStyle:'dotted' ,borderColor:'#ffffff'}}
            placement="left"

            centerComponent={{ text: 'Welcome', style: { color: '#fff', fontSize: 20 } }}
            rightComponent={{ icon: 'home', color: '#fff' }}


          />


          <Animatable.View animation='slideInRight' duration={2000}>
            <SearchBar containerStyle={{elevation:50}}
              placeholder="Enter Priscription"
              inputStyle='right'
              platform='android'
              onBlur={() => this.setState({ SearchBarFocused: false })}
              onFocus={() => this.setState({ SearchBarFocused: true })}
              value={this.state.search}
              onChangeText={(search) => {
                this.setState({ search: search });
                if (search == '' || search == null) {
                  this.setState({ isSearching: false })
                }
              }}
              onSubmitEditing={() => this.setState({ isSearching: true })} />
          </Animatable.View>
          {this.state.SearchBarFocused == false ?

            (<>
              
             

              <View style={styles.rect4}>

              {this.state.avatarSource != null &&
        (<Image source ={this.state.avatarSource}
        style={{width:200, height:150, margin:20 }}/>)
        }
        <TouchableOpacity style={{backgroundColor:'', padding:10, margin:10, alignItems:'center',borderBottomLeftRadius:20,}}
        onPress={this.myCamera}>
          <Icon style={styles.icon2} name='camera' size={50} color={'#4285F4'} />
          <Text style={{color:'black', fontWeight:'bold', fontSize:14}}>Upload Prescription</Text>
        </TouchableOpacity>

        <Button
                buttonStyle={{ width: 300, alignSelf: 'center', borderRadius: 20,backgroundColor:'#4285F4', elevation:27 }}
                title="Search"
                onPress={() => {
                  var id = firebaseApp.auth().currentUser.uid
                   this.uploadImage(id, imageuri);
                  // this.addSearch(id,uploadedUrl); 
                   
                  }}
                  
              />

              </View>

              {this.state.isSearching== false?
              ( <>
              <Animatable.View animation='slideInLeft' duration={4000} >
                <View style={styles.jj}>
              <TouchableOpacity style={styles.base}>
              <Icon style={styles.icon2} name='hospital' size={100} color={'#4285F4'} />
              <Text style={{fontSize:15, color:'#4285F4'}}>Nearby Pharmacies</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.base}>
              <Icon style={styles.icon2} name='user-nurse' size={100} color={'#4285F4'} />
              <Text style={{fontSize:15, color:'#4285F4'}}>My pocket Nurse</Text>
              </TouchableOpacity>
              </View>
                  <View style={styles.column}>
              <TouchableOpacity style={styles.base}>
              <Icon style={styles.icon2} name='book' size={100} color={'#4285F4'} />
              <Text style={{fontSize:15, color:'#4285F4'}}>Locum/Vacancy</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.base}>
              <Icon style={styles.icon2} name='pills' size={100} color={'#4285F4'} />
              <Text style={{fontSize:15, color:'#4285F4', textAlign:'center'}}>Get Free Medication</Text>
              </TouchableOpacity>
              </View>
                

              </Animatable.View>
              <TouchableOpacity style={styles.bae}
              onPress={() => this.props.navigation.navigate("Delvered")}>
              
              <Text style={{fontSize:15, color:'#4285F4', fontWeight:'bold'}}>Report Problem/Give feedback</Text>
              </TouchableOpacity>
               </>):(<ActivityIndicator size="large" color="#0000ff" alignSelf='center' alignItems='center' />
          
               )
                         }

            </>) : (this.state.isSearching==false
          
)
          }
        </View>


      </ScrollView>


    );
  }
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#F5F5F5',
    flex: 1,
    borderColor: "rgba(190,106,106,1)",

  },
  scrow: {
    flex: 1,
    marginBottom: 20,
  },
  rect4: {

    padding: 50,

    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center'

  },
  cam: {
    marginTop: 100
  },
  base:{
  borderRadius:25,
    width: 180.01,
    height: 180.45,
    backgroundColor: "#ffffff",
    marginBottom: 20,
    marginLeft:20,
   paddingRight:20,
    elevation: 27,
    borderRadius:8,
    shadowOffset: {
      width: 19,
      height: 15
    },
    shadowColor: "#4285F4",
    shadowRadius: 9,
    alignContent:'center',
    justifyContent:'center',
    alignItems:'center'
  },
  column:{
flexDirection:'row',
justifyContent:'center',
marginRight:20
  },
  baa:{
    flexDirection:'row',
    marginRight:20
  },
bae:{
  
    
    backgroundColor: "#ffffff",
    marginBottom: 20,
    marginLeft:20,
    marginRight:20,
    height:50,
    elevation: 27,
    borderRadius:8,
    shadowOffset: {
      width: 19,
      height: 15
    },
    shadowColor: "#4285F4",
    
    alignContent:'center',
    justifyContent:'center',
    alignItems:'center'
},
jj:{
 justifyContent:'center',
 flexDirection:'row',
 marginRight:20
 
}

});
