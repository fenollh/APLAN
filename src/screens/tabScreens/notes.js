import React from 'react';
import{View, 
    StyleSheet,
    Text,
    FlatList,
} from 'react-native';

import{
    Fab,
    Button,
    List,
    ListItem,
} from 'native-base'
import {AntDesign, MaterialIcons} from '@expo/vector-icons'


export default class NotesScreen extends React.Component{

    constructor(props){
        super(props)

        this.state={
            FavouritesFilter: false
        }
    }

    showFavourites = () => {
        this.setState({ FavouritesFilter: !this.state.FavouritesFilter })
        //FILTRA SOLO LAS NOTAS FAVORITAS
    }

    saveNote= (title) => {

    }

    render(){
        
        let favouritesIcon

        this.state.FavouritesFilter
        ? favouritesIcon = <AntDesign name='star' size={30} color = {'rgb(255,251,167)'}/>
        : favouritesIcon = <AntDesign name='staro' size={30} color = {'rgb(52,251,167)'}/>

        return(
            <View style={styles.container}>      
                <View style={styles.subHeader}>
                    <View style= {{flex:7}}>   
                        <Text style={styles.title}> ESTO ES NOTES </Text>         
                    </View>
                    <Button
                        iconRight light
                        onPress={() => this.showFavourites()}
                        style={styles.favoutites}>
                        
                        {favouritesIcon}
                    </Button>
                </View>

                <View style={styles.body}>

                    <Fab
                        position="bottomRight"
                        style={{ backgroundColor: 'rgb(100,180,255)' }}
                        onPress={() => this.props.navigation.navigate('addNote')}>
                        <MaterialIcons name='note-add' style={{color: 'rgb(52,251,167)', fontSize: 30}} />
                    </Fab>
                </View>
            </View>
        )
    }
} 

const styles = StyleSheet.create({
    container: {
        flex: 14,
        flexDirection: 'column',
        backgroundColor: 'rgb(230,240,255)',
    },

    subHeader: {
        flex: 1, 
        flexDirection: 'row', 
        marginTop: '1%'
    },

    favoutites: {
        flex:1,
        width: '20%',
        borderRadius: 20,
        justifyContent: 'center',
        marginEnd: '2%',
        marginTop: '0%',
        backgroundColor: 'rgb(100,180,255)',
    },

    title: {
        marginTop: '2%',
        fontWeight: 'bold',
        fontSize: 20,
    },

    body: {
        flex:14,
    },

    list:{

    },
})