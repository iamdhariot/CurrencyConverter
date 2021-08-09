import React from 'react';
import {TouchableOpacity, Image, Text, StyleSheet} from 'react-native';
import colors from '../constants/colors';
export const Button = ({onPress, text}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Image
        source={require('../assets/images/reverse.png')}
        resizeMode="contain"
        style={styles.buttonIcon}
      />
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
  },
});
