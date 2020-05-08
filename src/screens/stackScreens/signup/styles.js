import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'column',
        padding: 20,
        backgroundColor: 'rgb(230,250,250)',
    },

    title: {
        flex: 1,
        marginBottom: '2%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    titleTxt: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    form: {
        flex:7,
        padding: 10,
        borderColor: 'rgb(100,180,255)',
        borderWidth: 2,
        borderRadius: 20,
        backgroundColor: 'rgb(220,240,255)'
    },

    signupBtn:{
        marginTop: '30%',
        justifyContent: 'center',
        borderRadius: 10,    
        backgroundColor: 'rgb(100,180,255)',
    },

    signupTxt:{
        marginTop: '9%',
        fontWeight: 'bold',
        fontSize: 18,
    },

    subtitles: {
        flexDirection: 'row',
        marginTop: '3%',
    },

    terms: {
        flex: 1,
        alignItems: 'flex-start',
        marginLeft: '8%',
    },

    aboutUs: {
        flex: 1,
        alignItems: 'flex-end',
        marginRight: '8%',
    },

    footer:{
        flex: 0.1,
        marginTop: '3%',
        alignItems: 'center',
    }
})

export default styles