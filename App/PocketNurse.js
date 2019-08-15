import React, { Component } from "react";
import { StyleSheet, ScrollView, View, Keyboard, Text, TextInput,TouchableOpacity } from "react-native";
import Note from "../App/Note";




export default class PocketNurse extends Component {

  constructor(props) {
    super(props)
    this.state = {
      noteArray: [],
      noteText: '',
     

    }

  }



  render() {
    let notes = this.state.noteArray.map((val, key) => {
      return <Note key={key} keyval={key} val={val}
        deletMethod={() => this.deletNote(key)} />
    });

    return (
      <View style={styles.container}>

        <View style={styles.header}>

          <Text style={styles.headerText}>Note Pad</Text>


        </View>
        <ScrollView style={styles.scrow}>
        {notes}
          
           
        </ScrollView>

        <View style={styles.footer}>


          <TextInput style={styles.input}
            onChangeText={(noteText) => this.setState({ noteText })}
            value={this.state.noteText}
            placeholder='note'
            underlineColorAndroid='transparent'
            placeholderTextColor='#ffffff' />

        </View>

        <TouchableOpacity
          onPress={this.addNote.bind(this)}
          style={styles.addButton}>
          <Text style={styles.addbtntxt}> + </Text>

        </TouchableOpacity>
      </View>
    );
  }
  addNote(){
    if(this.state.noteText){
      var d = new Date();
      this.state.noteArray.push({
        'date': d.getFullYear()+
        "/"+(d.getMonth()+ 1) +
        "/" +d.getDate(), 
      
        
      })
      this.setState({noteArray:this.state.noteArray})
      this.setState({noteText: ''});
    }
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    backgroundColor: '#E91E63',
    alignItems: 'center',
    borderBottomWidth: 10,
    borderBottomColor: '#ddd'

  },
  headerText: {
    color: '#ffffff',
    fontSize: 18,
    padding: 26,
  },
  scrow: {
    flex: 1,
    marginBottom: 100,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  input: {
    alignSelf: 'stretch',
    color: '#ffffff',
    padding: 20,
    backgroundColor: '#252525',
    borderTopWidth: 2,
    borderTopColor: '#ededed'
  },
  addButton: {
    position: 'absolute',
    zIndex: 11,
    right: 20,
    bottom: 90,
    backgroundColor: '#E91E63',
    width: 90,
    height: 90,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
  addbtntxt: {
    color: '#ffffff',
    fontSize: 24,
  },
  note: {
    position: 'relative',
    padding: 20,
    paddingRight: 100,
    borderBottomWidth: 2,
    borderBottomColor: '#ededed',


  },
  notTxt: {
    paddingLeft: 20,
    borderBottomWidth: 10,
    borderLeftColor: '#e91e63',
  },
  notedelet: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2980b9',
    padding: 10,
    top: 10,
    bottom: 10,
    right: 10,
  },
  notedelettxt: {
    color: '#ffffff'
  },


})