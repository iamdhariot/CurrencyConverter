import React from 'react';
import {StatusBar, FlatList, View, StyleSheet} from 'react-native';
import {useSafeArea} from 'react-native-safe-area-context';

import colors from '../constants/colors';
import currencies from '../data/currencies.json';
import {RowItem, RowSeparator} from '../components/RowItem';
export default ({navigation}) => {
  const insets = useSafeArea();
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <FlatList
        data={currencies}
        renderItem={({item}) => {
          return <RowItem onPress={() => navigation.pop()} text={item} />;
        }}
        keyExtractor={item => item}
        ItemSeparatorComponent={() => <RowSeparator />}
        ListFooterComponent={() => (
          <View style={{paddingBottom: insets.bottom}} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
});
