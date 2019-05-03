import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { styles } from './styles';

const ACTIVE_DOT_COLOR = 'white';
const DOT_COLOR = 'rgba(255, 255, 255, 0.65)';

class DiscoverSlider extends Component {
  renderSlide(slide) {
    return (
      <TouchableOpacity
        key={slide.key}
        style={styles.slide}
        activeOpacity={1}
        onPress={() => {this.props.onPress(slide.key)}}
      >
        <Image
          resizeMode='cover'
          style={styles.background}
          source={slide.image}
        />
        <View style={styles.content}>
          <Text style={styles.title}>{slide.text}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    const { slides } = this.props;
    return (
      <View style={styles.container}>
        <Swiper
          dotColor={DOT_COLOR}
          activeDotColor={ACTIVE_DOT_COLOR}
          activeDotStyle={{width: 8, height: 8}}
          dotStyle={{width: 6, height: 6}}
          paginationStyle={{bottom: 30}}
        >
          {slides.map((slide) => this.renderSlide(slide))}
        </Swiper>
      </View>
    )
  }
}

DiscoverSlider.propTypes = {
  slides: PropTypes.array,
  onPress: PropTypes.func,
}

DiscoverSlider.defaultProps = {
  slides: []
}

export default DiscoverSlider;