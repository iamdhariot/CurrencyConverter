import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
import colors from '../constants/colors';
export default function Details() {
  return <View style={styles.container}></View>;
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
