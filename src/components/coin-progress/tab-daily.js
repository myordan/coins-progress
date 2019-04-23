import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';
import Swiper from 'react-native-swiper';

import { styles } from './styles';

const DESCRIPTIONS = ["Left for Today", "Used Today", "Earned Today"];

class CoinProgressTabDaily extends Component {
  renderSlide(index) {
    return (
      <View style={styles.slide}>
        <Image
          resizeMode="contain"
          style={{width: 100, height: 100}}
          source={require('../../assets/img/coins.png')}
        />
        <Text style={styles.text}>{DESCRIPTIONS[index].toUpperCase()}</Text>
      </View>
    )
  }

  render() {
    return (
      <Swiper
        dotColor='rgba(255, 255, 255, 0.3)'
        activeDotColor='white'
        paginationStyle={{ bottom: 0 }}
      >
        {this.renderSlide(0)}
        {this.renderSlide(1)}
        {this.renderSlide(2)}
      </Swiper>
    )
  }
}

CoinProgressTabDaily.propTypes = {
  coinsLeftToday: PropTypes.number.isRequired,
  coinsUsedToday: PropTypes.number.isRequired,
  coinsEarnedToday: PropTypes.number.isRequired,
}

CoinProgressTabDaily.defaultProps = {
  coinsLeftToday: 0,
  coinsUsedToday: 0,
  coinsEarnedToday: 0
}

export default CoinProgressTabDaily