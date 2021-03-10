import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
const Stack = createStackNavigator();
import Screens from '../screens';

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ListingScreen" component={Screens.ListingScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
