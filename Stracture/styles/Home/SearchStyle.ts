import {StyleSheet, Dimensions} from 'react-native';
import {FONTSIZE, COLORS} from '../../utils/index';
import {RFValue, RFPercentage} from 'react-native-responsive-fontsize';
const {width, height} = Dimensions.get('screen');
import {scale, moderateScale, verticalScale} from 'react-native-size-matters';
const styles = StyleSheet.create({
  color_stutsBar: {color: COLORS.white},
  color_textInput: {color: COLORS.gray2},
  black2: {color: COLORS.black2},
  container: {
    backgroundColor: '#E5E5E5',
    paddingHorizontal: RFValue(15),
    paddingTop: RFValue(25),
    flex: 1,
  },
  viewIcon: {
    width: scale(32),
    height: scale(32),
    borderColor: COLORS.mainBlack,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(16),
  },
  ViewInput: {
    width: scale(270),
    height: scale(40),
    backgroundColor: COLORS.white,
    borderRadius: RFValue(8),
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: COLORS.mainBlack,
    shadowOpacity: 0.5,
    shadowOffset: {
      width: scale(10),
      height: verticalScale(10),
    },
    elevation: 2,
    paddingHorizontal: scale(10),
  },
  insideTextInput: {
    width: '80%',
    height: '100%',
    color: COLORS.black,
    fontSize: FONTSIZE.medium,
    textAlign: 'right',
    marginLeft: scale(5),
    fontFamily: 'Cairo',
  },
  text: {
    color: '#000000',
    fontSize: scale(16),
    paddingTop: scale(5),
    fontFamily: 'Cairo',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: scale(20),
  },
  empty: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.2,
  },
  textEmpty: {
    marginTop: verticalScale(10),
    fontWeight: '400',
    color: COLORS.mainBlack,
    fontSize: FONTSIZE.large,
    fontFamily: 'Cairo',
  },
});

export default styles;
