import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import loginScreen from './loginScreen';
import signupScreen from './signupScreen';

const Stack = createNativeStackNavigator();

export default AuthenticationScreen = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="login-screen" component={loginScreen} />
      <Stack.Screen name="signup-screen" component={signupScreen} />
    </Stack.Navigator>
  );
};
