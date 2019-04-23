import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

import CoinProgressContainer from './container';
import CoinProgressTabDaily from './tab-daily';
import CoinProgressTabWeekly from './tab-weekly';
import CoinProgressBar from './progress-bar';
import { styles } from './styles';

const SECTIONS = ['daily', 'weekly'];

class CoinProgress extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeSection: props.activeSection
    }
  }

  renderTabButton(index) {
    return (
      <TouchableOpacity 
        style={[styles.tabButton, this.state.activeSection === SECTIONS[index] && styles.tabButtonActive]}
        onPress={() => {
          this.setState({activeSection: SECTIONS[index]})
          this.props.changeSection && this.props.changeSection(SECTIONS[index]);
        }}
      >
        <Text style={styles.tabButtonText}>{SECTIONS[index].toUpperCase()}</Text>
      </TouchableOpacity>
    )
  }

  renderSection() {
    const { coinsLeftToday, coinsUsedToday, coinsEarnedToday } = this.props;
    return this.state.activeSection === SECTIONS[0] ? 
      <CoinProgressTabDaily 
        coinsLeftToday={coinsLeftToday}
        coinsUsedToday={coinsUsedToday}
        coinsEarnedToday={coinsEarnedToday}
      /> 
      : 
      <CoinProgressTabWeekly />
  }

  render() {
    const { dailyProgress, weeklyProgress } = this.props;

    return (
      <CoinProgressContainer>
        <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 5}}>
          {this.renderTabButton(0)}
          {this.renderTabButton(1)}
        </View>
        <View style={{flex: 1}}>
          {this.renderSection()}
        </View>
        <View style={styles.progressContainer}>
          <CoinProgressBar progress={this.state.activeSection === SECTIONS[0] ? dailyProgress : weeklyProgress}/>
        </View>
      </CoinProgressContainer>
    )
  }
}

CoinProgress.propTypes = {
  activeSection: PropTypes.string,
  changeSection: PropTypes.func,
  coinsLeftToday: PropTypes.number,
  coinsUsedToday: PropTypes.number,
  coinsEarnedToday: PropTypes.number,
  dailyProgress: PropTypes.number,
  weeklyProgress: PropTypes.number
}

export default CoinProgress;