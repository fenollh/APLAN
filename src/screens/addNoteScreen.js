import React from 'react'
import{
    View,
    Text,
    StyleSheet,
    TextInput,
    Alert,
    Button
} from 'react-native';
import AddNote from '../data/notesData'
const newNote = new AddNote


export default class AddNoteScreen extends React.Component {
    
    constructor(){
        super()
        this.state= {
            Title: 'titulo',
            Body: 'cuerpo',
        }
    }

    saveTitle = (tit) => {
        this.setState({
            Title: tit
        })
    }
    saveBody = (body) => {
        this.setState({
            Body: body
        })
    }

    saveNote = () => {
        newNote.addNote(this.state.Title, this.state.Body)
        Alert.alert('note added')
    }

    render(){
        return(
            <View style={styles.container}>
                <Text> ESTO ES addNoteScreen</Text>
                <TextInput placeholder='titulo' onChangeText={(val) => this.saveTitle(val)}/>
                <TextInput height='60%' placeholder='cuerpo' onChangeText={(val) => this.saveBody(val)}/>
                <Text>Titulo: {this.state.Title}</Text>
                <Text>Cuerpo: {this.state.Body}</Text>
                <Button title = 'ADD NOTE' onPress={() => this.saveNote()}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        height: '100%', 
        width: '100%',
    },
})


