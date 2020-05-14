import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { getData } from '../../../dataBaseFunctions/saveData'
import { FontAwesome5 } from 'react-native-vector-icons'
import { Button } from 'native-base'
import { TextInput } from 'react-native-paper'

export default class NoteView extends React.Component {
    constructor(props){
        super(props)
        this.state={
            index: this.props.route.params.index,
            data: [],
            title: '',
            body: '',
            readOnly: true,
        }
    }

    componentDidMount(){
        getData(this, 'notes')
        .then(() => this.setState({ 
            title: this.state.data[this.state.index].title, 
            body: this.state.data[this.state.index].body 
        }))
    }
    
    render(){
        let dataView
        if(this.state.readOnly){
            dataView = 
            <View style={{flex:11}}>
                <View style={styles.title}>
                    <Text style={styles.titleTxt}>{this.state.title}</Text>
                </View>
                <View style={styles.body}>
                    <Text style={styles.bodyTxt}>{this.state.body}</Text>
                </View>
            </View>
        }else{
            dataView = 
            <View style={{flex: 11}}>
                <View style={styles.title}>
                </View>
                <View style={styles.body}>
                </View>
            </View>
        }



        return(
            <View style={styles.container}>
    
                <View style={styles.main}>
                    {dataView}
                    <View style={{ alignItems: 'flex-end' }}>
                        <Button
                        style={styles.editButton}
                        icon
                        onPress={() => this.setState({ readOnly: !this.state.readOnly })}>
                            <FontAwesome5 name='edit' style={styles.editIcon}/>
                        </Button>
                    </View>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'rgb(100,180,255)',
    },
    main: {
        flex:1,
        flexDirection: 'column',
        margin: '2%',
        marginBottom: '5%',
        backgroundColor: 'rgb(220, 235,255)',
        borderRadius: 50,
    },
    title:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopStartRadius: 50,
        borderTopEndRadius: 50,
        backgroundColor: 'rgb(180, 215,255)',
    },
    body:{
        flex:10,
        padding: '5%',
    },
    titleTxt: {
        fontWeight: 'bold',
        fontSize: 20,
    },  
    editButton:{
        height: 60,
        width: 60,
        marginEnd: '3%',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(100,180,255)'
    },
    editIcon:{
        fontSize: 30,
        color: 'rgb(52,251,167)'
    },
})