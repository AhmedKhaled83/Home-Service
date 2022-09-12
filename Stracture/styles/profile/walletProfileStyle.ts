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
    height: height * 0.9,
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
  containerText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: scale(30),
  },
  text: {
    color: COLORS.mainBlue,
    fontSize: FONTSIZE.large,
    fontWeight: '400',
  },
  text1: {
    color: COLORS.gray2,
    fontSize: FONTSIZE.medium,
    fontWeight: '400',
    marginTop: scale(30),
    fontFamily: 'Cairo',
  },
  text2: {
    color: COLORS.mainBlack,
  },
  containerCode: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: verticalScale(15),
  },
  ViewInput: {
    width: width * 0.67,
    height: scale(48),
    backgroundColor: COLORS.white,
    borderRadius: RFValue(8),
    alignItems: 'center',
    shadowColor: COLORS.mainBlack,
    shadowOpacity: 0.5,
    shadowOffset: {
      width: scale(10),
      height: verticalScale(10),
    },
    borderColor: '#F2F2F2',
    borderWidth: 1,
    elevation: 1,
    paddingHorizontal: scale(10),
  },
  input: {
    textAlign: 'right',
    width: '100%',
    height: '100%',
    color: COLORS.mainBlack,
    fontFamily: 'Cairo',
  },
  btnCode: {
    width: width * 0.2,
    height: scale(48),
    backgroundColor: COLORS.blue2,
    borderRadius: RFValue(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBtnCode: {
    color: COLORS.white,
    fontFamily: 'Cairo',
  },
  middle: {
    marginTop: verticalScale(4),
    alignItems: 'center',
  },
  img: {
    width: scale(144),
    height: scale(144),
    alignSelf: 'center',
    marginTop: verticalScale(50),
  },
  middleText: {
    color: COLORS.gray4,
    fontSize: FONTSIZE.medium,
    fontFamily: 'Cairo',
  },
  title: {
    fontWeight: '400',
    fontSize: FONTSIZE.large,
    color: COLORS.mainBlack,
    textAlign: 'center',
    marginTop: verticalScale(4),
    fontFamily: 'Cairo',
  },
  middleText1: {
    fontWeight: '400',
    fontSize: FONTSIZE.large,
    color: COLORS.mainBlack,
    fontFamily: 'Cairo',
  },
  middleText2: {
    fontSize: FONTSIZE.xxlarge,
    color: COLORS.mainBlue,
    fontWeight: '500',
  },
  btnTextWallet: {
    fontSize: FONTSIZE.xlarge * 0.9,
    color: COLORS.white,
    fontFamily: 'Cairo',
  },
  btnTextMoney: {
    fontSize: FONTSIZE.large,
    color: COLORS.mainBlue,
    fontFamily: 'Cairo',
  },
  btnMoney: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.mainBlue,
    borderWidth: moderateScale(1),
    marginTop: RFValue(15),
  },
  btnWallet: {
    width: width * 0.9,
    height: RFValue(48),
    backgroundColor: COLORS.mainBlue,
    borderRadius: RFValue(8),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: RFValue(30),
    alignSelf: 'center',
  },
  service: {
    width: scale(85),
    height: scale(38),
    backgroundColor: COLORS.yellow2,
    alignItems: 'center',
    borderRadius: scale(6),
    justifyContent: 'center',
  },
  text4: {
    color: COLORS.gray2,
    fontSize: FONTSIZE.large,
    marginTop: verticalScale(36),
    fontFamily: 'Cairo',
  },
  stop: {
    height: scale(78),
  },
  text5: {
    color: COLORS.gray2,
    fontSize: FONTSIZE.large,
    alignSelf: 'center',
    marginTop: verticalScale(15),
    fontFamily: 'Cairo',
  },
});

export default styles;
