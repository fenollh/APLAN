import React from 'react'

import { View, Text, StyleSheet, TextInput } from 'react-native'
import{ DatePicker, CheckBox, ListItem, Left, Right, Radio } from 'native-base'
import { MaterialCommunityIcons } from 'react-native-vector-icons'

import { updateData } from '../../../dataBaseFunctions/updateData'
import UpdateButton from '../../../components/updateButton'
import { getData } from '../../../dataBaseFunctions/saveData'

export default class ReminderView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            index: this.props.route.params.index,
            title: '',
            body: '',
            stringDate: '',
            data: [],
            choseDate: new Date(),
            importance: [],
            radio: [],
            readOnly: true,
            cbNotifications:[]
            
        }
    }

    componentDidMount(){
        getData(this, 'reminders')
        .then(()=>console.log(this.state.data))
        .then(() => this.setState({
            title: this.state.data[this.state.index].title,
            body: this.state.data[this.state.index].body,
            stringDate: this.state.data[this.state.index].date,
            importance: this.state.data[this.state.index].importance, 
            cbNotifications: this.state.data[this.state.index].notifications, 
        }))
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


    changeRadio = (pressedRad) => {
        switch(pressedRad){
            case 0:
                !this.state.importance[0] 
                ?this.setState({ importance: [true, false, false]})
                :this.setState({ importance: [false, this.state.importance[1], this.state.importance[2]] })
                break

            case 1:
                !this.state.importance[1]
                ?this.setState({ importance: [false, true, false]})
                :this.setState({ importance: [this.state.importance[0], false, this.state.importance[2]] })
                break
                
            case 2:
                !this.state.importance[2]
                ?this.setState({ importance: [false, false, true]})
                :this.setState({ importance: [this.state.importance[0], this.state.importance[1], false] })
                break
            default:
                this.setState({ importance: [true, true, true] })
        }
    }

    render(){
        let dataView
        let importanceIcon
        if(this.state.importance[0]){
            importanceIcon= <MaterialCommunityIcons name='alert-decagram' size={60} color='rgb(230,0,0)'/>
        }
        else if(this.state.importance[1]){
            importanceIcon= <MaterialCommunityIcons name='calendar-alert' size={60} color='rgb(255,190,0)'/>
        }
        else if(this.state.importance[2]){
            importanceIcon= <MaterialCommunityIcons name='bell-alert' size={60} color='rgb(0,210,0)'/>
        }
        else {
            importanceIcon= <MaterialCommunityIcons name='calendar-clock' size={60} color='rgb(100,180,255)'/>
        }

        if(this.state.readOnly){
            dataView=
            <View style={{flex: 1}}>
                <View style={styles.title}> 
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>{this.state.title}</Text>
                </View>
                
                <View style={{flex:8, flexDirection: 'row', paddingHorizontal: 10}}>
                    <View style={styles.date}>
                        <View style={{flex: 0.4, alignItems:'center'}}>
                        </View>
                        <View style={{flex:1, alignItems: 'center'}}>
                            <Text style={styles.dateTxt}>Date: {this.state.stringDate} </Text>
                        </View>
                        <View style={{flex:3, flexDirection: 'column', marginEnd: '5%'}}>
                            <View style={styles.importanceIcon}>{importanceIcon}</View>
                            <View style={{flex:2}}>
                                <ListItem>
                                    <Left style={{flex:1}}>
                                        <Radio 
                                            selected={this.state.importance[0]} 
                                            selectedColor='rgb(230,0,0)'/>
                                    </Left>
                                    <Right style={{flex:4}} >
                                        <Text >Muy importante</Text>
                                    </Right>
                                </ListItem>
                                <ListItem>
                                    <Left style={{flex: 1}}>
                                        <Radio 
                                            selected={this.state.importance[1]} 
                                            selectedColor='rgb(255,190,0)'/>
                                    </Left>
                                    <Right style={{flex:4}}>
                                        <Text >Normal</Text>
                                    </Right>
                                </ListItem>

                                <ListItem>
                                    <Left style={{flex:1}}>
                                        <Radio 
                                            selected={this.state.importance[2]} 
                                            selectedColor='rgb(0,210,0)'/>
                                    </Left>
                                    <Right style={{flex:4}} >
                                        <Text>Poco importante</Text>
                                    </Right>
                                </ListItem>
                            </View>
                        </View>
                    </View>
                    <View style={styles.body}>
                        <Text> {this.state.body} </Text>
                    </View>

                </View>
                <View style={{flex: 2, flexDirection: 'row'}}>
                    <View style={styles.checkBox}>
                        <View style={{flex:1}}>
                            <CheckBox 
                                checked={this.state.cbNotifications[1]} 
                                color='rgb(100,180,255)'/>
                            </View>
                        <View style={{flex:1}}>
                            <Text> 1 hour before</Text>
                        </View>
                    </View>

                    <View style={styles.checkBox}>
                        <View style={{flex:1}}>
                            <CheckBox 
                                checked={this.state.cbNotifications[2]} 
                                color='rgb(100,180,255)'/>
                            </View>
                        <View style={{flex:1}}>
                            <Text> 1 day before</Text>
                        </View>
                    </View>

                    <View style={styles.checkBox}>
                        <View style={{flex:1}}>
                            <CheckBox 
                                checked={this.state.cbNotifications[3]} 
                                color='rgb(100,180,255)'/>
                            </View>
                        <View style={{flex:1}}>
                            <Text> 1 week before</Text>
                        </View>
                    </View>

                    <View style={styles.checkBox}>
                        <View style={{flex:1}}>
                            <CheckBox 
                                checked={this.state.cbNotifications[0]} 
                                color='rgb(100,180,255)'/>
                            </View>
                        <View style={{flex:1}}>
                            <Text> At the moment</Text>
                        </View>
                    </View>
                    
                </View>
            </View>

        }




        else{
            dataView = 
            <View style={{flex: 1}}>
                <View style={styles.title}> 
                    <TextInput
                        value={this.state.title}
                        style={{fontSize: 20, fontWeight: 'bold'}}
                        onChangeText={(title)=>this.setState({ title })}
                        />
                </View>
                
                <View style={{flex:8, flexDirection: 'row', paddingHorizontal: 10}}>
                    <View style={styles.date}>
                        <View style={{flex: 0.4, alignItems:'center'}}>
                        <DatePicker
                            androidMode={"calendar"}
                            placeHolderText= 'Change date'
                            defaultDate={Date.now}
                            placeHolderTextStyle={{ color: "rgb(150,150,150)", fontSize: 14 }}
                            onDateChange={(date) => this.setState({ choseDate: date, stringDate: date.toString().substr(4, 12) })}
                            disabled={false}
                            
                            />
                        </View>
                        <View style={{flex:1, alignItems: 'center'}}>
                            <Text style={styles.dateTxt}>Date: {this.state.stringDate} </Text>
                        </View>
                        <View style={{flex:3, flexDirection: 'column', marginEnd: '5%'}}>
                            <View style={styles.importanceIcon}>{importanceIcon}</View>
                            <View style={{flex:2}}>
                                <ListItem onPress={()=> this.changeRadio(0)}>
                                    <Left style={{flex:1}}>
                                        <Radio 
                                            selected={this.state.importance[0]} 
                                            onPress={()=> this.changeRadio(0)} 
                                            selectedColor='rgb(230,0,0)'/>
                                    </Left>
                                    <Right style={{flex:4}} >
                                        <Text >Muy importante</Text>
                                    </Right>
                                </ListItem>
                                <ListItem onPress={()=> this.changeRadio(1)}>
                                    <Left style={{flex: 1}}>
                                        <Radio 
                                            selected={this.state.importance[1]} 
                                            onPress={()=> this.changeRadio(1)}
                                            selectedColor='rgb(255,190,0)'/>
                                    </Left>
                                    <Right style={{flex:4}}>
                                        <Text >Normal</Text>
                                    </Right>
                                </ListItem>

                                <ListItem onPress={()=> this.changeRadio(2)}>
                                    <Left style={{flex:1}}>
                                        <Radio 
                                            selected={this.state.importance[2]} 
                                            onPress={()=> this.changeRadio(2)}
                                            selectedColor='rgb(0,210,0)'/>
                                    </Left>
                                    <Right style={{flex:4}} >
                                        <Text>Poco importante</Text>
                                    </Right>
                                </ListItem>
                            </View>
                        </View>
                    </View>
                    <View style={styles.body}>
                        <TextInput
                            value={this.state.body}
                            multiline={true}
                            onChangeText={(val) => this.setState({ body: val })}
                            />
                    </View>

                </View>
                <View style={{flex: 2, flexDirection: 'row'}}>
                    <View style={styles.checkBox}>
                        <View style={{flex:1}}>
                            <CheckBox 
                                checked={this.state.cbNotifications[1]} 
                                onPress={() => this.changeCbNotifications(1)}
                                color='rgb(100,180,255)'/>
                            </View>
                        <View style={{flex:1}}>
                            <Text onPress={() => this.changeCbNotifications(1)}> 1 hour before</Text>
                        </View>
                    </View>

                    <View style={styles.checkBox}>
                        <View style={{flex:1}}>
                            <CheckBox 
                                checked={this.state.cbNotifications[2]} 
                                onPress={() => this.changeCbNotifications(2)}
                                color='rgb(100,180,255)'/>
                            </View>
                        <View style={{flex:1}}>
                            <Text onPress={() => this.changeCbNotifications(2)}> 1 day before</Text>
                        </View>
                    </View>

                    <View style={styles.checkBox}>
                        <View style={{flex:1}}>
                            <CheckBox 
                                checked={this.state.cbNotifications[3]} 
                                onPress={() => this.changeCbNotifications(3)}
                                color='rgb(100,180,255)'/>
                            </View>
                        <View style={{flex:1}}>
                            <Text onPress={() => this.changeCbNotifications(3)}> 1 week before</Text>
                        </View>
                    </View>

                    <View style={styles.checkBox}>
                        <View style={{flex:1}}>
                            <CheckBox 
                                checked={this.state.cbNotifications[0]} 
                                onPress={() => this.changeCbNotifications(0)}
                                color='rgb(100,180,255)'/>
                            </View>
                        <View style={{flex:1}}>
                            <Text onPress={() => this.changeCbNotifications(0)}> At the moment</Text>
                        </View>
                    </View>
                    
                </View>
            </View>

        }




        return(
            <View style= {styles.container}>
                 <View style={styles.main}>
                    {dataView}
                    <View style={{ alignItems: 'flex-end' }}>
                        <UpdateButton context={this} type='reminders'/>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(100,180,255)',
    },
    main: {
        flex:1,
        flexDirection: 'column',
        margin: '2%',
        marginBottom: '5%',
        backgroundColor: 'rgb(220, 235,255)',
        borderRadius: 50,
    },
    title: {
        flex:1,
        margin: 20,
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    date:{
        flex:1,
        flexDirection: 'column',
    },
    dateTxt:{
    },
    importanceIcon: {
        flex:1, 
        alignItems:'center', 
        justifyContent: 'center'
    },
    body: {
        flex: 1,
        borderWidth: 1,
        padding: '2%',
        borderRadius: 20
    },
    checkBox: {
        flex:1, 
        flexDirection: "column", 
        alignItems: 'center', 
        marginTop: 20
    }
})