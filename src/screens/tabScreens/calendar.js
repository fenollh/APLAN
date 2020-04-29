import React from 'react';
import{View, 
    Text,
    StyleSheet,
} from 'react-native';
import{
    Fab,
    Button,
} from 'native-base'
import {MaterialCommunityIcons, AntDesign} from '@expo/vector-icons'



export default class CalendarScreen extends React.Component{

    constructor(){
        super()
        this.state={
            FavouritesFilter: true
        }
    }

    showFavourites = () => {
        this.setState=({ FavouritesFilter: !this.state.FavouritesFilter })
        //FILTRA SOLO LAS NOTAS FAVORITAS
    }

    render(){ 
    
        return(
            <View style={styles.main}>      
                <View style={{flex: 1, flexDirection: 'row', marginTop: '1%'}}>
                    <View style= {{flex:7}}>   
                        <Text style={styles.title}> ESTO ES CALENDAR </Text>         
                    </View>
                    <Button
                        iconRight light
                        onPress={() => this.showFavourites()}
                        style={styles.favourites}
                    >
                        
                        <AntDesign name='staro' size={30} color = {'rgb(52,251,167)'}/>
                    </Button>
                </View>
                <View style={{flex: 14}}>
                    <Fab
                        position="bottomRight"
                        style={{ backgroundColor: 'rgb(100,180,255)' }}
                        onPress={() => this.props.navigation.navigate('addReminder')}>
                        <MaterialCommunityIcons name='reminder' style={{color: 'rgb(52,251,167)', fontSize: 30}}/>
                    </Fab>
                </View>
            </View>
        )
    }
} 

const styles = StyleSheet.create({
    main: {
        flex: 14,
        flexDirection: 'column',
        backgroundColor: 'rgb(230,240,255)',
    },
    favourites: {
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
    }
})
