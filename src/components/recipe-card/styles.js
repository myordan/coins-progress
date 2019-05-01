import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 173,
    marginHorizontal: 3,
    marginVertical: 6
  },
  card: {
    flex: 1,
    borderRadius: 4,
    backgroundColor: '#fefefe',
    overflow: 'hidden'
  },
  cardImage: {
    height: 112,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  cardStatus: {
    position: 'absolute',
    top: 8,
    left: 8,
    width: 8,
    height: 8,
    borderRadius: 4,
    borderColor: '#fefefe',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  cardContent: {
    paddingVertical: 4,
    paddingLeft: 8,
    paddingRight: 28
  },
  textTitle: {
    color: '#1a1c1c',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 16,
  },
  textTime: {
    marginTop: 2,
    color: '#b4b9b9',
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 14,
  },
  coinCount: {
    position: 'absolute',
    top: -16,
    right: 8,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#26b47a',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textCoinCount: {
    color: '#fefefe',
    fontSize: 16,
    fontWeight: '700',
  }
})