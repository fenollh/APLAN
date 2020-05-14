import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { getData } from '../../../dataBaseFunctions/saveData'

export default class NoteView extends React.Component {
    constructor(props){
        super(props)
        this.state={
            index: this.props.route.params.index,
            data: [],
            title: '',
            body: ''
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
        return(
            <View style={styles.container}>
    
                <View style={styles.main}>
                    <View style={styles.title}>
                        <Text style={styles.titleTxt}>{this.state.title}</Text>
                    </View>
                    <View style={styles.body}>
                        <Text style={styles.bodyTxt}>{this.state.body}</Text>
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
})