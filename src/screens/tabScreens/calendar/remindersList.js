import React from 'react'
import { View, Text, FlatList, StyleSheet, Alert, TouchableOpacity } from 'react-native'

import { MaterialCommunityIcons, AntDesign } from 'react-native-vector-icons'

import { deleteData } from '../../../dataBaseFunctions/deleteData'
import { TextInput } from 'react-native-gesture-handler'


const renderItem = (item, index, context) => {
    
    if(item.title || item.body){

        let importanceIcon
        console.log(item.importance)
        if(item.importance[0]) {importanceIcon = <MaterialCommunityIcons name='alert-decagram' size={40} color='rgb(230,0,0)'/>}
        else if (item.importance[1]) importanceIcon = <MaterialCommunityIcons name='calendar-alert' size={40} color='rgb(255,190,0)'/>
        else if (item.importance[2]) importanceIcon = <MaterialCommunityIcons name='bell-alert' size={40} style={{marginEnd: '10%'}} color='rgb(0,210,0)'/>
        else {importanceIcon= <MaterialCommunityIcons name='calendar-clock' size={40} color='rgb(100,180,255)'/>}

        return (
            <TouchableOpacity  style={styles.item} onPress={()=>context.props.navigation.navigate('reminderView', {index: index})}>
                <View style={{flex:1, justifyContent: 'center'}}>
                    {importanceIcon}
                </View>
                <Text style={styles.textItem}>{item.title}</Text>
                <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
                    <Text>{item.date}</Text>
                </View>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <MaterialCommunityIcons name= 'delete' style={styles.deleteIcon} onPress={() => deleteData(index, context, 'reminders')}/>
                </View>
            </TouchableOpacity>
        )
    }
}

const RemindersList = (props) => {
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
export default RemindersList

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
        flex: 3,
        marginStart: '3%',
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