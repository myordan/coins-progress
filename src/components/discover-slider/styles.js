import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 340,
  },
  slide: {
    flex: 1
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%', 
    height: '100%'
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25
  },
  title: {
    color: '#fefefe',
    fontSize: 40,
    lineHeight: 40,
    fontStyle: 'italic',
    textAlign: 'center'
  }
})