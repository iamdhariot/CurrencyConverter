import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import Home from '../screens/Home';
import Options from '../screens/Options';
import CurrencyList from '../screens/CurrencyList';
import colors from '../constants/colors';
import {ConversionContextProvider} from '../util/ConversionContext';

const MainStack = createStackNavigator();
const MainStackScreen = () => {
  return (
    // headerMode="none" deprecated
    <MainStack.Navigator
    //   screenOptions={{
    //     headerShown: false, // to hide the screen header from whole app
    //   }}
    // initialRouteName="Home"
    >
      <MainStack.Screen
        options={{headerShown: false}} // to hide the header from one screen
        name="Home"
        component={Home}
      />
      <MainStack.Screen name="Options" component={Options} />
    </MainStack.Navigator>
  );
};

const ModelStack = createStackNavigator();
const ModelStackScreen = () => (
  <ModelStack.Navigator screenOptions={{presentation: 'modal'}}>
    <ModelStack.Screen
      options={{headerShown: false}}
      name="Main"
      component={MainStackScreen}
    />
    <ModelStack.Screen
      name="CurrencyList"
      component={CurrencyList}
      options={({route, navigation}) => ({
        title: route.params && route.params.title,
        headerLeft: null,
        headerRight: () => (
          <TouchableOpacity
            style={{paddingHorizontal: 10}}
            onPress={() => navigation.pop()}>
            <Entypo name="cross" size={30} color={colors.blue} />
          </TouchableOpacity>
        ),
      })}
    />
  </ModelStack.Navigator>
);

export default () => (
  <NavigationContainer>
    <ConversionContextProvider>
      <ModelStackScreen />
    </ConversionContextProvider>
  </NavigationContainer>
);
