import {StyleSheet} from 'react-native';
const primaryColor = "#004679";
const authFooterBack = "#f0f0f0";

module.exports = StyleSheet.create({
    startScreenContainer: {
        justifyContent : 'center',
        flex: 1,
    },
    sscContent : {
        backgroundColor : "white",
        flex : 1,
        justifyContent:'center', 
        alignItems:'center'
    },
    
    authStackHeader : {
        backgroundColor : primaryColor,
        paddingTop : Expo.Constants.statusBarHeight,
        height : Expo.Constants.statusBarHeight + 48,
    },

    authStackHeader_heading : {
        color : "white",
    },

    authStackFooter : {
        backgroundColor : authFooterBack,
    },


});
