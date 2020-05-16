import React from 'react'

import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import{ View, Text, TextInput, KeyboardAvoidingView, Alert } from 'react-native'
import{ DatePicker, CheckBox, ListItem, Left, Right, Radio, Icon } from 'native-base'

import styles from './styles'
import AddButton from '../../../components/addButton'
import MoreOptionsButton from '../../../components/moreOptionsButton'
import {saveReminder} from '../../../dataBaseFunctions/saveData'


export default class AddReminderScreen extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            choseDate: new Date(),
            stringDate: '',
            title: '',
            body: '',
            radio: [false, true, false],
            cbNotifications:[false,false,false,false],
            cbMoreOptions: false,
            inputNotifications:[0,0,0],
            data: []
        }
    }

    saveData = () => {
        saveReminder(this)
        Alert.alert('REMINDER ADDED')
        this.props.navigation.navigate('main')
    }

    
    whenSendNotifications = () => {
        let notifications = this.state.cbNotifications

        notifications[0] ?notifications[0] = 1  :notifications[0] = 0
        notifications[1] ?notifications[1] = 60  :notifications[1] = 0
        notifications[2] ?notifications[2] = 1440  :notifications[2] = 0
        notifications[3] ?notifications[3] = 10080  :notifications[3] = 0

        this.setState({ cbNotifications: notifications })
    }

    changeRadio = (pressedRad) => {
        switch(pressedRad){
            case 0:
                !this.state.radio[0] 
                ?this.setState({ radio: [true, false, false]})
                :this.setState({ radio: [false, this.state.radio[1], this.state.radio[2]] })
                break

            case 1:
                !this.state.radio[1]
                ?this.setState({ radio: [false, true, false]})
                :this.setState({ radio: [this.state.radio[0], false, this.state.radio[2]] })
                break
                
            case 2:
                !this.state.radio[2]
                ?this.setState({ radio: [false, false, true]})
                :this.setState({ radio: [this.state.radio[0], this.state.radio[1], false] })
                break
            default:
                this.setState({ radio: [true, true, true] })
        }
    }

    changeCbNotifications = (pressedCb) => {
        const that= this.state.cbNotifications
        switch(pressedCb){
            case 0: 
                this.setState({ cbNotifications: [!that[0], that[1], that[2], that[3]] })
                break
            case 1:
                this.setState({ cbNotifications: [that[0], !that[1], that[2], that[3]] })
                break
                
            case 2:
                this.setState({ cbNotifications: [that[0], that[1], !that[2], that[3]] })
                break

            case 3:
                this.setState({ cbNotifications: [that[0], that[1], that[2], !that[3]] })
                break
        }
    }



    render(){

        let importantIcon
        if(this.state.radio[0]){
            importantIcon= <MaterialCommunityIcons name='alert-decagram' size={60} color='rgb(230,0,0)'/>
        }
        else if(this.state.radio[1]){
            importantIcon= <MaterialCommunityIcons name='calendar-alert' size={60} color='rgb(255,190,0)'/>
        }
        else if(this.state.radio[2]){
            importantIcon= <MaterialCommunityIcons name='bell-alert' size={60} color='rgb(0,210,0)'/>
        }
        else {
            importantIcon= <MaterialCommunityIcons name='calendar-clock' size={60} color='rgb(100,180,255)'/>
        }

        let notificationsFrecuency
        if(this.state.cbMoreOptions){
            notificationsFrecuency=
                <View style={{flex:6, flexDirection: 'column', marginTop:'10%', marginLeft: '3%'}}>
                    
                    <View style={{flex:1}}><Text>  We will warn you:  </Text></View>
                    <View style={{flex: 4, flexDirection: 'row', marginTop:'3%'}}>
                        <View style={{flex:1}}>
                            <CheckBox 
                                checked={this.state.cbNotifications[1]} 
                                onPress={() => this.changeCbNotifications(1)}
                                color='rgb(100,180,255)'/>
                            <View><Text onPress={() => this.changeCbNotifications(1)}> 1 hour before</Text></View>
                        </View>
                        <View style={{flex:1}}>
                            <CheckBox 
                                checked={this.state.cbNotifications[2]} 
                                onPress={() => this.changeCbNotifications(2)}
                                color='rgb(100,180,255)'/>
                            <View><Text onPress={() => this.changeCbNotifications(2)}> 1 day before</Text></View>
                        </View>
                        <View style={{flex:1}} >
                            <CheckBox 
                                checked={this.state.cbNotifications[3]} 
                                onPress={() => this.changeCbNotifications(3)}
                                color='rgb(100,180,255)'/>
                            <View><Text onPress={() => this.changeCbNotifications(3)}> 1 week before</Text></View>
                        </View>
                    </View>
                    <View style={{flex:2, flexDirection: 'row'}}/>
                </View>
                
        }else{
            notificationsFrecuency= 
            <View style={{flex:6, flexDirection: 'row'}}>
                <View  style={{flex:1, marginTop: '10%', marginLeft: '2%'}}>
                    <Text>With the deafult mode activate we will send you a notification the day of the event</Text>
                </View>
                <View  style={{flex:1}}/>
            </View>
        }


        return(
            <View style={styles.container}>
            

    {/* ESTO ES EL HEADER */}

                <View style={styles.header}>
                    <Text style={styles.title}> ADD A REMINDER </Text>
                </View>

    {/* ESTO ES EL BODY */}

                <View style={styles.body}>

                    <View style={styles.titleInput}>
                        <TextInput 
                            placeholder='What is happening?'
                            placeholderTextColor="rgb(150,150,150)"
                            multiline = {false}
                            maxLength ={50}
                            onChangeText={(title) => this.setState({ title: title })}
                            />
                    </View>

                    <View style= {styles.datePick}>
                        <DatePicker
                            defaultDate={Date.now}
                            androidMode={"calendar"}
                            placeHolderText="When is happening?"
                            placeHolderTextStyle={{ color: "rgb(150,150,150)", fontSize: 14 }}
                            onDateChange={(date) => this.setState({ choseDate: date, stringDate: date.toString().substr(4, 12) })}
                            disabled={false}
                            
                            />
                            <Text style={styles.dateText}>Date: {this.state.stringDate}</Text> 
                    </View>

                    <View style={styles.bodyInput}>
                        <TextInput 
                            placeholder='Do you want to add more info?'
                            placeHolderTextStyle={{ color: "rgb(150,150,150)" }}
                            placeholderTextColor="rgb(150,150,150)"
                            multiline = {true}
                            scrollEnabled = {true}
                            onChangeText = {(body) => this.setState({ body: body })}
                            />
                    </View>

                    <View style={styles.parameters}>
                        <View style={{flex: 0.5}}>
                            <Text style={styles.importanceTitle}>GRADO DE IMPORTANCIA</Text>
                        </View>

                        <View style={styles.importancePicker}>
                        
                            <View style={{flex:1,paddingStart:'5%', paddingTop:'3%'}}>{importantIcon}</View>
                            <View style={{flex: 4,}}>

                                <ListItem onPress={()=> this.changeRadio(0)}>
                                    <Left style={{flex:1}}>
                                        <Radio 
                                            selected={this.state.radio[0]} 
                                            onPress={()=> this.changeRadio(0)} 
                                            selectedColor='rgb(230,0,0)'/>
                                    </Left>
                                    <Right style={{flex:10}} >
                                        <Text >Muy importante</Text>
                                    </Right>
                                </ListItem>

                                <ListItem onPress={()=> this.changeRadio(1)}>
                                    <Left style={{flex: 1}}>
                                        <Radio 
                                            selected={this.state.radio[1]} 
                                            onPress={()=> this.changeRadio(1)}
                                            selectedColor='rgb(255,190,0)'/>
                                    </Left>
                                    <Right style={{flex:10,}}>
                                        <Text >Normal</Text>
                                    </Right>
                                </ListItem>

                                <ListItem onPress={()=> this.changeRadio(2)}>
                                    <Left style={{flex:1}}>
                                        <Radio 
                                            selected={this.state.radio[2]} 
                                            onPress={()=> this.changeRadio(2)}
                                            selectedColor='rgb(0,210,0)'/>
                                    </Left>
                                    <Right style={{flex:10}} >
                                        <Text>Poco importante</Text>
                                    </Right>
                                </ListItem>

                            </View>
                        </View>

                        <View style={{flex: 5}}></View>
                    </View>

                    <View style={{flex:0.5, flexDirection: 'row'}}>  
                        <View style={styles.checkBox}>
                            <CheckBox 
                                checked={this.state.cbNotifications[0]} color='rgb(100,180,255)'
                                onPress={() => this.changeCbNotifications(0)}
                                />
                        </View>
                        <View style={styles.checkBoxMessage}>
                            <Text onPress={() => this.changeCbNotifications(0)}>push notification</Text>
                        </View>
                        <View style={{flex:4}}/>
                        <View style={styles.moreCheckBox}>
                            <CheckBox 
                                checked={this.state.cbMoreOptions} color='rgb(100,180,255)'
                                onPress={() => this.setState({ cbMoreOptions: !this.state.cbMoreOptions })}
                                />
                        </View>
                        <View style={styles.moreCheckBoxMessage}>
                            <Text onPress={() => this.setState({ cbMoreOptions: !this.state.cbMoreOptions })}>more options</Text>
                        </View>
                    </View>

                    {notificationsFrecuency}
                    
                </View>

    {/* ESTO ES EL FOOTER */}

                <View style={styles.footer}>
                    <MoreOptionsButton context={this}/>
                    <AddButton context={this}/>
                </View>
            </View>
        )
    }
}
