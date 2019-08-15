import React, { Component } from "react";
import { StyleSheet, ScrollView, View, Text, TextInput} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";












//cd android
//./gradlew clean


export default class DeliveryDetails extends Component {


    render() {
        return (
            <View style={styles.container}>

                <Text> Payment details</Text>
                <TouchableOpacity>
                    <Text>click here for delivery at current location</Text>
                </TouchableOpacity>

                <Text> fill in delivery details details below</Text>
                <TextInput
                    placeholder='Full name ' />

                <TextInput
                    placeholder='Phone Number ' />

                <TextInput
                    placeholder='Location Adress Full location name'  />

                <TouchableOpacity>
                    <Text>Submit</Text>
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
