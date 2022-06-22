import 'react-native-gesture-handler';
import React from 'react';
import {useColorScheme} from 'react-native';
import CaptureScreen from './pages/capture';
import HomeScreen from './pages/home'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import * as Colors from './components/colors'

const Tab = createBottomTabNavigator();

export default function App() {

  let colorScheme = useColorScheme()

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarActiveBackgroundColor: colorScheme == 'dark' ? Colors.DARK : Colors.LIGHT
        }} />
        <Tab.Screen name="Capture" component={CaptureScreen} options={{
          tabBarActiveBackgroundColor: colorScheme == 'dark' ? Colors.DARK : Colors.LIGHT
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
