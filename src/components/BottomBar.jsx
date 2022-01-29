import React from 'react';
import AddDraught from './AddDraught';
import Charts from './Charts';
import FrontPage from './FrontPage';
import Settings from './Settings';
import useDraughts from '../hooks/useDraughts';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

function BottomBar({ signOut }) {
  const { draughts } = useDraughts();

  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen 
        name="Home"
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      >{(props) => <FrontPage draughts={draughts} {...props} />}
      </Tab.Screen>
      <Tab.Screen
        name="Add Draught"
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="beer" color={color} size={26} />
          ),
        }}
      >{(props) => <AddDraught {...props} />}
      </Tab.Screen>
      <Tab.Screen
        name="Stats"
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="chart-bar" color={color} size={26} />
          ),
        }}
      >{(props) => <Charts draughts={draughts} {...props} />}
      </Tab.Screen>
      <Tab.Screen
        name="Settings"
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-settings" color={color} size={26} />
          ),
        }}
      >{(props) => <Settings signOut={signOut} {...props} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

export default BottomBar;