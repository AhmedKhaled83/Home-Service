import {StyleSheet, Dimensions} from 'react-native';
import {FONTSIZE, COLORS} from '../../utils/index';
import {RFValue, RFPercentage} from 'react-native-responsive-fontsize';
const {width, height} = Dimensions.get('screen');
import {scale, moderateScale, verticalScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  color_stutsBar: {color: COLORS.white},
  color_textInput: {color: COLORS.gray2},

  container: {
    backgroundColor: COLORS.white,
    paddingHorizontal: RFValue(15),
    paddingTop: RFValue(25),
    flex: 1,
  },
  containerHeader: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
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
    marginRight: -width * 0.091,
    width: scale(32),
    height: scale(32),
    borderColor: COLORS.mainBlack,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(16),
  },
  text: {
    color: COLORS.mainBlue,
    fontSize: FONTSIZE.large,
    fontWeight: '500',
    marginTop: scale(24),
    fontFamily: 'Cairo',
  },
  view2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: scale(12),
  },
  text1: {
    color: COLORS.mainBlack,
    fontSize: FONTSIZE.large,
    fontWeight: '500',
    fontFamily: 'Cairo',
  },
  text2: {
    color: COLORS.mainBlue,
    fontSize: FONTSIZE.xlarge,
    fontWeight: '500',
    fontFamily: 'Cairo',
  },
  text3: {
    color: COLORS.mainBlack,
    fontSize: FONTSIZE.large,
    fontWeight: '500',
    marginTop: scale(24),
    fontFamily: 'Cairo',
  },
  containerVias: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    marginTop: verticalScale(30),
    alignItems: 'center',
  },
  area: {
    borderColor: COLORS.mainBlue,
    borderWidth: 1,
    borderRadius: RFValue(8),
    width: scale(80),
    height: scale(80),
    alignItems: 'center',
    justifyContent: 'center',
  },
  area2: {
    borderColor: COLORS.gold,
  },
  imgPayment: {
    width: scale(40),
    height: scale(40),
  },
  ViewInput: {
    width: '100%',
    height: scale(48),
    backgroundColor: COLORS.white,
    borderRadius: RFValue(8),
    shadowColor: COLORS.mainBlack,
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    elevation: 1,
    textAlign: 'right',
    paddingHorizontal: scale(10),
    color: COLORS.mainBlack,
    fontWeight: '400',
    marginTop: verticalScale(8),
  },
  containerCvAndDate: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  changeInputView: {
    flexDirection: 'row',
    width: width * 0.4,
    height: scale(48),
    backgroundColor: COLORS.white,
    borderRadius: RFValue(8),
    shadowColor: COLORS.mainBlack,
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    elevation: 1,
    paddingHorizontal: scale(10),
    marginTop: verticalScale(8),
    alignItems: 'center',
  },
  TextInputInside: {
    width: '100%',
    height: '100%',
    textAlign: 'right',
    color: COLORS.mainBlack,
    marginLeft: scale(5),
    fontSize: FONTSIZE.large,
    fontFamily: 'Cairo',
  },

  btnTextBook: {
    fontSize: FONTSIZE.xlarge * 0.9,
    color: COLORS.white,
    fontFamily: 'Cairo',
  },
  btnBook: {
    width: width * 0.9,
    height: RFValue(48),
    backgroundColor: '#3A82F8',
    borderRadius: RFValue(8),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: RFValue(30),
    alignSelf: 'center',
  },
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  img: {
    marginLeft: -scale(50),
  },
});

export default styles;
