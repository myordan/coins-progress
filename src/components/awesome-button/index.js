import React from "react";
import PropTypes from "prop-types";
import {
  TouchableWithoutFeedback,
  View,
  Animated,
  ViewPropTypes
} from "react-native";
import { animateTiming, animateSpring } from "./helpers";
import { styles, getStyles } from "./styles";
import {
  ANIMATED_TIMING_OFF,
  DEFAULT_BACKGROUND_DARKER,
  DEFAULT_BACKGROUND_SHADOW,
  DEFAULT_BORDER_RADIUS,
  DEFAULT_HEIGHT,
  DEFAULT_RAISE_LEVEL,
  DEFAULT_WIDTH,
} from "./constants";

export default class Button extends React.Component {
  static propTypes = {
    backgroundDarker: PropTypes.string,
    backgroundShadow: PropTypes.string,
    borderRadius: PropTypes.number,
    children: PropTypes.node,
    disabled: PropTypes.bool,
    height: PropTypes.number,
    onPress: PropTypes.func,
    raiseLevel: PropTypes.number,
    springRelease: PropTypes.bool,
    stretch: PropTypes.bool,
    style: ViewPropTypes.style,
    width: PropTypes.number
  };

  static defaultProps = {
    backgroundDarker: DEFAULT_BACKGROUND_DARKER,
    backgroundShadow: DEFAULT_BACKGROUND_SHADOW,
    borderRadius: DEFAULT_BORDER_RADIUS,
    children: null,
    disabled: false,
    height: DEFAULT_HEIGHT,
    onPress: null,
    raiseLevel: DEFAULT_RAISE_LEVEL,
    springRelease: true,
    stretch: false,
    style: null,
    width: DEFAULT_WIDTH
  };

  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0);
    this.layouted = null;
    this.timeout = null;
    this.pressing = false;

    this.state = {
      width: null
    };
  }

  getAnimatedValues() {
    return {
      animatedShadow: {
        transform: [
          {
            translateY: this.animatedValue.interpolate({
              inputRange: [0, 1],
              outputRange: [0, -this.props.raiseLevel / 2]
            })
          }
        ]
      },
      animatedContent: {
        transform: [
          {
            translateY: this.animatedValue.interpolate({
              inputRange: [0, 1],
              outputRange: [0, this.props.raiseLevel]
            })
          }
        ]
      },
    };
  }

  pressIn = () => {
    if (this.props.disabled === true || !this.props.children) {
      return false;
    }
    this.pressing = true;
    animateTiming({
      variable: this.animatedValue,
      toValue: 1,
      duration: ANIMATED_TIMING_OFF
    });
  };

  pressOut = () => {
    if (this.props.disabled === true || !this.props.children) {
      return false;
    }
    if (this.pressing === false) {
      this.press();
      this.release();
      return;
    }
    this.timeout = setTimeout(() => {
      this.press();
      this.release();
    }, ANIMATED_TIMING_OFF / 2.5);
  };

  press = () => {
    if (this.props.onPress) {
      this.props.onPress();
    }
  };

  release(callback) {
    if (this.props.springRelease === true) {
      animateSpring({
        variable: this.animatedValue,
        toValue: 0,
        callback
      });
      return;
    }
    animateTiming({
      variable: this.animatedValue,
      toValue: 0,
      duration: ANIMATED_TIMING_OFF,
      callback
    });
  }

  textLayout = event => {
    if (this.props.width === null && !this.props.stretch == true) {
      if (
        this.state.width !== event.nativeEvent.layout.width &&
        this.state.width < event.nativeEvent.layout.width
      ) {
        this.setState({
          width: event.nativeEvent.layout.width
        });
      }
    }
  };

  renderContent(dynamicStyles) {
    const { children } = this.props;

    return (
      <View
        style={[
          styles.container__view,
          dynamicStyles.container__view,
        ]}
      >
        {children}
      </View>
    );
  }

  render() {
    const animatedValues = this.getAnimatedValues();
    const dynamicStyles = getStyles({
      ...this.props,
      stateWidth: this.state.width
    });
    const { style } = this.props;

    return (
      <TouchableWithoutFeedback
        onPressIn={this.pressIn}
        onPressOut={this.pressOut}
      >
        <View
          style={[
            styles.container,
            dynamicStyles.container,
            style
          ]}
        >
          <Animated.View
            style={[
              styles.shadow,
              dynamicStyles.shadow,
              animatedValues.animatedShadow
            ]}
          />
          <View
            style={[styles.bottom, dynamicStyles.bottom]}
          />
          <Animated.View
            style={[
              styles.content,
              dynamicStyles.content,
              animatedValues.animatedContent
            ]}
          >
            <View
              style={[styles.text, dynamicStyles.text]}
              onLayout={this.textLayout}
            >
              {this.renderContent(dynamicStyles)}
            </View>
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}