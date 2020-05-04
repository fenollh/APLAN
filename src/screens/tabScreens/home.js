import React from 'react';
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import firebase from 'firebase'
import{ 
    Text,
    StyleSheet
} from 'react-native';
import{
    Container,
    View,
    Button,
    Fab,
    Icon
} from 'native-base'
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


export default class HomeScreen extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            fabActive: false,
            UserID: firebase.auth().currentUser.uid,
        }
    }


    render(){
        return(
            
            <Container style={styles.main}>
                <View><Text> hola </Text></View>
                    <Fab
                    active={this.state.fabActive}
                    direction = 'up'
                    position="bottomRight"
                    containerStyle={{ }}
                    style={{ backgroundColor: 'rgb(100,180,255)' }}
                    onPress={() => this.setState({fabActive: !this.state.fabActive})}
                    >
                        <Ionicons name='md-add' style={{color: 'rgb(52,251,167)', fontSize: 40}}/>
                        <Button style={{ backgroundColor: 'rgb(80,130,255)'}} onPress={() => this.props.navigation.navigate('addNote')}>
                            <MaterialIcons name="note-add" style={{fontSize: 25, color: 'rgb(52,251,167)'}} />
                        </Button>
                        <Button style={{ backgroundColor: 'rgb(80,130,255)'}} onPress={() => this.props.navigation.navigate('addReminder')}>
                            <MaterialCommunityIcons name="reminder" style={{ fontSize: 25, color: 'rgb(52,251,167)'}}/>
                        </Button>

                    </Fab>
            </Container>
        )
    }
} 

const styles = StyleSheet.create({

    main: {
        flex: 14,
        backgroundColor: 'rgb(230,240,255)',
    },
});
