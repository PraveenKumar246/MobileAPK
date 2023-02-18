import React from "react";
import {Icon} from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Home from '../Home';
import MyNetwork from "../Screens/MyNetwork";
import Notification from "../Screens/Notification";
import SearchScreen from "../Screens/SearchScreen";
import SettingsScreen from '../Screens/SettingsScreen';
import CommentsScreen from "../Screens/CommentsScreen";
import Graph from "../Components/Graph";


import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Weathe from "../Components/weathe";



const Tab = createBottomTabNavigator();
const Stack =createStackNavigator();

const TabNavigator =()=>{
  return(
    <Stack.Navigator screenOptions={{headerShown:false}}>
    
       <Stack.Screen name="Home2" component={HomeStack} />
       <Stack.Screen name="Comments" component ={CommentsScreen} screenOptions={{TabNavigatorShown:false}}/>
       <Stack.Screen name="Search" component={SearchScreen} screenOptions={{TabNavigatorShown:false}}/>
       <Stack.Screen name="Graph" component={Graph} screenOptions={{TabNavigatorShown:false}}/>
       <Stack.Screen name="Weather" component={Weathe} screenOptions={{TabNavigatorShown:false}}/>
    
    </Stack.Navigator>
  );
};

const HomeStack = ()=>{
    return(
  <Tab.Navigator screenOptions={{headerShown:false ,tabBarStyle:{backgroundColor:'#87BCCE'},tabBarActiveTintColor:'green',tabBarInactiveTintColor:'#fff'}}>
      <Tab.Screen name="Home" component={Home} options={{
          tabBarIcon:({color,size})=>(
            <Ionicons name="home-outline" color={color} size={size}/>
          )}}/>
      <Tab.Screen name="MyNetwork" component={MyNetwork} options={{
          tabBarBadge:3,
          tabBarBadgeStyle:{backgroundColor:'green'},
          tabBarIcon:({color,size})=>(
            <Ionicons name="md-person-outline" color={color} size={size}/>
          )}}/>
      <Tab.Screen name="Maps" component={Notification} options={{
          tabBarIcon:({color,size})=>(
            <Ionicons name="md-rocket-outline" color={color} size={size}/>
          )}}/>
      <Tab.Screen name="settings" component={SettingsScreen} options={{

          tabBarIcon:({color,size})=>(
            <Ionicons name="md-settings-outline" color={color} size={size}/>
          )}}/>

  </Tab.Navigator>
    );
}
export default TabNavigator;