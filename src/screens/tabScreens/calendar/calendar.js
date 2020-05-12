import React from 'react';
import firebase from 'firebase'

import { MaterialCommunityIcons } from '@expo/vector-icons'
import { View, Text } from 'react-native';
import { Fab } from 'native-base'

import styles from './styles'
import FavouritesButton from '../../../components/favouritesButton'
import FabButton from '../../../components/fabButton'

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


export default class CalendarScreen extends React.Component{

    constructor(props){
        super(props)
        
        console.ignoredYellowBox = ['Setting a timer'];
        this.state={
            FavouritesFilter: false,
            UserID: firebase.auth().currentUser.uid,
           
        }
    }

    showFavourites = () => {
        this.setState({ FavouritesFilter: !this.state.FavouritesFilter })
    }

    render(){ 

        return(
            <View style={styles.main}>      
                <View style={{flex: 1, flexDirection: 'row', marginTop: '1%'}}>
                    <View style= {{flex:7}}>   
                        <Text style={styles.title}> ESTO ES CALENDAR </Text>         
                    </View>
                    <FavouritesButton context={this} />
                </View>
                <View style={{flex: 14}}>
                    <FabButton type = 'calendar' navigation = {this.props.navigation}/>
                </View>
            </View>
        )
    }
} 
