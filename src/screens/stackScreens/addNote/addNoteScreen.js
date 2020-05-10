import React from 'react'
import firebase from 'firebase'

import{ View, Text, TextInput } from 'react-native';
import { Button, Icon, DatePicker } from 'native-base';

import styles from './styles'
import AddButton from '../../../components/addButton'
import MoreOptionsButton from '../../../components/moreOptionsButton'

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
            Data: []
        }
    }

    setData = () => {
        firebase.database().ref('/users/' + this.state.UserID + '/notes/').set(this.state.Data)
        console.log(this.state.Data)
    }
    getData = () => {
        let arrData
        firebase.database().ref('/users/' + this.state.UserID + '/notes/').on('value', data =>{
            arrData= data.val()
        })
        return new Promise((resolve, reject) => {
            resolve(arrData)
        })
    }
    saveData = () => {
        this.getData()
        .then((data) => {
            this.setState({ Data: [...this.state.Data, {title: this.state.Title, body: this.state.Body}] })
        })
        .then(() => this.setData())   
    }



    render(){

        let inputType

        if(this.state.Type == 'note'){
            inputType =  
            <View style={{flex: 12, marginTop: '2%'}}>
                <TextInput 
                    style={styles.inputTit} 
                    placeholder='titulo' 
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
            inputType = 
            <View style={{flex:12, marginTop: '2%', flexDirection:'column'}}>
                <View style={{felx: 2, flexDirection: 'row'}}>
                    <View style={{flex:1}}>
                        <TextInput 
                            style={styles.inputTit} 
                            placeholder='title' 
                            maxLength = {36}
                            onChangeText={(title) => this.setState({ Title: title })}/>
                    </View>
                    <View style= {styles.datePick}>
                        <DatePicker
                            defaultDate={Date.now}
                            androidMode={"calendar"}
                            placeHolderText="What is the deadline?"
                            placeHolderTextStyle={{ color: "rgb(200,200,200)", fontSize: 13}}
                            onDateChange={(date) => this.setState({ choseDate: date, stringDate: date.toString().substr(4, 12) })}
                            disabled={false}/>
                    </View>
                </View>

                <View style={{flex: 10}}>
                    <TextInput 
                        style={styles.inputBodTask} 
                        multiline={true} 
                        placeholder='What do you have to do?' 
                        scrollEnabled={true}
                        textAlignVertical='top'
                        onChangeText={(title) => this.setState({ Title: title })}/>
                </View>
            </View>
        }

        return(
            <View style={styles.container}>

                <View style={{flex: 0.8, flexDirection: 'row'}}>
                    <View style={{flex: 1,}}><Text>  </Text></View>
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
                    <View style={{flex: 1}}><Text>  </Text></View>
                </View>
               

                {inputType}


                <View style={styles.footer}> 
                    <MoreOptionsButton context={this}/>
                    <AddButton context={this}/>
                </View>
            </View>
        )
    }
}