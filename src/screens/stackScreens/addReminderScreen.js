import React from 'react'
import * as firebase from 'firebase'
import{
    View,
    Text,
    StyleSheet,
    TextInput,
    Alert,
} from 'react-native'
import{
    Button,
    DatePicker,
    CheckBox,
    ListItem,
    Left,
    Right,
    Radio,
    Icon,
} from 'native-base'

import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

export default class AddReminderScreen extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            choseDate: new Date(),
            stringDate: '',
            Title: '',
            Body: '',
            Radio: [false, true, false],
            cbNotifications:[false,false,false,false,false],
            inputNotifications:[0,0,0],
        }
    }

    saveNote = (title, date, body, notifications) => {
        reminder = {'Title': title,'Date': date,'Body': body,'Notifications': notifications}

    }

    changeRadio = (pressedRad) => {
        switch(pressedRad){
            case 0:
                !this.state.Radio[0] 
                ?this.setState({ Radio: [true, false, false]})
                :this.setState({ Radio: [false, this.state.Radio[1], this.state.Radio[2]] })
                break

            case 1:
                !this.state.Radio[1]
                ?this.setState({ Radio: [false, true, false]})
                :this.setState({ Radio: [this.state.Radio[0], false, this.state.Radio[2]] })
                break
                
            case 2:
                !this.state.Radio[2]
                ?this.setState({ Radio: [false, false, true]})
                :this.setState({ Radio: [this.state.Radio[0], this.state.Radio[1], false] })
                break
            default:
                this.setState({ Radio: [true, true, true] })
        }
    }

    changeCbNotifications = (pressedCb) => {
        const that= this.state.cbNotifications
        switch(pressedCb){
            case 0: 
                this.setState({ cbNotifications: [!that[0], that[1], that[2], that[3], that[4]] })
                break
            case 1:
                this.setState({ cbNotifications: [that[0], !that[1], that[2], that[3], that[4]] })
                break
                
            case 2:
                this.setState({ cbNotifications: [that[0], that[1], !that[2], that[3], that[4]] })
                break

            case 3:
                this.setState({ cbNotifications: [that[0], that[1], that[2], !that[3], that[4]] })
                break

            case 4:
                this.setState({ cbNotifications: [that[0], that[1], that[2], that[3], !that[4]] })
                break
        }
    }

    changeInputNotifications = (time, changedInput) => {
        const that= this.state.inputNotifications
        switch(changedInput){
            case 0:
                this.setState({ inputNotifications: [time, that[1], that[2]]})
                break
            case 1:
                break
            case 2:
                break
        }
    }


    render(){

        let importantIcon
        if(this.state.Radio[0]){
            importantIcon= <MaterialCommunityIcons name='alert-decagram' size={60} color='rgb(230,0,0)'/>
        }
        else if(this.state.Radio[1]){
            importantIcon= <MaterialCommunityIcons name='calendar-alert' size={60} color='rgb(255,190,0)'/>
        }
        else if(this.state.Radio[2]){
            importantIcon= <MaterialCommunityIcons name='bell-alert' size={60} color='rgb(0,210,0)'/>
        }
        else {
            importantIcon= <MaterialCommunityIcons name='calendar-clock' size={60} color='rgb(100,180,255)'/>
        }

        let notificationsFrecuency
        if(this.state.cbNotifications[1]){
            notificationsFrecuency=
                <View style={{flex:6, flexDirection: 'column', marginTop:'10%', marginLeft: '3%'}}>
                    <View style={{flex:1}}><Text>  We will warn you:  </Text></View>
                    <View style={{flex: 4, flexDirection: 'row', marginTop:'3%'}}>
                        <View style={{flex:1}}>
                            <CheckBox 
                                checked={this.state.cbNotifications[2]} 
                                onPress={() => this.changeCbNotifications(2)}
                                color='rgb(100,180,255)'/>
                            <View><Text onPress={() => this.changeCbNotifications(2)}> 1 hour before</Text></View>
                        </View>
                        <View style={{flex:1}}>
                            <CheckBox 
                                checked={this.state.cbNotifications[3]} 
                                onPress={() => this.changeCbNotifications(3)}
                                color='rgb(100,180,255)'/>
                            <View><Text onPress={() => this.changeCbNotifications(3)}> 1 day before</Text></View>
                        </View>
                        <View style={{flex:1}} >
                            <CheckBox 
                                checked={this.state.cbNotifications[4]} 
                                onPress={() => this.changeCbNotifications(4)}
                                color='rgb(100,180,255)'/>
                            <View><Text onPress={() => this.changeCbNotifications(4)}> 1 week before</Text></View>
                        </View>
                    </View>
                    <View style={{flex:2, flexDirection: 'row'}}>
                        <View style={{flex:1, alignItems:'center'}}><Text style={{fontSize: 20, fontWeight:'bold'}}>CUSTOM</Text></View>
                        <View style={{flex:1, marginRight:'5%'}}>
                            <TextInput 
                                keyboardType='number-pad' 
                                placeholder='mins'
                                maxLength={2} 
                                onChangeText={(val)=> this.changeInputNotifications(val, 0)}
                                style={{borderColor:'black', borderWidth:2, borderRadius:10, marginHorizontal:'15%', padding:5}}/>
                        </View>
                        <View style={{flex:1, marginRight:'5%'}}>
                            <TextInput 
                                keyboardType='number-pad' 
                                placeholder='hours'
                                maxLength={2} 
                                onChangeText={(val)=> this.changeInputNotifications(val, 1)}
                                style={{borderColor:'black', borderWidth:2, borderRadius:10, marginHorizontal:'15%', padding:5}}/>
                        </View>
                        <View style={{flex:1, marginRight:'5%'}}>
                            <TextInput 
                                keyboardType='number-pad' 
                                placeholder='days'
                                maxLength={3} 
                                onChangeText={(val)=> this.changeInputNotifications(val, 2)}
                                style={{borderColor:'black', borderWidth:2, borderRadius:10, marginHorizontal:'15%', padding:5}}/>
                        </View>

                    </View>
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
                            onChangeText={(title) => this.setState({ Title: title })}
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
                            onChangeText = {(body) => this.setState({ Body: body })}
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
                                            selected={this.state.Radio[0]} 
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
                                            selected={this.state.Radio[1]} 
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
                                            selected={this.state.Radio[2]} 
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
                                checked={this.state.cbNotifications[1]} color='rgb(100,180,255)'
                                onPress={() => this.changeCbNotifications(1)}
                                />
                        </View>
                        <View style={styles.moreCheckBoxMessage}>
                            <Text onPress={() => this.changeCbNotifications(1)}>more options</Text>
                        </View>
                    </View>

                    {notificationsFrecuency}
                </View>

    {/* ESTO ES EL FOOTER */}

                <View style={styles.footer}>
                    <View style={{flex:1}}>
                        <Button 
                            style={styles.optionsBtn}
                            iconLeft
                            >
                            <Text style={styles.optionsBtnTxt}> ADVANCED OPTIONS </Text>
                            <Icon name="ios-settings" style={{marginLeft: '5%', color: 'rgb(52,251,167)', fontSize: 30}}/>
                        </Button>
                    </View>

                    <View style={{flex:1}}>
                        <Button 
                            onPress={() => this.saveNote(this.state.Title, this.state.choseDate, this.state.Body, this.state.cbNotifications)}
                            style={styles.addBtn} 
                            iconLeft>
                            <Text style={styles.addBtnTxt}> ADD REMINDER</Text>
                            <Icon name='ios-add' style={{fontSize: 40, color: 'rgb(52,251,167)', marginRight: '10%'}}/>
                            
                        </Button>
                    </View>
                </View>
            </View>
        )
    }
}




