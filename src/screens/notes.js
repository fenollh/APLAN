import React from 'react';
import{View, 
    Text,
    StyleSheet,
    TextInput,
    Button,
    Alert,
    ScrollView,
} from 'react-native';
import AddNote from '../data/notesData'


export default class NotesScreen extends React.Component{

    newNote = () => {
        const note = new AddNote
        note.addNote()
    }
    
    render(){
        return(
            <View style={styles.main}>        
 
                <Button title= 'add note' onPress={() => this.newNote()}></Button>
                <ScrollView>

                </ScrollView>
            </View>
        )
    }
} 

const styles = StyleSheet.create({
    main: {
        flex: 14,
        backgroundColor: 'rgb(230,230,230)',
    },
});