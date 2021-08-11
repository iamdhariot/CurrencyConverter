import React, {useState, useContext} from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';
import {SafeAreaView} from 'react-native-safe-area-context';
import {format} from 'date-fns';
import {ConversionInput} from '../components/ConversionInput';
import {Button} from '../components/Button';
import {KeyboardSpacer} from '../components/KeyboardSpacer';
import colors from '../constants/colors';
import {ConversionContext} from '../util/ConversionContext';

const screen = Dimensions.get('window');
export default ({navigation}) => {
  // const [baseCurrency, setBaseCurrency] = useState('USD');
  // const [quoteCurrency, setQuoteCurrency] = useState('GBP');
  const [value, setValue] = useState('100');
  const conversionRate = 0.72;
  const date = new Date();

  const {
    baseCurrency,
    quoteCurrency,
    swapCurrencies,
    // setBaseCurrency,
    // setQuoteCurrency,
  } = useContext(ConversionContext);

  // const swapCurrencies = () => {
  //   setBaseCurrency(quoteCurrency);
  //   setQuoteCurrency(baseCurrency);
  // };

  const [scrollEnabled, setScrollEnabled] = useState(false);
  return (
    <View style={styles.container}>
      <ScrollView scrollEnabled={scrollEnabled}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.blue}
          translucent={false}
        />
        <SafeAreaView style={styles.header}>
          <TouchableOpacity onPress={() => navigation.push('Options')}>
            <Entypo name="cog" size={32} color={colors.white} />
          </TouchableOpacity>
        </SafeAreaView>
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
            value={value}
            onButtonPress={() =>
              navigation.push('CurrencyList', {
                title: 'Base Currency',
                //  activeCurrency: baseCurrency,
                // onChange: currency => setBaseCurrency(currency),
                isBaseCurrency: true,
              })
            }
            onChangeText={text => setValue(text)}
            keyboardType="numeric"
          />
          <ConversionInput
            text={quoteCurrency}
            value={
              value && `${(parseFloat(value) * conversionRate).toFixed(2)}`
            }
            editable={false}
            onButtonPress={() =>
              navigation.push('CurrencyList', {
                title: 'Quote Currency',
                // activeCurrency: quoteCurrency,
                // onChange: currency => setQuoteCurrency(currency),
                isBaseCurrency: false,
              })
            }
          />
          <Text style={styles.text}>
            {`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${format(
              date,
              'MMMM do, yyyy',
            )}.`}
          </Text>
          <Button text="Reverse Currencies" onPress={() => swapCurrencies()} />
          <KeyboardSpacer
            onToggle={keyboardIsVisible => setScrollEnabled(keyboardIsVisible)}
          />
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
    paddingTop: screen.height * 0.1,
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
  header: {
    alignItems: 'flex-end',
    marginHorizontal: 20,
  },
});
