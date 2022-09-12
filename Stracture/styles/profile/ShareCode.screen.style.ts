import {StyleSheet, Dimensions, useColorScheme} from 'react-native';
import {FONTSIZE, COLORS} from '../../utils/index';
import {RFValue, RFPercentage} from 'react-native-responsive-fontsize';
const {width, height} = Dimensions.get('screen');
import {scale, moderateScale, verticalScale} from 'react-native-size-matters';
const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  headerStyle: {
    width: width,
    height: height * 0.0888,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-around',
    marginTop: height * 0.01288,
  },
  textViewStyle: {
    width: width * 0.8,
    height: width * 0.0888,
    lineHeight: width * 0.1023,
    alignSelf: 'center',
    justifyContent: 'center',
    marginRight: width * 0.05555,
    marginTop: -height * 0.0444,
  },
  headerTextStyle: {
    color: COLORS.mainBlack,
    fontSize: FONTSIZE.xxlarge,
    textAlign: 'center',
    fontFamily: 'Cairo',
    fontWeight: '500',
  },
  viewIcon: {
    width: scale(32),
    height: scale(32),
    borderColor: COLORS.mainBlack,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(16),
    marginRight: -width * 0.09,
  },
  imageStyle: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: height * 0.0444,
  },
  viewTextStyle: {
    width: width * 0.7666,
    height: height * 0.07696,
    alignSelf: 'center',
    marginTop: height * 0.00592,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: FONTSIZE.medium,
    lineHeight: height * 0.03848,
    color: COLORS.gray4,
    textAlign: 'center',
    fontFamily: 'Cairo',
  },
  viewCodeStyle: {
    flexDirection: 'row',
    marginTop: height * 0.04736,
    width: width * 0.91111,
    height: height * 0.07696,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.pink,
    borderRadius: width * 0.02777,
  },
  codeTextStyle: {
    width: width * 0.185,
    height: height * 0.0444,
    fontSize: FONTSIZE.large,
    lineHeight: height * 0.0444,
    color: COLORS.gray4,
    fontFamily: 'Cairo',
  },
  copyImageStyle: {
    marginRight: width * 0.02222,
  },
  shareButtonStyle: {
    width: width * 0.9111,
    height: height * 0.06216,
    marginTop: height * 0.08436,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.mainBlue,
    borderRadius: width * 0.0222,
    display: 'flex',
  },
  textButtonStyle: {
    width: width * 0.22778,
    height: height * 0.03848,
    fontWeight: '500',
    textAlign: 'center',
    fontSize: FONTSIZE.medium,
    lineHeight: height * 0.03848,
    color: COLORS.white,
    fontFamily: 'Cairo',
  },
});
export default styles;
