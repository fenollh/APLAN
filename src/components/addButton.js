import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { Button, Icon } from 'native-base'

const AddButton = () => {
    return(
        <Button 
            block success
            iconLeft
            style={styles.addBtn} 
            //onPress={() => props.context.addNote()}
            >
            <Text style={styles.addTxt}> ADD {this.type} </Text>
            <Icon name= 'ios-add' style={{ fontSize: 40, color: 'rgb(52,251,167)'}}/>
        </Button>
    )
} 
export {AddButton}

const styles = StyleSheet.create({
    addBtn:{
        flex:1,
        marginHorizontal: '1%',
        borderRadius: 20,
        backgroundColor: 'rgb(100,180,255)',
        padding: 20,
    },
    addTxt:{
        marginLeft: '15%',
        fontWeight: 'bold',
        fontSize: 15,
    },
})