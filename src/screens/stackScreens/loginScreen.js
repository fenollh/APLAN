import React from 'react'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'
import {
    Button,
    Form,
    Item,
    Input,
    Label,
} from 'native-base'


export default class LoginScreen extends React.Component{

    login = () => {
        this.props.navigation.navigate('main')
        // autentica con firebase
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={{flex: 0.2}}/>
                <View style={styles.title}><Text style={styles.titleTxt}> APLAN </Text></View>  
                <View style={styles.form}>
                    <Item floatingLabel>
                        <Label>Username</Label>
                        <Input />
                    </Item>
                    <Item floatingLabel style={{marginTop: '3%'}}>
                        <Label>Password</Label>
                        <Input />
                    </Item>

                    <Button style={styles.loginBtn} onPress={() => this.login()}><Text style={styles.loginTxt}>LOGIN</Text></Button>
                    <Button style={styles.loginFBBtn} onPress={() => this.login()}><Text style={styles.loginFBTxt}>LOGIN WITH FACEBOOK</Text></Button>
                    <Button style={styles.signupBtn}><Text style={styles.signupTxt}>SIGN UP</Text></Button>

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
    loginBtn:{
        marginTop: '15%',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: 'rgb(81,213,50)',
    },

    loginTxt:{
        marginTop: '5%',
        fontWeight: 'bold',
        fontSize: 18,
    },

    loginFBBtn:{
        marginTop: '5%',
        justifyContent: 'center',
        borderRadius: 10,    
        backgroundColor: 'rgb(100,180,255)',
    },

    loginFBTxt:{
        marginTop:'2%',
        fontWeight: 'bold',
        fontSize: 18,
    },

    signupBtn:{
        marginTop: '25%',
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