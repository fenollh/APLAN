import {StyleSheet} from 'react-native'

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
export default styles