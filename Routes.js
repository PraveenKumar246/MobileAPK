import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { Provider as PaperProvider } from 'react-native-paper';

import ProfileScreen from './Screens/ProfileScreen';
import MessagesScreen from './Screens/MessagesScreen';
import MomentsScreen from './Screens/MomentsScreen';
import SettingsScreen from './Screens/SettingsScreen';
import DrawerNavigator from './Components/DrawerNavigator';

import Ionicons from 'react-native-vector-icons/Ionicons';
import TabNavigator from './navigation/TabNavigator';


const Drawer = createDrawerNavigator()

export default function Routes() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Drawer.Navigator drawerContent={props => <DrawerNavigator {...props}/>} screenOptions={{
                                                                                headerShown:false,
                                                                                drawerActiveBackgroundColor:'#87BCCE',
                                                                                drawerActiveTintColor:'#fff',
                                                                                drawerInactiveTintColor:'#333',
                                                                                drawerLabelStyle:{fontFamily:'Roboto-Medium',fontSize:15}}} >
          <Drawer.Screen name="Recents" component={TabNavigator} 
            options={{drawerIcon:({color})=>(
                <Ionicons name="home-outline" size={22} color={color}/>
            )
          }}/>
          <Drawer.Screen name="Profile" component={ProfileScreen} 
            options={{drawerIcon:({color})=>(
                <Ionicons name="person-outline" size={22} color={color}/>
            )
         }}/>
          <Drawer.Screen name="Messages" component={MessagesScreen} 
             options={{drawerIcon:({color})=>(
                <Ionicons name="chatbox-ellipses-outline" size={22} color={color}/>
            )
          }} />
          <Drawer.Screen name="Moments" component={MomentsScreen} 
             options={{drawerIcon:({color})=>(
               <Ionicons name="timer-outline" size={22} color={color}/>
            )
          }} />
          <Drawer.Screen name="Settings" component={SettingsScreen} 
             options={{drawerIcon:({color})=>(
               <Ionicons name="settings-outline" size={22} color={color}/>
            )
          }}/>

         

        </Drawer.Navigator>
       
        </NavigationContainer>
    </PaperProvider>
     
  );
}

