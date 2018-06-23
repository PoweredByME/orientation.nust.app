import React from 'react';
import { StyleSheet, Text, View, Button, Image, Alert } from 'react-native';
import styles from '../styles/styles';


class LogoTitle extends React.Component{
    render(){
        return (
            <View>
                <Image
                    source = {require('../images/logo.png')}
                    style = {{width : 30, height: 30}}
                />
            </View>
        );
    }
}

export default class DetailScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            title : navigation.getParam('title', "Details"),
            headerStyle : {backgroundColor: "orange"},
            headerTintColor : "black",
            headerTitleStyle : {fontWeight : "200"},
            headerRight : (
                <Button
                    onPress = {() => Alert.alert("Hello World")}
                    title = "Item"
                    color = "black"
                ></Button>
            ),
        };
    };

    constructor(props){
        super(props);
        this.state = {
            nameFromHome : this.props.navigation.getParam('nameFromHome', "No"),
        };
        //this.setState({nameFromHome : this.props.navigation.getParam('nameFromHome', "No")});
    }

    render(){
        return (
            <View>
                <Text>Hello TO the details</Text>
                <Text>Name from Home : {this.state.nameFromHome}</Text>
                <Button title="Go to Home" onPress= { () => this.props.navigation.navigate('Home')}></Button>
                <Button title="GO Back" onPress = { () => this.props.navigation.goBack()}></Button>
            </View>
        );
    }
}