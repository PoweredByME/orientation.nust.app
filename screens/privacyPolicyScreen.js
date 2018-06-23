import React from 'react';
import style from '../styles/styles';
import {Image, View, Alert, ScrollView} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import {AuthStackHeader, AuthStackFooter} from './authStackComponents';

export default class privacyPolicyScreen extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <Container>
                <AuthStackHeader title="Privacy Policy" onPress_back={() => this.props.navigation.goBack()}/>
                <Content style={{}} padder>
                    <Text textAlign="justify">
                        This privacy policy sets out how “[business name]” uses and protects any information that 
                        you give “[bu
                        siness name]” when you use this website.
                        “[business name]” is committed to ensuring that your privacy is protected. Should we ask 
                        you to provide certain information by which you can be identified when using this 
                        website, then you can be assured that it wil
                        l only be used in accordance with this privacy 
                        statement.
                        “[business name]” may change this policy from time to time by updating this page. You 
                        should check this page from time to time to ensure that you are happy with any changes. 
                        This policy is effective
                        from [date].
                        What we collect
                        We may collect the following information:
                        •  
                        name and job title
                        •  
                        contact information including email address
                        •  
                        demographic information such as postcode, preferences and interests
                        This privacy policy sets out how “[business name]” uses and protects any information that 
                        you give “[bu
                        siness name]” when you use this website.
                        “[business name]” is committed to ensuring that your privacy is protected. Should we ask 
                        you to provide certain information by which you can be identified when using this 
                        website, then you can be assured that it wil
                        l only be used in accordance with this privacy 
                        statement.
                        “[business name]” may change this policy from time to time by updating this page. You 
                        should check this page from time to time to ensure that you are happy with any changes. 
                        This policy is effective
                        from [date].
                        What we collect
                        We may collect the following information:
                        •  
                        name and job title
                        •  
                        contact information including email address
                        •  
                        demographic information such as postcode, preferences and interests
                        This privacy policy sets out how “[business name]” uses and protects any information that 
                        you give “[bu
                        siness name]” when you use this website.
                        “[business name]” is committed to ensuring that your privacy is protected. Should we ask 
                        you to provide certain information by which you can be identified when using this 
                        website, then you can be assured that it wil
                        l only be used in accordance with this privacy 
                        statement.
                        “[business name]” may change this policy from time to time by updating this page. You 
                        should check this page from time to time to ensure that you are happy with any changes. 
                        This policy is effective
                        from [date].
                        What we collect
                        We may collect the following information:
                        •  
                        name and job title
                        •  
                        contact information including email address
                        •  
                        demographic information such as postcode, preferences and interests
                        This privacy policy sets out how “[business name]” uses and protects any information that 
                        you give “[bu
                        siness name]” when you use this website.
                        “[business name]” is committed to ensuring that your privacy is protected. Should we ask 
                        you to provide certain information by which you can be identified when using this 
                        website, then you can be assured that it wil
                        l only be used in accordance with this privacy 
                        statement.
                        “[business name]” may change this policy from time to time by updating this page. You 
                        should check this page from time to time to ensure that you are happy with any changes. 
                        This policy is effective
                        from [date].
                        What we collect
                        We may collect the following information:
                        •  
                        name and job title
                        •  
                        contact information including email address
                        •  
                        demographic information such as postcode, preferences and interests
                        This privacy policy sets out how “[business name]” uses and protects any information that 
                        you give “[bu
                        siness name]” when you use this website.
                        “[business name]” is committed to ensuring that your privacy is protected. Should we ask 
                        you to provide certain information by which you can be identified when using this 
                        website, then you can be assured that it wil
                        l only be used in accordance with this privacy 
                        statement.
                        “[business name]” may change this policy from time to time by updating this page. You 
                        should check this page from time to time to ensure that you are happy with any changes. 
                        This policy is effective
                        from [date].
                        What we collect
                        We may collect the following information:
                        •  
                        name and job title
                        •  
                        contact information including email address
                        •  
                        demographic information such as postcode, preferences and interests
                    </Text>
                </Content>
                <AuthStackFooter/>
            </Container>
        );
    }
}