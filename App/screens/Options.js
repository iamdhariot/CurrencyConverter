import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import colors from '../constants/colors';

import Entypo from 'react-native-vector-icons/Entypo';
import {RowItem} from '../components/RowItem';

export default () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <TouchableOpacity style={styles.row}>
        <Text style={styles.text}>Themes</Text>
        <Entypo name="chevron-right" size={20} color={colors.blue} />
      </TouchableOpacity> */}
      <RowItem
        text="Themes"
        onPress={() => alert('todo!')}
        rightIcon={
          <Entypo name="chevron-right" size={20} color={colors.blue} />
        }
      />
      <View style={styles.seprator} />
      <TouchableOpacity style={styles.row}>
        <Text style={styles.text}>React native basic</Text>
        <Entypo name="export" size={20} color={colors.blue} />
      </TouchableOpacity>
      <View style={styles.separator} />
      <TouchableOpacity style={styles.row}>
        <Text style={styles.text}>React native by example</Text>
        <Entypo name="export" size={20} color={colors.blue} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
  row: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
    color: colors.text,
  },
  separator: {
    backgroundColor: colors.border,
    height: StyleSheet.hairlineWidth,
    marginLeft: 20,
  },
});
