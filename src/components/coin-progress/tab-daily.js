import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Swiper from 'react-native-swiper';

class CoinProgressTabDaily extends Component {
  renderSlide(index) {
    const descriptions = ["Left for Today", "Used Today", "Earned Today"];

    return (
      <View style={styles.slide}>
        <Image
          resizeMode="contain"
          style={{width: 100, height: 100}}
          source={require('../../assets/img/coins.png')}
        />
        <Text style={styles.text}>{descriptions[index].toUpperCase()}</Text>
      </View>
    )
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <Swiper style={styles.wrapper}
          dotColor='rgba(255, 255, 255, 0.3)'
          activeDotColor='white'
          paginationStyle={{
            bottom: 0
          }}
        >
          {this.renderSlide(0)}
          {this.renderSlide(1)}
          {this.renderSlide(2)}
        </Swiper>
        <View style={{height: 65}}>

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 16
  }
})

export default CoinProgressTabDaily