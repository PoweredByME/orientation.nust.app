import * as firebase from 'firebase';
import React from 'react';
import { StyleSheet, Text, View, BackHandler } from 'react-native';
import {createStackNavigator, createSwitchNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/details';
import StartScreen from './screens/StartScreen';
import logInScreen from './screens/logInScreen';
import signUpScreen from './screens/signUpScreen';
import privacyPolicyScreen from './screens/privacyPolicyScreen';
import AuthLoadScreen from "./screens/loadingScreen";


// Admin gmail account 
// email : orientation.app.team@gmail.com
// psk : Qwaszx.123

// The fire base config information
var FIREBASE_CONFIG = {
  apiKey: "AIzaSyDyQBXJ-2XoUAlW8thyQ1BcTdEbL5RmCRM",    authDomain: "orientationappdb.firebaseapp.com",
  databaseURL: "https://orientationappdb.firebaseio.com",
  projectId: "orientationappdb",
  storageBucket: "orientationappdb.appspot.com",
  messagingSenderId: "745352778638"
};


// Defining the Authentication stack. It includes the
// pages for Authentication start (StartScreen), Sign
// Up (signUpScreen) and Log In (logInScreen)
const AuthStack = createStackNavigator(
  {
    start : {screen : StartScreen},
    signUp : {screen : signUpScreen},
    logIn : {screen : logInScreen},
    privacyPolicy : {screen : privacyPolicyScreen},
  },
  {
    initialRouteName : 'start',
    headerMode : 'none', 
  }
);



// Defining the Main Stack of the App.
// This gets called when the authentication
// of the app is done
const AppStack = createStackNavigator(
  { 
    Home : {screen : HomeScreen},
    Details : {screen: DetailScreen}
  },
  {
    initialRouteName : 'Home',
    headerMode : "none",
  }
);

const loaderStack = createStackNavigator(
  {
    loading : {screen : AuthLoadScreen}
  },
  {
    initialRouteName : "loading",
    headerMode : "none",
  }
);

const AppSwitch = createSwitchNavigator(
  {
    loading :  loaderStack,
    auth :  AuthStack,
    main :  AppStack,
  },
  {
    initialRouteName : "loading",
  }
);

// Entry point of the App
export default class App extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        fontLoaded : false,
      };
    }

    componentWillMount() {
      firebase.initializeApp(FIREBASE_CONFIG);
      Expo.Font.loadAsync({
       'Roboto': require('native-base/Fonts/Roboto.ttf'),
       'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        'Merriweather' : require('./Merriweather/Merriweather-Black.ttf')
      });
      this.setState({fontLoaded : true});
    }

    


    render(){
      return this.state.fontLoaded ? <AppSwitch /> : <View/>
    }
}



