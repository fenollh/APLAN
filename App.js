import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Header from './src/components/header';
import HomeScreen from './src/screens/home'
import NotesScreen from './src/screens/notes'
import CalendarScreen from './src/screens/calendar'
import Icon from 'react-native-vector-icons/AntDesign';



const Tab = createMaterialTopTabNavigator();

export default function App() {


  return (
    
    <View style={{flex:10, flexDirection: 'column'}}>
        <Header/>
        <NavigationContainer theme={MyTheme}>
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

                    return <Icon name={iconName} size={30} color='blue' />;
                  },
                })}   
                       
              tabBarOptions={{
                activeTintColor: 'rgb(52,251,167)',
                inactiveTintColor: 'rgb(0,0,0)',
                showIcon: true,
                showLabel: false,
              }}>
            <Tab.Screen name="Calendar" component={CalendarScreen} />
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Notes" component={NotesScreen} />
          </Tab.Navigator>
        </NavigationContainer>
    </View>
  );
}
const MyTheme = {
  colors: {
    primary: 'rgb(52,251,167)', //52,251,167
    card: 'rgb(187,188,189)',
  },
};