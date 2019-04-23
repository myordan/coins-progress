import React, { Component } from 'react';
import { View, Image } from 'react-native';

import { styles } from './styles';

class CoinProgressTabWeekly extends Component {
  render() {
    return (
      <View style={styles.slide}>
        <Image
          resizeMode="contain"
          style={{width: 100, height: 100}}
          source={require('../../assets/img/coins.png')}
        />
      </View>
    )
  }
}

export default CoinProgressTabWeekly