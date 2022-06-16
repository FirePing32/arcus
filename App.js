import 'react-native-gesture-handler';
import React from 'react';
import CaptureScreen from './pages/capture';
import HomeScreen from './pages/home'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Capture" component={CaptureScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
