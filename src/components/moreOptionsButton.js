import React from 'react'
import {StyleSheet, Text} from 'react-native'
import {Button, Icon} from 'native-base'

const MoreOptionsButton = (props) => {
    return(
        <Button 
            block info
            iconLeft
            title='advanced options' 
            style={styles.optionsBtn}
            >
            <Text style={styles.optionsTxt}> ADVANCED OPTIONS </Text>
            <Icon name= 'ios-settings' style={{marginRight: '7%', fontSize: 30, color: 'rgb(52,251,167)'}}/>
        </Button>
    )
}
export default MoreOptionsButton

const styles = StyleSheet.create({
    optionsBtn: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: '1%',
        borderRadius: 20,
        padding: '5%',
        backgroundColor: 'rgb(100,180,255)',
    },

    optionsTxt:{
        fontWeight: 'bold',
        fontSize: 15,
        marginLeft: '1%'
    },
})