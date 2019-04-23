import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

class CoinProgressTabWeekly extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.slide}>
          <Image
            resizeMode="contain"
            style={{width: 100, height: 100}}
            source={require('../../assets/img/coins.png')}
          />
        </View>
        <View style={{height: 65}}>

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default CoinProgressTabWeekly