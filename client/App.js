import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignUp from './screens/SignUp';
import SignIn from './screens/SignIn';

// npx eslint . --fix

const Stack = createNativeStackNavigator();

/**
 * @return {homepage}
 */
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SignIn'>
        <Stack.Screen name='SignUp' component={SignUp}/>
        <Stack.Screen name='SignIn' component={SignIn}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
