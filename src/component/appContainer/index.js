import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthenticationScreen from '../../screen/authentication/index';
import DrawerScreen from '../../screen/drawer/index';

const Stack = createNativeStackNavigator();

export default AppContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="auth-screen" component={AuthenticationScreen} /> */}
        <Stack.Screen name="drawer-screen" component={DrawerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
