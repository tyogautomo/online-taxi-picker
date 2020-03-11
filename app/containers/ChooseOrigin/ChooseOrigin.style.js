import { StyleSheet } from 'react-native';

import { constant } from '../../utils/constant';
import { colors } from '../../themes/colors';

const { DEVICE_HEIGHT } = constant;

const styles = StyleSheet.create({
  mapContainer: {
    width: '100%',
    height: DEVICE_HEIGHT - 75
  },
  summaryContainer: {
    position: 'absolute',
    width: '90%',
    height: 170,
    backgroundColor: colors.white,
    elevation: 4,
    borderRadius: 8,
    alignSelf: 'center',
    bottom: 0,
    marginBottom: 30,
    padding: 20
  },
  textNow: bookNow => ({
    borderWidth: bookNow ? 1 : 0,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderColor: colors.greenHaze,
    borderRadius: 3,
    fontFamily: 'OsnovaPro',
    fontSize: 13,
    color: bookNow ? colors.greenHaze : 'black'
  }),
  textLater: bookNow => ({
    borderWidth: !bookNow ? 1 : 0,
    borderColor: colors.greenHaze,
    borderRadius: 3,
    paddingHorizontal: 10,
    paddingVertical: 6,
    fontFamily: 'OsnovaPro',
    fontSize: 13,
    color: !bookNow ? colors.greenHaze : 'black'
  }),
  originPinContainer: {
    position: 'absolute',
    width: '100%',
    height: DEVICE_HEIGHT - 75,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export { styles };