const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'column',
        padding:'1%',
        backgroundColor: 'rgb(230,240,255)',
    },

    header: {
        flex: 1,
        paddingTop: '1%',
    },

    title: {
        flex:1,
        fontSize: 23,
        fontWeight: 'bold',
    },

    body: {
        flex: 16,
        marginBottom: '1%'
    },

    titleInput:{
        flex: 2,
        margin: '1%',
        justifyContent: 'center',
        paddingLeft: '5%',
        borderRadius: 20,
        borderWidth: 1.5,
        borderColor: 'rgb(100,180,255)',
        backgroundColor:'rgb(230,255,255)' 
    },
    
    bodyInput: {
        flex: 2,
        margin: '1%',
        padding: '3%',
        paddingLeft: '5%',        
        borderRadius: 20,
        borderWidth: 1.5,
        borderColor: 'rgb(100,180,255)',
        backgroundColor:'rgb(230,255,255)' 
    },

    datePick: {
        flex: 2,
        flexDirection: "row",
        margin: '1%', 
        padding: '3%',
        borderRadius: 20,
        borderWidth: 1.5,
        borderColor: 'rgb(100,180,255)',
        backgroundColor:'rgb(230,255,255)' 
    },

    dateText: {
        marginTop: '3%', 
        marginLeft: '30%',
        fontSize: 17,
        fontWeight: 'bold',
    },

    parameters:{
        flex: 5, 
        flexDirection: 'column'
    },

    importanceTitle:{
        marginLeft: '3%',
        fontSize: 15,
        textDecorationLine: 'underline'
    },

    importancePicker: {
        flex: 1, 
        flexDirection: 'row', 
        marginTop: '5%'
    },

    checkBox: {
        flex:1, 
        margin: '3%',
    },

    checkBoxMessage:{
        flex:3, 
        margin: '1%',
    },

    moreCheckBox: {
        flex:1, 
        margin: '3%',

    },

    moreCheckBoxMessage:{
        flex:3, 
        margin: '1%',
        marginTop:'3%'
    },

    footer:{
        flex:1.5,
        flexDirection: 'row',
        marginBottom: '1%'
    },

    addBtn: {
        flex:1,
        marginLeft: '1%',
        borderRadius: 20,
        backgroundColor: 'rgb(100,180,255)',
    },

    addBtnTxt:{
        marginLeft: '15%',
        fontWeight: 'bold',
        fontSize: 15,
    },

    optionsBtn: {
        flex: 1,
        justifyContent: 'center',
        marginRight: '1%',
        borderRadius: 20,
        padding: 20,
        backgroundColor: 'rgb(100,180,255)',
    },

    optionsBtnTxt:{
        marginLeft: '3%',
        fontWeight: 'bold',
        fontSize: 15,
    },

})
