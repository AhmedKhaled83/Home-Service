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
    backgroundColor: COLORS.white,
    paddingHorizontal: RFValue(15),
    paddingTop: RFValue(25),
    flex: 1,
  },
  containerHeader: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    marginBottom: verticalScale(20),
  },
  header: {
    width: '100%',
    color: COLORS.mainBlack,
    fontSize: FONTSIZE.xxlarge,
    fontWeight: '500',
    textAlign: 'center',
    alignSelf: 'center',
    fontFamily: 'Cairo',
  },
  viewIcon: {
    width: scale(32),
    height: scale(32),
    borderColor: COLORS.mainBlack,
    borderWidth: scale(1),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(16),
    marginRight: -width * 0.091,
  },
  btnGps: {
    width: '100%',
    height: scale(42),
    backgroundColor: COLORS.white,
    paddingHorizontal: width * 0.03,
    borderRadius: RFValue(8),
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: verticalScale(20),
    },
    shadowOpacity: 0.25,
    shadowRadius: 0,
    elevation: 2,
    alignItems: 'center',
    flexDirection: 'row',
  },
  textGps: {
    color: COLORS.mainBlack,
    fontSize: FONTSIZE.medium,
    marginLeft: width * 0.04,
    fontFamily: 'Cairo',
  },
  dropdown: {
    backgroundColor: COLORS.white,
    padding: width * 0.01111,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: RFValue(8),
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: verticalScale(20),
    },
    shadowOpacity: 0.25,
    shadowRadius: 0,
    elevation: 2,
    borderColor: COLORS.white,
    borderWidth: 1,
    textAlign: 'right',
  },
  dropDownContainerStyle: {
    backgroundColor: COLORS.white,
    padding: width * 0.01111,
    borderRadius: RFValue(8),
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: verticalScale(20),
    },
    shadowOpacity: 0.25,
    shadowRadius: 0,
    elevation: 2,
    borderColor: COLORS.white,
    borderWidth: 1,
    textAlign: 'right',
  },
  text: {
    color: COLORS.mainBlack,
    fontSize: FONTSIZE.medium,
    fontWeight: '400',
    marginVertical: verticalScale(15),
    fontFamily: 'Cairo',
  },

  btnMoney: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.mainBlue,
    borderWidth: moderateScale(1),
    marginTop: RFValue(15),
  },
  btn: {
    width: width * 0.9,
    height: RFValue(40),
    backgroundColor: COLORS.mainBlue,
    borderRadius: RFValue(8),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    bottom: verticalScale(20),
  },
  btnText: {
    fontSize: FONTSIZE.medium,
    color: COLORS.white,
    fontFamily: 'Cairo',
  },
});
export default styles;
