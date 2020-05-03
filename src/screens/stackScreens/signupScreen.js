import React from 'react'
import * as firebase from 'firebase'
import {
    View,
    Text,
    StyleSheet,
    Alert,
} from 'react-native'
import {
    Button,
    Form,
    Item,
    Input,
    Label,
} from 'native-base'

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


export default class SignupScreen extends React.Component{

    constructor(props){
        super(props)
        this.state={
            Email: '',
            Email2: '',
            Password: '',
            Password2: '',
        }
    }

    signup = (email, password) => {

        try{
            if(email !== this.state.Email2 || password !== this.state.Password2){
                Alert.alert('el email o password no coincide') 
                return
            }
            if(password.length<=6){
                Alert.alert('The password must have 6 or more caracters')
                return
            }
            firebase.auth().createUserWithEmailAndPassword(email, password)
            firebase.database().ref('/users').set(email)
            Alert.alert('welcome')
            this.props.navigation.navigate('main', {Username: email})
        }
        catch(error){
            Alert.alert(error.toString())
        }
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
                            onChangeText={(email) => this.setState({ Email: email })}/>
                    </Item>
                    <Item floatingLabel style={{marginTop: '3%'}}>
                        <Label>Repeat the email</Label>
                        <Input 
                            onChangeText={(email) => this.setState({ Email2: email })}/>
                    </Item>
                    <Item floatingLabel style={{marginTop: '10%'}}>
                        <Label>Password</Label>
                        <Input 
                            secureTextEntry={true}
                            onChangeText={(password) => this.setState({ Password: password })}/>
                    </Item>
                    <Item floatingLabel style={{marginTop: '3%'}}>
                        <Label>Repeat the password</Label>
                        <Input 
                            secureTextEntry={true}
                            onChangeText={(password) => this.setState({ Password2: password })}/>
                    </Item>

    {/* BUTTON SECTION */}
                    <Button 
                        style={styles.signupBtn}
                        onPress={() => this.signup(this.state.Email, this.state.Password)}>
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

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'column',
        padding: 20,
        backgroundColor: 'rgb(230,250,250)',
    },

    title: {
        flex: 1,
        marginBottom: '2%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    titleTxt: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    form: {
        flex:7,
        padding: 10,
        borderColor: 'rgb(100,180,255)',
        borderWidth: 2,
        borderRadius: 20,
        backgroundColor: 'rgb(220,240,255)'
    },

    signupBtn:{
        marginTop: '30%',
        justifyContent: 'center',
        borderRadius: 10,    
        backgroundColor: 'rgb(100,180,255)',
    },

    signupTxt:{
        marginTop: '9%',
        fontWeight: 'bold',
        fontSize: 18,
    },

    subtitles: {
        flexDirection: 'row',
        marginTop: '3%',
    },

    terms: {
        flex: 1,
        alignItems: 'flex-start',
        marginLeft: '8%',
    },

    aboutUs: {
        flex: 1,
        alignItems: 'flex-end',
        marginRight: '8%',
    },

    footer:{
        flex: 0.1,
        marginTop: '3%',
        alignItems: 'center',
    }




})