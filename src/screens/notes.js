import React from 'react';
import{View, 
    Text,
    StyleSheet,
    TextInput,
    Button
} from 'react-native';





export default class NotesScreen extends React.Component{

    constructor(){
        super()
        this.state = {
            titulo: 'hola',
            cuerpo: 'pepe',
            arrNotes: []
        }
    }

    addNote = () => {  this.state.arrNotes.push({"titulo":this.state.titulo, "cuerpo":this.state.cuerpoerp})   }


    render(){
        return(
            <View style={styles.main}>        
                <TextInput placeholder='titulo' onChangeText={(val)=> this.setState({titulo: val})}/>
                <Button title= 'add note' onPress={() => this.addNote()}></Button>
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