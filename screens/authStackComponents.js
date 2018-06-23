import React from 'react';
import style from '../styles/styles';
import {Image, View, Alert} from 'react-native';
import { Container, Header, Title, Content, Form,Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Item, Input } from 'native-base';

class AuthStackHeader extends React.Component{
    constructor (props){
        super(props);
    }
    
    render(){
        return (
            <Header style = {style.authStackHeader}>
                <Left>
                    <Button transparent onPress={this.props.onPress_back}>
                        <Icon name="arrow-back"/>
                    </Button>
                </Left>
                <Body>
                    <Title style = {style.authStackHeader_heading}>{this.props.title}</Title>
                </Body>
                <Right/>
            </Header>
        );
    }
}

class AuthStackFooter extends React.Component{
    constructor (props){
        super(props);
    }
    
    render(){
        return(
            <Footer style={style.authStackFooter}>
                <Body>
                    <Left/>
                    <Text style={{textAlign:"center", color:"#a6a6a6", fontSize:12}}>© 2018 Copyrights | NUST </Text>
                    <Right/>
                </Body>
            </Footer>
        );
    }
}

class AuthStackForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email : "",
            psk : "",
            error : "",
        };
    }

    printError = (string) => {
        this.setState({error : string});
    };

    onButtonPress = () => {
        email = this.state.email.trim();
        psk = this.state.psk;
        psk_maxLength = 8;
        // validate email address
        if(psk.length < psk_maxLength){
            this.printError("Please, enter a password of atleast "+psk_maxLength+" characters.");
        }
        if(!email.includes("@")){ // error if does not contain '@'
            this.printError("Please, enter a valid email address.");
        }
        if (email.includes(" ")){ // error if contains spaces 'saa dahmad@xyz.com'
            this.printError("Email address should not contain spaces. Please, check.");
        }
        // when all the constraints are met. Process
        // the inputs.
        if(!email.includes(" ") && email.includes("@") && psk.length >= psk_maxLength){
            this.props.onProcessInput(email, psk);
        }
    };

    render(){
        let error = "";
        if(this.props.processError != "") {
            error = this.props.processError;
        }else {
            error = this.state.error;
        }
        return(
            <View>
                <Text style={{textAlign:"center", color: "red", marginTop:8,fontSize:12}}>{error}</Text>
                <Form>
                    <Item>
                        <Input keyboardType="email-address" placeholder="Email" onChangeText={(text) => this.setState({email:text, error:""})}/>
                    </Item>
                    <Item last>
                        <Input keyboardType="default" placeholder="Password" secureTextEntry={true} onChangeText={(text) => this.setState({psk:text, error:""})}/>
                    </Item>
                </Form>
                <Button block style={{backgroundColor:"#004679", margin:8, marginTop:16}} onPress={this.onButtonPress}>
                    <Text>{this.props.purpose}</Text>
                </Button>
            </View>
        );
    }
}

module.exports = {
    AuthStackHeader : AuthStackHeader,
    AuthStackFooter : AuthStackFooter,
    AuthStackForm : AuthStackForm
}