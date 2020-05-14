import React from 'react'
import { View, Text, FlatList, StyleSheet, Alert, TouchableOpacity } from 'react-native'

import { MaterialCommunityIcons, AntDesign } from 'react-native-vector-icons'

import {setData} from '../../../dataBaseFunctions/saveData'



const deleteNote = async (index, context) => {
    let arrData = context.state.data
    arrData.splice(index,1)
    context.setState({ data: arrData })
    setData(context, 'notes')
}

const renderItem = (item, index, context) => {
    if(item.title || item.body){
        return (
            <TouchableOpacity  style={styles.item} onPress={()=>context.props.navigation.navigate('noteView', {index: index})}>
                <Text style={styles.textItem}>{item.title}</Text>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
                </View>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <MaterialCommunityIcons name= 'delete' style={styles.deleteIcon} onPress={() => deleteNote(index, context)}/>
                </View>
            </TouchableOpacity>
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
                    return renderItem(item, index, props.context)
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
        marginTop: 5,
        padding: 15,
        backgroundColor: 'rgb(160,230,255)',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
    },
    textItem: {
        flex: 5,
        fontSize: 20,
        fontWeight: 'bold',
    },
    deleteIcon: {
        fontSize: 30,
        color: 'red'
    },

    favouriteIcon: {
        fontSize: 30,
        color: 'yellow'
    }
})
