import React from 'react';
import firebase from 'firebase'

import{View, Text } from 'react-native';
import{ Fab, Button } from 'native-base'
import {AntDesign, MaterialIcons} from '@expo/vector-icons'

import styles from './styles'


const firebaseConfig = {
    apiKey: "AIzaSyAbXkNWtod5WFUFEbWVM6Q1BAmVDbVGAeo",
    authDomain: "aplan-8bbba.firebaseapp.com",
    databaseURL: "https://aplan-8bbba.firebaseio.com",
    projectId: "aplan-8bbba",
    storageBucket: "aplan-8bbba.appspot.com",
    messagingSenderId: "502481515083",
    appId: "1:502481515083:web:79017bc417ac4bf16b53ce",
    measurementId: "G-QLXPJEZCN3"
}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default class NotesScreen extends React.Component{

    constructor(props){
        super(props)

        this.state={
            FavouritesFilter: false,
            UserID: firebase.auth().currentUser.uid,
            NotesData: '',
        }
    }

    showFavourites = () => {
        //this.setState({ FavouritesFilter: !this.state.FavouritesFilter })
        //FILTRA SOLO LAS NOTAS FAVORITAS
        console.log('ID: ' + this.state.UserID)
        firebase.database().ref('/users/' + this.state.UserID + '/note').on('value', (data) => this.setState({ NotesData: data }))
        console.log(this.state.NotesData)
        
    }


    render(){
        let favouritesIcon

        this.state.FavouritesFilter
        ? favouritesIcon = <AntDesign name='star' size={30} color = {'rgb(255,251,167)'}/>
        : favouritesIcon = <AntDesign name='staro' size={30} color = {'rgb(52,251,167)'}/>

        return(
            <View style={styles.container}>      
                <View style={styles.subHeader}>
                    <View style= {{flex:7}}>   
                        <Text style={styles.title}> NOTES SCREEN </Text>         
                    </View>
                    <Button
                        iconRight light
                        onPress={() => this.showFavourites()}
                        style={styles.favoutites}>
                        
                        {favouritesIcon}
                    </Button>
                </View>

                <View style={styles.body}>

                    <Fab
                        position="bottomRight"
                        style={{ backgroundColor: 'rgb(100,180,255)' }}
                        onPress={() => this.props.navigation.navigate('addNote')}
                        >
                        <MaterialIcons name='note-add' style={{color: 'rgb(52,251,167)', fontSize: 30}} />
                    </Fab>
                </View>
            </View>
        )
    }
} 