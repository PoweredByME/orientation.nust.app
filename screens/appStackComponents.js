import React from 'react';
import style from '../styles/styles';
import {Image, View, Alert} from 'react-native';
import { Container, Header, Title, Content, Form,Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Item, Input } from 'native-base';
import { BorderlessButton } from 'react-native-gesture-handler';

export class AppStackHeader extends React.Component{
    render(){
        return(
            <Header style={style.authStackHeader}>
                <Left>
                    <Button transparent onPress={this.props.onPressBtn}>
                        <Icon name={this.props.btnIcon} color="white" style={{color : "white"}}/>
                    </Button>
                </Left>
                <Body>
                    <Title>{this.props.title}</Title>
                </Body>
                <Right />
            </Header>
        );
    }
}