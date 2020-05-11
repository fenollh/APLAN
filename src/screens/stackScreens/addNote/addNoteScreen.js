import React from 'react'

import{ View, Text, TextInput, Alert } from 'react-native';
import { Button, Icon, DatePicker } from 'native-base';

import styles from './styles'
import AddButton from '../../../components/addButton'
import MoreOptionsButton from '../../../components/moreOptionsButton'
import {saveNote} from '../../../dataBaseFunctions/saveData'


export default class AddNoteScreen extends React.Component {
    
    constructor(props){
        super(props)

        this.state= {
            type: 'note',
            title: '',
            body: '',
            data: []
        }
    }

    saveData = () => {
        saveNote(this)
        Alert.alert('NOTE ADDED')
        this.props.navigation.navigate('main')
    }

    render(){

        let inputType

        if(this.state.type == 'note'){
            inputType =  
            <View style={{flex: 12, marginTop: '2%'}}>
                <TextInput 
                    style={styles.inputTit} 
                    placeholder='titulo' 
                    maxLength = {50}
                    onChangeText={(title) => this.setState({ title })}/>
                <TextInput 
                    style= {styles.inputBod} 
                    multiline={true} 
                    placeholder='cuerpo' 
                    scrollEnabled={true}
                    textAlignVertical='top'
                    onChangeText={(body) => this.setState({ body })}/>
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
                            onChangeText={(title) => this.setState({ title })}/>
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
                        onChangeText={(title) => this.setState({ title })}/>
                </View>
            </View>
        }

        return(
            <View style={styles.container}>

                <View style={{flex: 0.8, flexDirection: 'row'}}>
                    <View style={{flex: 1,}}><Text>  </Text></View>
                    <View style={{flex:0.5}}>
                        <Button style={styles.noteBtn} onPress={() => this.setState({ type: 'note' })}>
                            <Text style={styles.noteTxt}> NOTE </Text>
                        </Button>
                    </View>
                    <View style={{flex:0.5}}>
                        <Button style={styles.taskBtn} onPress={() => this.setState({ type: 'task' })}>
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