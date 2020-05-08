import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'rgb(230,240,255)',
        height: '100%', 
        width: '100%',
        flexDirection: 'column'
    },

    noteBtn:{
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        justifyContent: 'center',
        borderBottomLeftRadius: 20,
        height: '100%',
        backgroundColor: 'rgb(100,180,255)',
    },

    taskBtn: {
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        justifyContent: 'center',
        borderBottomRightRadius: 20,
        height: '100%',
        backgroundColor:'rgb(100,180,255)',

    },

    noteTxt:{
        fontSize: 10,
        fontWeight: 'bold',
    },

    taskTxt:{
        fontSize: 10,
        fontWeight: 'bold',

    },

    // INPUT ZONE
    inputTit: {
        width: '95%',
        marginStart: '3%',
        borderColor: 'rgb(100,100,100)',
        backgroundColor: 'rgb(180,230,255)',
        borderWidth: 1,
        borderRadius: 10,
        padding: '2%',
    },
    inputBod: {
        marginTop: '1%',
        marginStart: '3%',
        height:'92%',
        width: '95%',
        borderColor: 'rgb(100,100,100)',
        backgroundColor: 'rgb(220, 235,255)',
        padding: '2%',
        borderWidth: 1,
        borderRadius: 10,
        
    },

    headerTask:{
        flex:2,
        flexDirection:'row',
    },

    inputBodTask:{
        marginTop: '2%',
        marginStart: '2%',
        height:'40%',
        width: '96%',
        borderColor: 'rgb(100,100,100)',
        backgroundColor: 'rgb(220, 235,255)',
        padding: '2%',
        borderWidth: 1,
        borderRadius: 10,
    },

    datePick: {
        flex: 1,
        width: '95%',
        alignItems:'center',
        marginEnd: '1%',
        borderColor: 'rgb(100,100,100)',
        backgroundColor: 'rgb(180,230,255)',
        borderWidth: 1,
        borderRadius: 10,
    },

    // FOOTER
    footer:{
        flex:1,
        flexDirection: 'row',
        marginBottom: '1%',
        marginTop: '1%'
    },

    optionsBtn: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: '1%',
        borderRadius: 20,
        padding: '6%',
        backgroundColor: 'rgb(100,180,255)',
    },

    optionsTxt:{
        fontWeight: 'bold',
        fontSize: 15,
    },
    addBtn:{
        flex:1,
        marginHorizontal: '1%',
        borderRadius: 20,
        backgroundColor: 'rgb(100,180,255)',
        padding: 20,
    },
    addTxt:{
        marginLeft: '15%',
        fontWeight: 'bold',
        fontSize: 15,
    },

})
export default styles