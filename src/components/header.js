import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import{
    Container,
    View,
    Button,
    Icon,
    Fab,
} from 'native-base'

export default class Header extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            fabActive: false,
        }
    }
    

    render(){
        return(
            <Container style={styles.container}>
                <View style={styles.menu}>
                    <Ionicons.Button backgroundColor='rgb(52,251,167)' name="md-menu" size={50} color="rgb(0,158,255)" onPress={() => Alert.alert('Simple Button pressed')} />
                </View>
                <View style={styles.nombre}>
                    <Text style={{fontWeight: 'bold', fontSize: 30, marginStart: '17%' }}>APLAN</Text>
                </View>
                <View style={styles.anadir}>
                </View>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        backgroundColor: 'rgb(52,251,167)',
        flexDirection: 'row',
        alignItems: 'center',
        maxHeight: 100,
    },
    menu: {
        flex:3,
        marginStart: '5%',
        marginTop: '3%',
    },
    nombre: {
        flex:10,
        marginTop: '3%',
        marginLeft: '9%',
    },
    anadir:{
        flex:4,
        marginTop: '5%',
    }
})