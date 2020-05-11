import React from 'react'
import firebase from 'firebase'

import { View, Text, Alert } from 'react-native'
import { Button, Item, Input, Label } from 'native-base'

import styles from './styles'

const firebaseConfig = {
    apiKey: "AIzaSyAbXkNWtod5WFUFEbWVM6Q1BAmVDbVGAeo",
    authDomain: "aplan-8bbba.firebaseapp.com",
    databaseURL: "https://aplan-8bbba.firebaseio.com",
    projectId: "aplan-8bbba",
    storageBucket: "aplan-8bbba.appspot.com",
    messagingSenderId: "502481515083",
    appId: "1:502481515083:web:79017bc417ac4bf16b53ce",
    measurementId: "G-QLXPJEZCN3"
}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}


export default class LoginScreen extends React.Component{

    constructor(props){
        super(props)
        this.state={
            Email: '',
            Password: '',
        }
    }

    loginEmailPassword = (email, password) => {

        try{
            firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => this.props.navigation.navigate('main'))
        }
        catch(error){
            Alert.alert(error.toString)
        }

    }

    signup = () => {
        this.props.navigation.navigate('signup')
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={{flex: 0.2}}/>
                <View style={styles.title}><Text style={styles.titleTxt}> APLAN </Text></View>  

    {/* FORM SECTION */}
                <View style={styles.form}>
                    <Item floatingLabel>
                        <Label>Email</Label>
                        <Input 
                            autoCapitalize='none'
                            onChangeText={(email) => this.setState({ Email: email })}/>
                    </Item>
                    <Item floatingLabel style={{marginTop: '3%'}}>
                        <Label>Password</Label>
                        <Input 
                            secureTextEntry={true}
                            autoCapitalize='none'
                            onChangeText={(password) => this.setState({ Password: password })}/>
                    </Item>

    {/* BUTTON SECTION */}
                    <Button 
                        style={styles.loginBtn} 
                        onPress={() => this.loginEmailPassword(this.state.Email, this.state.Password)}>
                        <Text style={styles.loginTxt}>LOGIN</Text>
                    </Button>
                    <Button 
                        style={styles.loginFBBtn} 
                        onPress={() => this.loginFacebook(this.state.Email, this.state.Password)}>
                        <Text style={styles.loginFBTxt}>LOGIN WITH FACEBOOK</Text>
                    </Button>
                    <Button 
                        style={styles.signupBtn}
                        onPress={() => this.signup()}>
                        <Text style={styles.signupTxt}>SIGN UP</Text>
                    </Button>

    {/* FOOTER SECTION */}
                    <View style= {styles.subtitles}>
                        <View style={styles.terms}>
                            <Text style={{fontSize: 14}}> Terms of use </Text>
                        </View>
                        <View style={styles.aboutUs}>
                            <Text style={{fontSize: 14}}> Know us </Text>
                        </View>
                    </View>
                    <View style={styles.footer}><Text style={{fontWeight: 'bold', fontSize: 15}}> APLAN </Text></View>
                </View>
                <View style={{flex: 1}}/>
                
            </View>

        )
    }

}