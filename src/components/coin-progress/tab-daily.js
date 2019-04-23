import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

class CoinProgressTabDaily extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Swiper style={styles.wrapper}
          dotColor='rgba(255, 255, 255, 0.3)'
          activeDotColor='white'
        >
          <View style={styles.slide1}>
            <Text style={styles.text}>Hello Swiper</Text>
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>Beautiful</Text>
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>And simple</Text>
          </View>
        </Swiper>
        <View style={{height: 50}}>

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})

export default CoinProgressTabDaily