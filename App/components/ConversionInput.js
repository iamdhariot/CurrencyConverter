import React from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  Text,
  StyleSheet,
} from 'react-native';
import colors from '../constants/colors';

export const ConversionInput = ({
  text,
  onButtonPress,
  //   value,
  //   onChangeText,
  //   keyboardType,
  ...props
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onButtonPress}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        // value={value}
        // onChangeText={onChangeText}
        // keyboardType={keyboardType}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    marginVertical: 10,
    marginHorizontal: 20,
    flexDirection: 'row',
    borderRadius: 5,
  },
  button: {
    padding: 15,
    borderRightColor: colors.border,
    borderRightWidth: 1,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.blue,
  },
  input: {
    padding: 10,
    flex: 1,
    color: colors.textLight,
  },
});
