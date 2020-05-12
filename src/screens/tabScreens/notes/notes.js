import React from 'react';

import { View, Text, FlatList } from 'react-native';

import styles from './styles'
import FavouritesButton from '../../../components/favouritesButton'
import FabButton from '../../../components/fabButton'
import { getData } from '../../../dataBaseFunctions/saveData'


export default class NotesScreen extends React.Component{

    constructor(props){
        super(props)

        console.ignoredYellowBox = ['Setting a timer'];
        this.state={
            favouritesFilter: false,
            data: []
        }
    }

    showFavourites = () => {
        this.setState({ favouritesFilter: !this.state.favouritesFilter })
    }

    componentDidMount = () => {
        getData(this, 'notes')
    }


    render(){

        return(
            <View style={styles.container}>      
                <View style={styles.subHeader}>
                    <View style= {{flex:7}}>   
                        <Text style={styles.title}> NOTES SCREEN </Text>         
                    </View>
                    <FavouritesButton context={this} />
                </View>

                <View style={styles.body}>
                    <View style = {styles.list}>
                        <FlatList
                        data={this.state.data}
                        renderItem={({ item }) => (
                            <Text key={item.title}>{item.title}</Text>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                    <FabButton type = 'notes' navigation = {this.props.navigation}/>
                </View>
            </View>
        )
    }
} 