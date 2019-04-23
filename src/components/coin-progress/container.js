import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Svg, {
  G,
  LinearGradient,
  Path,
  Defs,
  Stop,
} from 'react-native-svg';

const SCREEN_WIDTH = Dimensions.get('window').width;
const GRADIENT_START_COLOR = '#66d38a';
const GRADIENT_END_COLOR = '#43c971';
const HEIGHT = 300;

class CoinProgressContainer extends Component {
  renderShape() {
    const width = SCREEN_WIDTH;
    const height = HEIGHT;

    const topRadius = 8;
    const bottomRadiusX = width / 2;
    const bottomRadiusY = 35;

    const hLineLength = width - topRadius * 2;
    const vLineLength = height - bottomRadiusY - topRadius;

    return (
      <Svg
        style={styles.bgShape}
        width={width}
        height={height}
      >
        <Defs>
          <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
            <Stop stopColor={GRADIENT_START_COLOR} offset="0%"></Stop>
            <Stop stopColor={GRADIENT_END_COLOR} offset="100%"></Stop>
          </LinearGradient>
        </Defs>
        
        <G fill="url(#linearGradient-1)" fillRule="nonzero">
          <Path d={`M${topRadius},0 h${hLineLength} a${topRadius},${topRadius} 0 0 1 ${topRadius},${topRadius} 
          v${vLineLength} a${bottomRadiusX},${bottomRadiusY} 0 0 1 -${bottomRadiusX},${bottomRadiusY} 
          a${bottomRadiusX},${bottomRadiusY} 0 0 1 -${bottomRadiusX},-${bottomRadiusY} 
          v-${vLineLength} a${topRadius},${topRadius} 0 0 1 ${topRadius},-${topRadius} z`}/>
        </G>
      </Svg>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderShape()}
        {this.props.children}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: HEIGHT,
  },
  bgShape: {
    position: 'absolute',
    left: 0,
    top: 0
  }
});

export default CoinProgressContainer;