import React from 'react'
import firebase from 'firebase'
import{
    View,
    Text,
    StyleSheet,
    TextInput,
    Alert,
} from 'react-native';
import { Button, Icon } from 'native-base';

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


export default class AddNoteScreen extends React.Component {
    
    constructor(props){
        super(props)

        this.state= {
            UserID: firebase.auth().currentUser.uid,
            Type: 'note',
            Title: '',
            Body: '',
        }
        this.data = ''
    }
    addNote = () => {
        firebase.database().ref('/users/' + this.state.UserID + '/' + this.state.Type + '/' + this.state.Title).set({
            Title: this.state.Title,
            Body: this.state.Body
        })
        
    }


    render(){

        let inputType

        if(this.state.Type == 'note'){
            inputType =  
            <View style={{flex: 12, marginTop: '2%'}}>
                <TextInput 
                    style={styles.inputTit} 
                    multiline={true} 
                    placeholder='titulo' 
                    scrollEnabled={true}
                    maxLength = {50}
                    onChangeText={(title) => this.setState({ Title: title })}/>
                <TextInput 
                    style= {styles.inputBod} 
                    multiline={true} 
                    placeholder='cuerpo' 
                    scrollEnabled={true}
                    textAlignVertical='top'
                    onChangeText={(body) => this.setState({ Body:body })}/>
            </View>
        }else{
            inputType = <View style={{flex:12, marginTop: '2%'}}/>
        }

        return(
            <View style={styles.container}>

                <View style={{flex: 0.8, flexDirection: 'row'}}>
                    <View style={{flex: 1,}}/>
                    <View style={{flex:0.5}}>
                        <Button style={styles.noteBtn} onPress={() => this.setState({ Type: 'note' })}>
                            <Text style={styles.noteTxt}> NOTE </Text>
                        </Button>
                    </View>
                    <View style={{flex:0.5}}>
                        <Button style={styles.taskBtn} onPress={() => this.setState({ Type: 'task' })}>
                            <Text style={styles.taskTxt}> TASK </Text>
                        </Button>
                    </View>
                    <View style={{flex: 1}}/>
                </View>
               

                {inputType}


                <View style={styles.footer}> 
                    <Button 
                        block info
                        iconLeft
                        title='advanced options' 
                        style={styles.optionsBtn}
                        >
                        <Text style={styles.optionsTxt}> ADVANCED OPTIONS </Text>
                        <Icon name= 'ios-settings' style={{marginRight: '7%', fontSize: 30, color: 'rgb(52,251,167)'}}/>
                    </Button>

                    <Button 
                        block success
                        iconLeft
                        style={styles.addBtn} 
                        onPress={() => this.addNote()}>
                        <Text style={styles.addTxt}> ADD {this.type} </Text>
                        <Icon name= 'ios-add' style={{ fontSize: 40, color: 'rgb(52,251,167)'}}/>
                    </Button>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        backgroundColor: 'rgb(230,240,255)',
        height: '100%', 
        width: '100%',
        flexDirection: 'column'
    },

    noteBtn:{
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        justifyContent: 'center',
        borderBottomLeftRadius: 20,
        height: '100%',
        backgroundColor: 'rgb(100,180,255)',
    },

    taskBtn: {
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        justifyContent: 'center',
        borderBottomRightRadius: 20,
        height: '100%',
        backgroundColor:'rgb(100,180,255)',

    },

    noteTxt:{
        fontSize: 10,
        fontWeight: 'bold',
    },

    taskTxt:{
        fontSize: 10,
        fontWeight: 'bold',

    },

    // INPUT ZONE
    inputTit: {
        width: '95%',
        marginStart: '2%',
        borderColor: 'rgb(100,100,100)',
        backgroundColor: 'rgb(180,230,255)',
        borderWidth: 1,
        borderRadius: 10,
        padding: '2%',
    },
    inputBod: {
        marginTop: '1%',
        marginStart: '2%',
        height:'92%',
        width: '95%',
        borderColor: 'rgb(100,100,100)',
        backgroundColor: 'rgb(220, 235,255)',
        padding: '2%',
        borderWidth: 1,
        borderRadius: 10,
        
    },

    // FOOTER
    footer:{
        flex:1,
        flexDirection: 'row',
        marginBottom: '1%',
        marginTop: '1%'
    },

    addBtn:{
        flex:1,
        marginHorizontal: '1%',
        borderRadius: 20,
        backgroundColor: 'rgb(100,180,255)',
        padding: 20,
    },

    optionsBtn: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: '1%',
        borderRadius: 20,
        padding: '6%',
        backgroundColor: 'rgb(100,180,255)',
    },

    addTxt:{
        marginLeft: '15%',
        fontWeight: 'bold',
        fontSize: 15,
    },

    optionsTxt:{
        fontWeight: 'bold',
        fontSize: 15,
    },

})


