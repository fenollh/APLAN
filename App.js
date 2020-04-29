import * as React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';


import Header from './src/components/header';
import HomeScreen from './src/screens/home'
import NotesScreen from './src/screens/notes'
import CalendarScreen from './src/screens/calendar'
import AddNoteScreen from './src/screens/addNoteScreen'


import Icon from 'react-native-vector-icons/AntDesign';

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

export default class App extends React.Component {


  TabNavigator({navigation}) {
    return(
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({}) => {
          let iconName;

          if (route.name === 'Calendar') {
            iconName = 'calendar';
          } else if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Notes') {
            iconName = 'file1';
          }

          return <Icon name={iconName} size={25} color='rgb(52,251,167)' />;
        },
      })}   
            
      tabBarOptions={{
        showIcon: true,
        showLabel: false,
      }}>
      <Tab.Screen name="Calendar" component={CalendarScreen}/>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Notes" component={NotesScreen}/>
    </Tab.Navigator>
    )
  }

  render(){
    return ( 
      <View style={{flex:10, flexDirection: 'column', backgroundColor: 'rgb(100,180,255)'}}>
          <Header/>

          <NavigationContainer theme={MyTheme}>
            <Stack.Navigator headerMode= 'none'>
              <Stack.Screen name = 'main' component = {this.TabNavigator}></Stack.Screen>
              <Stack.Screen name = 'addNoteScreen' component={AddNoteScreen}></Stack.Screen>

            </Stack.Navigator>
          </NavigationContainer>
      </View>
    );
  }
  
}


const MyTheme = {
  colors: {
    primary: 'rgb(52,251,167)', 
    card: 'rgb(80,130,255)',
  },
};