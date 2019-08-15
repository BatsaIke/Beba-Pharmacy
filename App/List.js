<Button
buttonStyle={{margin:10,  padding:10,borderLeftWidth:200, borderColor:"#ffffff", borderRadius:40 }}
titleStyle={{color:'red', textAlign:'left',right:170,fontSize:18, fontWeight:'400'}}

icon={
    <Icon
      name="hospital"
      size={40}
      color="white"
    />
  }
  iconRight
  title="Nearby Pharmacies"
  

/>
<Button
style={this}
  onPress={() => this.props.navigation.navigate("PocketNurse")}
  buttonStyle={{margin:10,  padding:10,borderLeftWidth:200, borderColor:"#ffffff", borderRadius:40 }}
  titleStyle={{color:'red', textAlign:'left',right:170,fontSize:18, fontWeight:'400'}}
  icon={
    <Icon
      name="user-nurse"
      size={40}
      color="white"
    />
  }
  iconRight
  title="My Pocket nurse"
/>
<Button
  buttonStyle={{margin:10,  padding:10,borderLeftWidth:200, borderColor:"#ffffff", borderRadius:40 }}
  titleStyle={{color:'red', textAlign:'left',right:170,fontSize:18, fontWeight:'400'}}
  icon={
    <Icon
      name="book"
      size={40}
      color="white"
    />
  }

  iconRight
  title="Locum/Vacancy"

/>
<Button
 buttonStyle={{margin:10,  padding:10,borderLeftWidth:200, borderColor:"#ffffff", borderRadius:40 }}
 titleStyle={{color:'red', textAlign:'left',right:170,fontSize:18, fontWeight:'400'}}
  
 icon={
    <Icon
      name="pills"
      size={40}
      color="white"
      
    />
  }
  
  iconRight
  title="Get Free Medication"
/>

<Button
  onPress={() => this.props.navigation.navigate("Delvered")}
  buttonStyle={{margin:10,  padding:10,borderLeftWidth:200, borderColor:"#ffffff", borderRadius:40 }}
  titleStyle={{color:'red', textAlign:'left',right:170,fontSize:18, fontWeight:'400'}}
  icon={

    <Icon

      name="user-secret"
      size={40}
      right='10'
      
      color="white"
      
    />
  }
  iconRight
  title="Report a problem/Give feedback"
  margin={50}
/>


const mainNavi = createStackNavigator({
HomeScreen:{
  screen: HomeScreen,
  navigationOptions:{
    tabBarLabel:'home',
    tabBarIcon:({tintColor})=>{
      <Icon name='home' size = {30} color={tintColor}/>;
    }
  }
},
tabBarOptions:{
  activeTintColor: 'blue',
  inactiveTintColor: '#dedede'
}
});

const compileNavigation= createSwitchNavigator({
  Splash:Splash,
  Auth:auth,
  mainapp:mainapp
},
{
  initialRouteName:Splash
}
);