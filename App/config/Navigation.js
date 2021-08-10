import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';
import Options from '../screens/Options';

const MainStack = createStackNavigator();
const MainStackScreen = () => {
  return (
    // headerMode="none" deprecated
    <MainStack.Navigator
      //   screenOptions={{
      //     headerShown: false, // to hide the screen header from whole app
      //   }}
      initialRouteName="Home">
      <MainStack.Screen
        options={{headerShown: false}} // to hide the header from one screen
        name="Home"
        component={Home}
      />
      <MainStack.Screen name="Options" component={Options} />
    </MainStack.Navigator>
  );
};

export default () => (
  <NavigationContainer>
    <MainStackScreen />
  </NavigationContainer>
);
