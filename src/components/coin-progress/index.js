import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

import CoinProgressContainer from './container';
import CoinProgressTabDaily from './tab-daily';
import CoinProgressTabWeekly from './tab-weekly';

class CoinProgress extends Component {
  state = {
    tabIndex: 0
  }

  renderTabButton(index) {
    const titles = ['Daily', 'Weekly']

    return (
      <TouchableOpacity 
        style={[styles.tabButton, this.state.tabIndex == index && styles.tabButtonActive]}
        onPress={() => {this.setState({tabIndex: index})}}
      >
        <Text style={styles.tabButtonText}>{titles[index].toUpperCase()}</Text>
      </TouchableOpacity>
    )
  }

  renderTabScene() {
    return this.state.tabIndex == 0 ? <CoinProgressTabDaily /> : <CoinProgressTabWeekly />
  }

  render() {
    return (
      <CoinProgressContainer>
        <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 5}}>
          {this.renderTabButton(0)}
          {this.renderTabButton(1)}
        </View>
        <View style={{flex: 1}}>
          {this.renderTabScene()}
        </View>
      </CoinProgressContainer>
    )
  }
}

const styles = StyleSheet.create({
  tabButton: {
    borderBottomWidth: 2,
    borderColor: 'rgba(255,255,255, 0.3)',
    paddingHorizontal: 20,
    paddingVertical: 14,
    marginHorizontal: 5,
  },
  tabButtonActive: {
    borderColor: 'white'
  },
  tabButtonText: {
    color: 'white',
    fontSize: 18,
  }
});

export default CoinProgress;