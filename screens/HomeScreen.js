import * as firebase from 'firebase';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from '../styles/styles';
import {Button, Icon, Container, Content, Title, Body, Left } from 'native-base';
import {AppStackHeader} from './appStackComponents';

export default class HomeScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title : "Events",
            username : "Hi"
        }
    }

    componentWillMount(){
        this.setState({username : "Hi, " + firebase.auth().currentUser.email.split('@')[0]});
    }

    render(){
        return(
            <Container>
                <AppStackHeader btnIcon="menu" title={this.state.title} onPressBtn={()=>firebase.auth().signOut()}/>
                <Content>
                    <View style={{padding: 20, backgroundColor:"#e0e0e0"}}>
                        <Text style={{color : "#515151", fontSize:24}}>{this.state.username}</Text>
                    </View>
                    <View style={{padding: 14, backgroundColor:"#f0f0f0"}}>
                        <Text>
                        Loerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm Ipsum
                        Loerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm Ipsum
                        Loerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm Ipsum
                        Loerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm Ipsum
                        Loerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm Ipsum
                        Loerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm Ipsum
                        Loerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm Ipsum
                        Loerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm Ipsum
                        Loerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm Ipsum
                        Loerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm Ipsum
                        Loerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm Ipsum
                        Loerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm Ipsum
                        Loerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm Ipsum
                        Loerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm Ipsum
                        Loerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm Ipsum
                        Loerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm Ipsum
                        Loerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm Ipsum
                        Loerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm Ipsum
                        Loerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm Ipsum
                        Loerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm Ipsum
                        Loerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm Ipsum
                        Loerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm IpsumLoerm Ipsum
                        

                            
                        </Text>
                    </View>
                </Content>
            </Container>
        );
    }
}