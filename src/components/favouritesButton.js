import React from 'react'
import { StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { Button } from 'native-base'

const renderIcon = (status) => {
    if(status == true){
        return <AntDesign name='star' size={30} color = {'rgb(255,251,167)'}/>
    }
    else{
        return <AntDesign name='staro' size={30} color = {'rgb(52,251,167)'}/>
    }
    
}
const FavouritesButton = (props) => {
    let status = props.context.state.favouritesFilter
    return(
        <Button
            iconRight light
            onPress={ () => props.context.showFavourites()}
            style={styles.favoutites}>
            
            {renderIcon(status)}
        </Button>
    )
}
export default FavouritesButton

const styles = StyleSheet.create({
    favoutites: {
        flex:1,
        width: '20%',
        borderRadius: 20,
        justifyContent: 'center',
        marginEnd: '2%',
        marginTop: '0%',
        backgroundColor: 'rgb(100,180,255)',
    },
})