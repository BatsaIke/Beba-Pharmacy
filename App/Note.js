import React, { Component } from "react";
import { StyleSheet, ScrollView, View, Text, StatusBar, TouchableOpacity } from "react-native";

import PocketNurse from './PocketNurse'










//cd android
//./gradlew clean


export default class Note extends Component {


    render() {
        return (
            <View key={this.props.keyval} style={styles.note}>

                <Text style={styles.notTxt}>this.props.val.date</Text>
                <Text style={styles.notTxt}>this.props.val.note</Text>

                <TouchableOpacity onPress={this.props.deleteMethod} style={styles.notedelet}>
              <Text style={styles.notedelettxt}> delete</Text>
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
});
