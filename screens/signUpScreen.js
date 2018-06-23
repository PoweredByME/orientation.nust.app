import * as firebase from 'firebase';
import React from 'react';
import style from '../styles/styles';
import {Image, View, Alert, BackHandler} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import {AuthStackHeader, AuthStackFooter, AuthStackForm} from './authStackComponents';
import AuthProcessingScreen from './processingScreen';

export default class signUpScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error : "",
            processing : false,
        };
    }

    // this function gets called when user requests sign up
    // after entering the required input
    onSignUp = (email, password) => {
        this.fireBaseAuth(email,password);  
    };
    
    // firebase authentication logic
    fireBaseAuth = (email, password) => {
        firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(() => {
                this.props.navigation.navigate("main")
            })
            .catch((error) => {
                this.setState({processing : false});
                if(error.message.includes("already in use")){
                    this.printError("The account already exists. Please, change the email address or log in");
                }else{
                    this.printSignUpError();
                }
                console.log (error);
            });
        this.setState({processing : true});
    };


    
    printError = (string) => {
        this.setState({error : string});
    };

    printSignUpError = () => this.printError("Could not Sign you up. Please, check your internet connection.").bind(this);
    

    

    
    render (){
        if(this.state.processing) return (<AuthProcessingScreen/>);
        else return (
            <Container>
                <AuthStackHeader title="Sign Up" onPress_back={()=>this.props.navigation.goBack()}/>
                <Content>
                    <AuthStackForm purpose="Sign Up" onProcessInput={this.onSignUp} processError={this.state.error}/>
                </Content>
                <AuthStackFooter/>
            </Container>
        )
    }
}