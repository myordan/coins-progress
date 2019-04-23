import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 16
  },
  progressContainer: {
    height: 65,
    alignItems: 'center',
    justifyContent: 'center'
  }
})