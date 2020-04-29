import React from 'react'
import{
    View,
    Text,
    StyleSheet,
    TextInput,
    Alert,
    AsyncStorage,
} from 'react-native';
import { Button } from 'native-base';
import { Ionicons } from '@expo/vector-icons';



export default class AddNoteScreen extends React.Component {
    
    constructor(){
        super()
        this.state= {
            Title: '',
            Body: '',
            createArr: true
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
                        onChangeText={(val) => this.saveTitle(val)}/>
                    <TextInput 
                        style= {styles.inputBod} 
                        multiline={true} 
                        placeholder='cuerpo' 
                        scrollEnabled={true}
                        textAlignVertical='top'
                        onChangeText={(val) => this.saveBody(val)}/>
                </View>

                <View style={{flex: 1, flexDirection: 'row'}}> 
                    <Button 
                        block info
                        iconLeft
                        title='advanced options' 
                        style={styles.options}
                        >
                        <Text> ADVANCED OPTIONS </Text>
                        <Ionicons name= 'md-settings'/>
                    </Button>

                    <Button 
                        block success
                        iconLeft
                        style={styles.btn} 
                        onPress={() => this.saveNote()
                        }>
                        <Text> ADD NOTE </Text>
                        <Ionicons name= 'md-add'/>
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
        btn:{
            flex:3,
           // height: '',
            borderRadius: 10,
            marginLeft: '2%',
            marginRight: 8
        },

        options: {
            flex: 2,
           // height: '80%',
            borderRadius: 10,
            marginLeft: 8
        },

})


