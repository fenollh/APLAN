import React from 'react'
import { View, Text, FlatList, StyleSheet, Alert } from 'react-native'
import { Button } from 'native-base'
import { MaterialCommunityIcons } from 'react-native-vector-icons'

import {deleteData} from '../../../dataBaseFunctions/deleteData'


const deleteNote = (index) => {
    deleteData(index, 'notes')
}
const renderItem = (item, index) => {
    if(item.title || item.body){
        return (
            <View style={styles.item}>
                <Text style={styles.textItem}>{item.title}</Text>
                <View style = {{flex: 1}}/>
                <View style={{flex: 1, justifyContent: 'center',}}>
                    <Button 
                        style={styles.deleteButton}
                        icon
                        onPress={() => deleteNote(index)}>
                        <MaterialCommunityIcons name= 'delete' style={styles.deleteIcon}/>
                    </Button>
                </View>
            </View>
        )
    }
}

const NotesList = (props) => {

    return(
        <View style = {styles.list}>
            <FlatList
            data={props.context.state.data}
            renderItem={({ item, index }) => {
                if(item !== undefined){
                    return renderItem(item, index)
                }
            }}
            keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}
export default NotesList

const styles = StyleSheet.create({
    list: {
        flex: 1,
        marginTop: 10,
        marginStart: 10,
    },
    item: {
        flexDirection: 'row',
        height: 60,
        width: '95%',
        margin: 2,
        padding: 15,
        backgroundColor: 'yellow',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 10,
    },
    textItem: {
        flex: 3,
        backgroundColor: 'green'
    },
    deleteButton: {
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor: 'yellow'
    },
    deleteIcon: {
        fontSize: 30,
        color: 'red'
    }
})
