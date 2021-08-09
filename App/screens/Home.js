import React from 'react';
import {View, StyleSheet, StatusBar, Image, Dimensions} from 'react-native';
import {ConversionInput} from '../components/ConversionInput';
import colors from '../constants/colors';

const screen = Dimensions.get('window');
export default () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.blue}
        translucent={false}
      />
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/background.png')}
          style={styles.logoBackground}
          resizeMode="contain"
        />
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <ConversionInput
        text="USD"
        value="123"
        onButtonPress={() => alert('todo!')}
        onChangeText={text => console.log('Text', text)}
        keyboardType="numeric"
      />
      <ConversionInput
        text="GBP"
        value="123"
        onButtonPress={() => alert('todo!')}
        onChangeText={text => console.log('Text', text)}
        keyboardType="numeric"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
    justifyContent: 'center',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    position: 'absolute',
    width: screen.width * 0.25,
    height: screen.width * 0.25,
  },
  logoBackground: {
    width: screen.width * 0.45,
    height: screen.width * 0.45,
  },
});
