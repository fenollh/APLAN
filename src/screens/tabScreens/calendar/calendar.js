import React from 'react';

import { View, Text } from 'react-native';

import styles from './styles'
import FavouritesButton from '../../../components/favouritesButton'
import FabButton from '../../../components/fabButton'
import { getData } from '../../../dataBaseFunctions/saveData'
import ReminderList from './remindersList'


export default class CalendarScreen extends React.Component{

    constructor(props){
        super(props)
        console.ignoredYellowBox = ['Setting a timer'];
        this.state={
            favouritesFilter: false,
            data: [],
        }
    }

    componentDidMount = () => {

        getData(this, 'reminders')
    }

    showFavourites = () => {
        this.setState({ favouritesFilter: !this.state.favouritesFilter })
    }

    render(){ 

        return(
            <View style={styles.main}>      
                <View style={{flex: 1, flexDirection: 'row', marginTop: '1%'}}>
                    <View style= {{flex:7}}>   
                        <Text style={styles.title}> ESTO ES CALENDAR </Text>         
                    </View>
                    <FavouritesButton context={this} />
                </View>
                <View style={{flex: 14}}>
                    <ReminderList context={this}/>
                    <FabButton type = 'calendar' navigation = {this.props.navigation}/>
                </View>
            </View>
        )
    }
} 
