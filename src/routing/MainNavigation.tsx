import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {LoginPage} from '../pages/LoginPage';
import { ProfilePage } from '../pages/profilepage/Profilepage';

const Stack = createNativeStackNavigator();

export const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="Profile"
          component={ProfilePage}
          options={{header: () => null}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
