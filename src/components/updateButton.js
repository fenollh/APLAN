import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

import { updateData } from '../dataBaseFunctions/updateData'    

import { FontAwesome5 } from 'react-native-vector-icons'
import { Button, Icon } from 'native-base'

export default class UpdateButton extends React.Component {

    constructor(props){
        super(props)
    }

    render(){
        let button

        if(this.props.context.state.readOnly){

            return(
            <Button
                style={styles.editButton}
                icon
                onPress={() => this.props.context.setState({ readOnly: !this.props.context.state.readOnly })}>
                <FontAwesome5 name='edit' style={{ fontSize: 30, color: 'rgb(52,251,167)'}}/>
            </Button>
            )

        }else{
            return(
            <Button
                style={styles.editButton}
                icon
                onPress={() => {
                    updateData(this.props.context, this.props.context.state.index, this.props.type)
                    console.log(this.props.context.state.index)
                    this.props.context.setState({ readOnly: !this.props.context.state.readOnly })
                }}>
                <Icon name='ios-add' style={{ fontSize: 50, color: 'rgb(52,251,167)'}}/>
            </Button>
            )
        }
    }
}

const styles = StyleSheet.create({
 
    editButton:{
        height: 60,
        width: 60,
        marginEnd: '3%',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(100,180,255)'
    },
})