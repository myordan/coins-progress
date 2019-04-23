import React, { Component } from 'react';
import { View } from 'react-native';

import CoinProgress from '../components/coin-progress';

class Main extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <CoinProgress />
      </View>
    )
  }
}

export default Main;