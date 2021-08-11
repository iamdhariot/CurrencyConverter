import React, {useContext, useState} from 'react';
import {StatusBar, FlatList, View, StyleSheet} from 'react-native';
import {useSafeArea} from 'react-native-safe-area-context';
import Entypo from 'react-native-vector-icons/Entypo';

import {ConversionContext} from '../util/ConversionContext';
import colors from '../constants/colors';
import currencies from '../data/currencies.json';
import {RowItem, RowSeparator} from '../components/RowItem';
export default ({navigation, route = {}}) => {
  const insets = useSafeArea();
  const params = route.params || {};
  const {activeCurrency, onChange = () => {}} = params;
  const {isBaseCurrency} = params;

  const {baseCurrency, quoteCurrency, setBaseCurrency, setQuoteCurrency} =
    useContext(ConversionContext);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <FlatList
        data={currencies}
        renderItem={({item}) => {
          //const selected = activeCurrency === item;
          let selected = false;
          if (isBaseCurrency && item === baseCurrency) {
            selected = true;
          } else if (!isBaseCurrency && item === quoteCurrency) {
            selected = true;
          }

          return (
            <RowItem
              onPress={() => {
                // if (params.onChange) {
                //   params.onChange(item);
                // }
                if (params.isBaseCurrency) {
                  setBaseCurrency(item);
                } else {
                  setQuoteCurrency(item);
                }
                navigation.pop();
              }}
              text={item}
              rightIcon={
                selected && (
                  <View style={styles.icon}>
                    <Entypo name="check" size={20} color={colors.white} />
                  </View>
                )
              }
            />
          );
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
  icon: {
    width: 25,
    height: 25,
    backgroundColor: colors.blue,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
