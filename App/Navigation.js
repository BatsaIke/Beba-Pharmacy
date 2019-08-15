import React, { Component } from "react";
//importing the navigators that will be used.
import { createStackNavigator, createAppContainer, createSwitchNavigator, createBottomTabNavigator } from "react-navigation";

import Splash from "./Splash";
import Login from "../App/Login";
import Signup from "../App/Signup";
import Search from "../App/Search";
import PocketNurse from '../App/PocketNurse'
import Delvered from '../App/Delvered'
import Alert1 from "./Alert";




const myNavigations = createStackNavigator({
  Splash: {
    screen: Splash,
    
  },

  Login:{
    screen:Login
  },
  Alert1:{
    screen: Alert1,
    navigationOptions:{
      title:'Welcome Back',
      headerStyle:{
        backgroundColor:'#075e54'
      }
    }
  },

  Search:{
    screen: Search,
    navigationOptions:{
      title:'Welcome Back',
      headerStyle:{
        backgroundColor:'#075e54'
      }
    }
  },
  


  Signup: {
      screen: Signup,
      navigationOptions:{
       title:'Signup Here',
        headerStyle:{
            backgroundColor:'#25D366',
            
            
                },
                
    }
  },
  
  PocketNurse:{
    screen:PocketNurse
  },

  Delvered:{
    screen:Delvered
  },

  initialRouteName:Splash
});

export default Navigation = createAppContainer(
    myNavigations
)



//cd android
//./gradlew clean


// export default class Navigation extends Component {

   

//   render() {
//     return (
//       <View style={styles.container}>
    
//         <Text> iupegwifgewpfywgei</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//     backgroundColor: "#D8D8D8",
    

    

//   },
//   statusBar: {},
// });
