import * as firebase from 'firebase';
import React from 'react';
import style from '../styles/styles';
import {Image, View, Alert} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Item, CheckBox } from 'native-base';
import {AuthStackHeader, AuthStackFooter, AuthStackForm} from './authStackComponents';
import  AuthProcessingScreen  from './processingScreen';

export default class logInScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error : "",
            process : false,
        };
    }
    


    // this function gets called when user requests login
    onLogIn = (email, password) => {
        firebase.
        auth().
        signInWithEmailAndPassword(email, password).
        then(() => this.props.navigation.navigate("main")).
        catch((error) => {
            this.setState({process : false});
            if (error.message.includes("network error")){
                this.printError("Could not log you in. Please, check your internet connection.");
            }else {
                this.printLogInError();
            }
        });
        this.setState({process : true});
    }



    printError = (string) => {
        this.setState({error : string});
    };

    printLogInError = () => this.printError("Please, enter a valid email or password.");
    
    render (){
        if (this.state.process) return <AuthProcessingScreen />;
        else return (
            <Container>
                <AuthStackHeader title="Log In" onPress_back={()=>this.props.navigation.goBack()}/>
                <Content>
                    <AuthStackForm purpose="LOG IN" onProcessInput={this.onLogIn} processError={this.state.error}/>
                </Content>
                <AuthStackFooter/>
            </Container>
        )
    }
}