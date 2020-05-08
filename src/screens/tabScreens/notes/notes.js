import React from 'react';
import firebase from 'firebase'

import { View, Text } from 'react-native';
import { Fab } from 'native-base'
import { MaterialIcons} from '@expo/vector-icons'

import styles from './styles'
import FavouritesButton from '../../../components/favouritesButton'

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
        this.setState({ FavouritesFilter: !this.state.FavouritesFilter })
    }


    render(){

        return(
            <View style={styles.container}>      
                <View style={styles.subHeader}>
                    <View style= {{flex:7}}>   
                        <Text style={styles.title}> NOTES SCREEN </Text>         
                    </View>
                    <FavouritesButton context={this} />
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