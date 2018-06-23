import React from 'react';
import style from '../styles/styles';
import {Image, View, Alert} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

export default class StartScreen extends React.Component{
    
    onPress_continueWithFacebook = () => {
        // Login / SignUp with facebook
    };     

    onPress_continueWithGoogle = () => {
        // Login / SignUp with google
    }

    onPress_signUp = () => {
        // Sign Up button pressed
        this.props.navigation.navigate("signUp");
    }  

    onPress_logIn = () => {
        // Log In button pressed
        this.props.navigation.navigate("logIn");
    }

    onPress_termsOfServiceAndPrivacyPolicy = () => {
        // Terms of Service and Privacy Policy Pressed
        this.props.navigation.navigate("privacyPolicy");
    }
    
    render(){
        return(
            <Container style={style.startScreenContainer}>
                <View style={{backgroundColor:"#004679", height : Expo.Constants.statusBarHeight}}></View>
                <Container style={style.sscContent}>
                    <View style={{alignItems:'center'}}>
                        <Image
                            source = {require("../images/logo.png")}
                            style = {{height:150, width:150, marginBottom: 12}}
                        ></Image>
                        <Text style={{fontFamily:'Merriweather', color:'#828282', textAlign:'center', marginBottom:12, paddingLeft: 16, paddingRight: 16}}>National University of Science and {"\n"}Technology</Text>
                        <View>
                            <Button style={{margin:2, backgroundColor:"#3c5a99", width: 260}} onPress={this.onPress_continueWithFacebook}><Icon name="logo-facebook"/><Text>Continue with Facebook</Text></Button>
                            <Button style={{margin:2, backgroundColor:"#df4b3f", width: 260}} onPress={this.onPress_continueWithGoogle  }><Icon name="logo-google"/><Text>Continue with Google &nbsp;&nbsp;&nbsp;</Text></Button>
                        </View>
                        <Text  style={{fontSize:12, color:'#b6b6b6', textAlign:'center', marginTop:8, paddingHorizontal: 36}}>
                            By Logging In, Siging Up or continuing, you agree to 
                            <Text style={{fontSize:12, color:'#a2a2a2', textAlign:'center', marginTop:8, paddingHorizontal: 36}} onPress={this.onPress_termsOfServiceAndPrivacyPolicy}>
                                {" "}Terms of Service and Privacy Policy
                            </Text>
                        </Text>
                    </View>
                </Container>
                <Footer style={{backgroundColor: 'white'}}>  
                    <FooterTab style={{backgroundColor: 'white'}}>
                        <Button style={{backgroundColor: 'white'}} onPress={this.onPress_signUp}>
                            <Text style={{fontSize:16, color:'#a6a6a6'}}>Sign Up</Text>
                        </Button>
                        <Button style={{backgroundColor: 'white'}} onPress={this.onPress_logIn}>
                            <Text style={{fontSize:16, color:'#a6a6a6'}}>Log In</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}