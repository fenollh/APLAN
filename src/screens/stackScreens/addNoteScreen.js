import React from 'react'
import{
    View,
    Text,
    StyleSheet,
    TextInput,
} from 'react-native';
import { Button, Icon } from 'native-base';



export default class AddNoteScreen extends React.Component {
    
    constructor(){
        super()
        this.state= {
            Title: '',
            Body: '',
        }
    }

    saveTitle = async (title) => {
        this.setState({
            Title: title
        })
    }

    saveBody = async (body) => {
        this.setState({
            Body: body
        })
    }


    render(){
        return(
            <View style={styles.container}>

                <View style={{flex: 12, marginTop: '2%'}}>
                    <TextInput 
                        style={styles.inputTit} 
                        multiline={true} 
                        placeholder='titulo' 
                        scrollEnabled={true}
                        maxLength = {50}
                        onChangeText={(val) => this.saveTitle(val)}/>
                    <TextInput 
                        style= {styles.inputBod} 
                        multiline={true} 
                        placeholder='cuerpo' 
                        scrollEnabled={true}
                        textAlignVertical='top'
                        onChangeText={(val) => this.saveBody(val)}/>
                </View>

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
                        onPress={() => this.saveNote()
                        }>
                        <Text style={styles.addTxt}> ADD NOTE </Text>
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


