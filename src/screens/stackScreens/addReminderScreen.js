import React from 'react'
import{
    View,
    Text,
    StyleSheet,
    TextInput,
} from 'react-native'
import{
    Button,
    DatePicker,
    CheckBox,
    Icon,
} from 'native-base'


export default class AddReminderScreen extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            choseDate: new Date(),
            stringDate: '',
            cbNotifications: false,
            Title: '',
            Body: '',
        }
    }
    
    setDate = (newDate) => {
        this.setState({ choseDate: newDate })
        this.setState({ stringDate: this.state.choseDate.toString().substr(4, 12) })
    }
    activateNotifications = () =>{
        this.setState({ cbNotifications: !this.state.cbNotifications })
    }
    saveTitle = (title) => {
        this.setState({ Title: title })
    }
    saveBody = (body) => {
        this.setState({ Body: body })
    }


    render(){
        return(
            <View style={styles.container}>

    {/* ESTO ES EL HEADER */}

                <View style={styles.header}>
                    <Text style={styles.title}> ADD A REMINDER </Text>
                </View>

    {/* ESTO ES EL BODY    
        se divide en 5 filas (titulo, fecha, cuerpo, checkbox y el resto)
        la fila 4 checkbox se divide a su vez en tres columnas
    */}

                <View style={styles.body}>

                    <View style={styles.titleInput}>
                        <TextInput 
                            placeholder='What is happening?'
                            placeholderTextColor="rgb(150,150,150)"
                            multiline = {false}
                            maxLength ={50}
                            onChangeText={(val) => this.saveTitle(val)}
                            />
                    </View>

                    <View style= {styles.datePick}>
                        <DatePicker
                            defaultDate={Date.now}
                            androidMode={"calendar"}
                            placeHolderText="When is happening?"
                            placeHolderTextStyle={{ color: "rgb(150,150,150)", fontSize: 14 }}
                            onDateChange={(val) => this.setDate(val)}
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
                            onChangeText = {(val) => this.saveBody(val)}
                            />
                    </View>

                    <View style={{flex:1, flexDirection: 'row',}}>
                        <View style={{flex:8}}/>
                        <View style={styles.checkBox}>
                            <CheckBox 
                                checked={this.state.cbNotifications} color='rgb(100,180,255)'
                                onPress={() => this.activateNotifications()}
                                />
                        </View>
                        <View style={styles.checkBoxMessage}>
                            <Text onPress={() => this.activateNotifications()}>push notification</Text>
                        </View>
                    </View>

                    <View style={{flex:6}}/>
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
        flex: 1,
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
        flex: 1,
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

    checkBox: {
        flex:1, 
        margin: '3%',
    },

    checkBoxMessage:{
        flex:3, 
        margin: '1%',
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
