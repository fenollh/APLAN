import React from 'react';
import{View, 
    Text,
    StyleSheet,
    Button
} from 'react-native';


export default class CalendarScreen extends React.Component{

    render(){
       
        return(
            <View style={styles.main}>
                <Text>CALENDAR</Text>
                
            </View> 
        )
    }
} 

const styles = StyleSheet.create({
    main: {
        flex: 14,
        backgroundColor: 'rgb(230,230,230)',
    },
})
