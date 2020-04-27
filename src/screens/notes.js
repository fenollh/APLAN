import React from 'react';
import{View, 
    StyleSheet,
    Button,

} from 'react-native';

import AddNote from '../data/notesData'


export default class NotesScreen extends React.Component{
    
    render(){

        return(
            <View style={styles.main}>        
 
                <Button title= 'add note' onPress={() => this.props.navigation.navigate('addNoteScreen')}></Button>

            </View>
        )
    }
} 

const styles = StyleSheet.create({
    main: {
        flex: 14,
        backgroundColor: 'rgb(230,230,230)',
    },
})