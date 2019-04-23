import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CoinProgress from '../components/coin-progress';

class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CoinProgress />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Main;