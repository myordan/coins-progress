import React from 'react';
import {View, StyleSheet} from 'react-native';
import { Constants } from 'expo';

import Main from "./src/containers/main";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.statusBar}/>
        <Main/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  statusBar: {
    height: Constants.statusBarHeight,
  },

  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
