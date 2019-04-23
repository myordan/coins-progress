import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const SCREEN_WIDTH = Dimensions.get('window').width;

class CoinProgressBar extends Component {
  render() {
    const width = SCREEN_WIDTH - 20;
    const height = 60;

    const P0 = {x: 10         , y: 10};
    const P1 = {x: width / 2  , y: 70};
    const P2 = {x: width - 10 , y: 10};

    return (
      <Svg style={{overflow: 'visible'}} width={width} height={height}> 
        <Path d={`M${P0.x} ${P0.y} Q ${P1.x} ${P1.y} ${P2.x} ${P2.y}`} 
          stroke="rgba(255, 255, 255, 0.3)" 
          fill="transparent" 
          strokeWidth="2"
        />
        <Path d={`M${P0.x} ${P0.y} Q ${P1.x} ${P1.y} ${P2.x} ${P2.y}`} 
          stroke="white" 
          fill="transparent" 
          strokeWidth="8" 
          strokeLinecap="round" 
          strokeDasharray={[width * this.props.progress / 100, width]}
        />
      </Svg>
    );
  }
}

CoinProgressBar.propTypes = {
  progress: PropTypes.number.isRequired
};

CoinProgressBar.defaultProps = {
  progress: 0
}

export default CoinProgressBar;