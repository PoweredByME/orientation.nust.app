import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'

export default class AuthProcessingScreen extends React.Component{

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