import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default class Header extends React.Component{

    render(){
        return(
            <View style={styles.container}>

                <View style={styles.menu}>
                    <Ionicons.Button 
                        backgroundColor='rgb(100,180,255)'//azul 
                        name="md-menu" 
                        size={50} 
                        color="rgb(52,251,167)" //verde
                        onPress={() => 
                        Alert.alert('Simple Button pressed')} />
                </View>

                <View style={styles.nombre}>
                    <Text style={{fontWeight: 'bold', fontSize: 30, marginStart: '17%' }}>APLAN</Text>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        marginTop: '3%',
        backgroundColor: 'rgb(100,180,255)',//azul
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
        marginLeft: '-2%',
    },
})