import React, {useState} from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

import colors from '../constants/colors';
export default function Home() {
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
