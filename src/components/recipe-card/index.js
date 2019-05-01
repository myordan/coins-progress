import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text } from 'react-native';
import { styles } from './styles';

import AwesomeButton from '../awesome-button';

const BACKGROUND_DARKER = "#eaeaea";
const BACKGROUND_SHADOW = "#efefef";

class RecipeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pressed: false
    };
  }

  render() {
    const { title, time, color, image, coinCount, onPress } = this.props;
    return (
      <View style={styles.container}>
        <AwesomeButton
          backgroundDarker={BACKGROUND_DARKER}
          backgroundShadow={BACKGROUND_SHADOW}
          stretch={true} 
          height={170}
          onPress={onPress}
        >
          <View style={[styles.card]}>
            <Image 
              style={styles.cardImage}
              source={{uri: image}}
            />
            <View style={[styles.cardStatus, {backgroundColor: color}]}/>
            <View style={styles.cardContent}>
              <Text style={styles.textTitle} numberOfLines={2}>{title}</Text>
              <Text style={styles.textTime}>{time}</Text>
              <View style={styles.coinCount}>
                <Text style={styles.textCoinCount}>{coinCount}</Text>
              </View>
            </View>
          </View>
        </AwesomeButton>
      </View>
    )
  }
}

RecipeCard.propTypes = {
  title: PropTypes.string,
  time: PropTypes.string,
  color: PropTypes.string,
  image: PropTypes.string,
  coinCount: PropTypes.number,
  onPress: PropTypes.func,
}

export default RecipeCard;