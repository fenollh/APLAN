import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'column',
        padding:'1%',
        backgroundColor: 'rgb(230,240,255)',
    },

    header: {
        flex: 1,
        paddingTop: '1%',
    },

    title: {
        flex:1,
        fontSize: 23,
        fontWeight: 'bold',
    },

    body: {
        flex: 16,
        marginBottom: '1%'
    },

    titleInput:{
        flex: 2,
        margin: '1%',
        justifyContent: 'center',
        paddingLeft: '5%',
        borderRadius: 20,
        borderWidth: 1.5,
        borderColor: 'rgb(100,180,255)',
        backgroundColor:'rgb(230,255,255)' 
    },
    
    bodyInput: {
        flex: 2,
        margin: '1%',
        padding: '3%',
        paddingLeft: '5%',        
        borderRadius: 20,
        borderWidth: 1.5,
        borderColor: 'rgb(100,180,255)',
        backgroundColor:'rgb(230,255,255)' 
    },

    datePick: {
        flex: 2,
        flexDirection: "row",
        margin: '1%', 
        padding: '3%',
        borderRadius: 20,
        borderWidth: 1.5,
        borderColor: 'rgb(100,180,255)',
        backgroundColor:'rgb(230,255,255)' 
    },

    dateText: {
        marginTop: '3%', 
        marginLeft: '30%',
        fontSize: 17,
        fontWeight: 'bold',
    },

    parameters:{
        flex: 5, 
        flexDirection: 'column'
    },

    importanceTitle:{
        marginLeft: '3%',
        fontSize: 15,
        textDecorationLine: 'underline'
    },

    importancePicker: {
        flex: 1, 
        flexDirection: 'row', 
        marginTop: '5%'
    },

    checkBox: {
        flex:1, 
        margin: '3%',
    },

    checkBoxMessage:{
        flex:3, 
        margin: '1%',
    },

    moreCheckBox: {
        flex:1, 
        margin: '3%',

    },

    moreCheckBoxMessage:{
        flex:3, 
        margin: '1%',
        marginTop:'3%'
    },

    footer:{
        flex:1.5,
        flexDirection: 'row',
        marginBottom: '1%',
        marginTop: '1%',
    },

})
export default styles