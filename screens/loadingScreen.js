import * as firebase from 'firebase';
import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'

export default class AuthLoadScreen extends React.Component{

    
    // this function checks if the user has already authenticated
    // or not. 
    // if not already authenticated -> goto authStack
    // if already authenticated -> goto mainStack(AppStack)
    isAlreadyAuthenticated = () => {
        // do something
    };
    

    componentDidMount(){
        setTimeout(() => {
            firebase.auth().onAuthStateChanged((user) => {
                this.props.navigation.navigate(user ? "main" : "auth");
            });
        }, 2000);
    }

    render(){
        return (
            <View style={styles.loadingPage}>
                <ActivityIndicator size="large" color="#c0c0c0"/>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    loadingPage : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    },
});