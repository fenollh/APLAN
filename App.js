import * as React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';


import Header from './src/components/header';
import HomeScreen from './src/screens/tabScreens/home/home'
import NotesScreen from './src/screens/tabScreens/notes/notes'
import CalendarScreen from './src/screens/tabScreens/calendar/calendar'

import AddNoteScreen from './src/screens/stackScreens/addNote/addNoteScreen'
import AddReminderScreen from './src/screens/stackScreens/addReminder/addReminderScreen'
import LoginScreen from './src/screens/stackScreens/login/loginScreen'
import SignupScreen from './src/screens/stackScreens/signup/signupScreen'
import NoteView from './src/screens/stackScreens/noteView/noteView'

import Icon from 'react-native-vector-icons/AntDesign';
import ReminderView from './src/screens/stackScreens/reminderView/reminderView';


const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();


export default class App extends React.Component {


  TabNavigator({navigation}) {
  
    const Navigation = useNavigation();

    const Calendar = calendar => <CalendarScreen navigation={Navigation}/>
    const Home = home => <HomeScreen/>
    const Notes = notes => <NotesScreen navigation={Navigation}/>

    return(
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={({ route }) => ({
        tabBarIcon: ({}) => {
          let iconName;
          if (route.name === 'Calendar')  { iconName = 'calendar' }
          else if (route.name === 'Home') { iconName = 'home' } 
          else if (route.name === 'Notes') { iconName = 'file1' }
          return <Icon name={iconName} size={25} color='rgb(52,251,167)' />;
        },
      })}      
      tabBarOptions={{
        showIcon: true,
        showLabel: false,
      }}>

      <Tab.Screen name="Calendar" component={Calendar}/>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Notes" component={Notes} />

    </Tab.Navigator>
    )
  }

  render(){
    return ( 
      <View style={{flex:10, flexDirection: 'column', backgroundColor: 'rgb(100,180,255)'}}>
          <Header/>

          <NavigationContainer theme={MyTheme}>
            <Stack.Navigator headerMode= 'none'>
              <Stack.Screen name = 'login' component={LoginScreen}/>
              <Stack.Screen name = 'signup' component={SignupScreen}/>
              <Stack.Screen name = 'main' component = {this.TabNavigator}/>
              <Stack.Screen name = 'addNote' component={AddNoteScreen}/>
              <Stack.Screen name = 'addReminder' component={AddReminderScreen}/>
              <Stack.Screen name = 'noteView' component={NoteView}/>
              <Stack.Screen name = 'reminderView' component={ReminderView}/>

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