import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './components/HomeScreen';
import Vista from './components/Vista';

const Stack = createNativeStackNavigator();

export default function App() {

  return ( 
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Screen name="HomeScreen" component={HomeScreen}/>
          <Stack.Screen name="VistaProducto" component={Vista}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

