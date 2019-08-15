import React, { Component } from "react";
import firebaseApp from '../App/firebase';
import { StyleSheet, ScrollView, View, Text, Alert} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";







//cd android
//./gradlew clean


export default class Alert1 extends Component {
/*componentDidMount(){
  firebaseApp.database().ref('Search').on("child_changed",snapshot=>{
    var data = snapshot.val();
    console.log(data);
  })
}*/

constructor(props) {
  super(props);

  this.state = {
   data:null
   
  }
}

readUserData() {
  /*if(this.state.data == null)*/{
    var obj = this;
    firebaseApp.database().ref('Search').orderByChild('status').equalTo('pending').on('value', function (snapshot) {
        //console.log(snapshot.val());
        var data = snapshot.val();
        obj.setState({data});

    });
    console.log(obj.state.data);
    obj.myAlert();
  }
}

componentDidUpdate(){
  this.readUserData();
}
  myAlert(){
    Alert.alert(
        'Alert Title ',
        'DO you have? '  ,
        [
          
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'Yes', onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: false},
      );
    }
    
    /*async getToken() {
      let fcmToken = await AsyncStorage.getItem('fcmToken');
      console.log("before fcmToken: ", fcmToken);
      if (!fcmToken) {
        fcmToken = await firebaseApp.messaging().getToken();
        if (fcmToken) {
          console.log("after fcmToken: ", fcmToken);
          await AsyncStorage.setItem('fcmToken', fcmToken);
        }
      }
    }
    async requestPermission() {
      firebaseApp.messaging().requestPermission()
        .then(() => {
          this.getToken();
        })
        .catch(error => {
          console.log('permission rejected');
        });
    }

async checkPermission() {
    firebaseApp.messaging().hasPermission()
      .then(enabled => {
        if (enabled) {
          console.log("Permission granted");
          this.getToken();
        } else {
          console.log("Request Permission");
          this.requestPermission();
        }
      });
  }

  */
  
  render() {
    return (
      <View style={styles.container}>
        

        <TouchableOpacity onPress={()=>{this.readUserData()}}>
          
        <Text>click</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    backgroundColor: "#ffffff",
    

    

  },
  statusBar: {},
});
