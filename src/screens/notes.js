import React from 'react';
import{View, 
    StyleSheet,
    Button,
    Alert,
    AsyncStorage,

} from 'react-native';

import AddNote from '../data/notesData'


export default class NotesScreen extends React.Component{
    
    seeTitle = async () => {
        const data_string = await AsyncStorage.getItem('@arr')
        const data_arr = JSON.parse(data_string)
        Alert.alert(JSON.stringify(data_arr))
    }

    render(){
        
        return(
            <View style={styles.main}>        
 
                <Button title= 'add note' onPress={() => this.props.navigation.navigate('addNoteScreen')}></Button>
                <Button title = 'show title' onPress={() => this.seeTitle()}/>

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