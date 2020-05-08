import {StyleSheet} from 'react-native'

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
export default styles