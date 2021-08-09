import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
  Text,
  ScrollView,
  Keyboard,
} from 'react-native';
import {format} from 'date-fns';
import {ConversionInput} from '../components/ConversionInput';
import {Button} from '../components/Button';
import colors from '../constants/colors';

const screen = Dimensions.get('window');
export default () => {
  const baseCurrency = 'USD';
  const quoteCurrency = 'GBP';
  const conversionRate = 0.72;
  const date = new Date();

  const [scrollEnabled, setScrollEnabled] = useState(false);
  useEffect(() => {
    const showListener = Keyboard.addListener('keyboardDidShow', () => {
      setScrollEnabled(true);
    });
    const hideListener = Keyboard.addListener('keyboardDidHide', () => {
      setScrollEnabled(false);
    });
    return () => {
      showListener.remove();
      hideListener.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView scrollEnabled={scrollEnabled}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.blue}
          translucent={false}
        />
        <View style={styles.content}>
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
          <Text style={styles.textHeader}>Currency Converter</Text>
          <ConversionInput
            text={baseCurrency}
            value="123"
            onButtonPress={() => alert('todo!')}
            onChangeText={text => console.log('Text', text)}
            keyboardType="numeric"
          />
          <ConversionInput
            text={quoteCurrency}
            value="123"
            editable={false}
            onButtonPress={() => alert('todo!')}
          />
          <Text style={styles.text}>
            {`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${format(
              date,
              'MMMM do, yyyy',
            )}.`}
          </Text>

          <Button text="Reverse Currencies" onPress={() => alert('todo!')} />
          <View style={{height: screen.height * 0.5}} />
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
    // justifyContent: 'center',
  },
  content: {
    paddingTop: screen.height * 0.2,
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
  textHeader: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 20,
  },
  text: {
    color: colors.white,
    fontSize: 14,
    textAlign: 'center',
  },
});
