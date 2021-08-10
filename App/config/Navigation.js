import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';
import Options from '../screens/Options';
import CurrencyList from '../screens/CurrencyList';

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
      <MainStack.Screen
        name="CurrencyList"
        component={CurrencyList}
        options={({route}) => ({
          title: route.params && route.params.title,
        })}
      />
    </MainStack.Navigator>
  );
};

export default () => (
  <NavigationContainer>
    <MainStackScreen />
  </NavigationContainer>
);
