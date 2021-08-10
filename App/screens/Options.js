import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Linking,
  Alert,
  StatusBar,
} from 'react-native';
import colors from '../constants/colors';

import Entypo from 'react-native-vector-icons/Entypo';
import {RowItem, RowSeparator} from '../components/RowItem';

const openLink = url => {
  // error if url is invalid.
  return Linking.openURL(url).catch(() => {
    Alert.alert('Sorry, something went wrong.', 'Please try again later.');
  });
};

export default () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <ScrollView>
        <RowItem
          text="Themes"
          onPress={() => openLink('+91958712121')}
          rightIcon={
            <Entypo name="chevron-right" size={20} color={colors.blue} />
          }
        />
        <RowSeparator />
        <RowItem
          text="React native basics"
          onPress={() =>
            openLink(
              'https://learn.reactnativeschool.com/p/react-native-basics-build-a-currency-converter',
            )
          }
          rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
        />
        <RowSeparator />
        <RowItem
          text="React native by example"
          onPress={() => openLink('https://reactnativebyexample.com')}
          rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
