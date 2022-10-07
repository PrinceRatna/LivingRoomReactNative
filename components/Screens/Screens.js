/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
//import liraries
import * as React from 'react';
import 'react-native-gesture-handler';
import LivingRoom from '../LivingRoom/LivingRoom';
import Statistic from '../Statistic/Statistic';
import AntIcon from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Ionicons';
import Profile from '../Profile/Profile'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Home/Home';

const Tab = createBottomTabNavigator();


// create a component
const Screen = () => {


  
    return (
      
    <Tab.Navigator
      initialRouteName="Home"
       >
      <Tab.Screen name="Home" component={Home}
       options={{
        headerShown: false,
        tabBarActiveTintColor:'black',
        tabBarLabel: '',
        tabBarIcon: ({ color }) => (
          <Icon  name="home" color={color} size={26} />
        ),
      }}
      />
      <Tab.Screen name="LivingRoom" component={LivingRoom}
       options={{
        headerShown: false,
        tabBarActiveTintColor:'black',
        tabBarLabel: '',
        tabBarIcon: ({ color }) => (
          <AntIcon  name="appstore1" color={color} size={26} />
        ),
      }}
      />
      <Tab.Screen name="Statistic" component={Statistic} 
       options={{
        headerShown: false,
        tabBarActiveTintColor:'black',

        tabBarLabel: '',
        tabBarIcon: ({ color }) => (
          <Icon  name="flash-outline" color={color} size={26} />
        ),
      }}
      />
      <Tab.Screen name="Profile" component={Profile} 
       options={{
        headerShown: false,
        tabBarActiveTintColor:'black',

        tabBarLabel: '',
        tabBarIcon: ({ color }) => (
          <AntIcon  name="user" color={color} size={26} />
        ),
      }}
      />
    </Tab.Navigator>
        
    );
};


export default Screen;


