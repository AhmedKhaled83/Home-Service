import {StyleSheet, Dimensions, useColorScheme} from 'react-native';
import {FONTSIZE, COLORS} from '../../utils/fonts.util';
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
  },
  iconViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: width * 0.01111,
    width: width * 0.0888,
    height: width * 0.0888,
    backgroundColor: COLORS.white,
    marginRight: RFValue(-13),
    borderRadius: RFValue(8),
    shadowOffset: {
      width: width * 0.0111,
      height: width * 0.0111,
    },
    elevation: 2,
    flexDirection: 'row',
  },
  textStyle: {
    color: COLORS.mainBlue,
    textAlign: 'center',
    fontSize: FONTSIZE.medium,
    lineHeight: height * 0.03848,
    fontWeight: '400',
    marginTop: -verticalScale(25),
    fontFamily: 'Cairo',
  },
  imageStyle: {
    width: width * 0.2777,
    height: width * 0.2777,
    borderRadius: width * 0.1388,
    alignSelf: 'center',
    marginTop: height * 0.01776,
  },
  star: {
    width: width * 0.02777,
    height: width * 0.02777,
    marginTop: width * 0.01966,
  },
  viewsStyle: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle2: {
    marginTop: height * 0.0148,
    width: width * 0.3583,
    height: height * 0.03848,
    fontSize: FONTSIZE.medium,
    textAlign: 'center',
    color: COLORS.black,
    alignSelf: 'center',
    fontFamily: 'Cairo',
  },
  buttonStyle: {
    width: width * 0.41388,
    height: height * 0.05624,
    marginTop: height * 0.01184,
    flexDirection: 'row',
    display: 'flex',
    borderRadius: width * 0.02777,
    paddingVertical: height * 0.01184,
    backgroundColor: COLORS.mainBlue,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.06,
  },
  textStyle3: {
    color: COLORS.white,
    fontSize: FONTSIZE.medium,
    marginLeft: height * 0.01184,
    fontFamily: 'Cairo',
  },
  buttonStyle2: {
    width: width * 0.41388,
    height: height * 0.05624,
    marginTop: height * 0.01184,
    flexDirection: 'row',
    display: 'flex',
    borderRadius: width * 0.02777,
    paddingVertical: height * 0.01184,
    borderWidth: 1,
    borderColor: COLORS.mainBlue,
    marginLeft: width * 0.08333,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.04,
  },
  viewsStyle2: {flexDirection: 'row', padding: 16},
  textStyle4: {
    color: COLORS.gray1,
    fontSize: FONTSIZE.large,
    marginLeft: width * 0.02777,
  },
  textStyle5: {
    width: width * 0.8444,
    color: COLORS.gray4,
    fontSize: FONTSIZE.smaller,
    marginLeft: width * 0.0444,
    lineHeight: scale(22.5),
    fontFamily: 'Cairo',
  },
  containerStyle4: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: width * 0.0444,
    marginTop: verticalScale(10),
  },
  textStyle6: {
    height: height * 0.0444,
    marginRight: width * 0.06388,
    fontSize: FONTSIZE.large,
    lineHeight: height * 0.0444,
    fontWeight: '400',
    color: COLORS.gray1,
    fontFamily: 'Cairo',
  },
  containerStyle0: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '50%',
    paddingLeft: width * 0.04444,
  },
  textStyle0: {
    fontSize: FONTSIZE.large,
    lineHeight: height * 0.0444,
    fontWeight: '400',
    color: COLORS.mainBlue,
    fontFamily: 'Cairo',
  },
  textStyle7: {
    width: width * 0.24166,
    height: height * 0.03256,
    marginLeft: width * 0.1972,
    color: COLORS.gray2,
    marginTop: height * 0.01184,
    fontWeight: '400',
    fontFamily: 'Cairo',
  },
  containerStyle3: {
    padding: width * 0.01388,
    backgroundColor: COLORS.white,
    borderRadius: RFValue(8),
    shadowOffset: {
      width: width * 0.0111,
      height: width * 0.0111,
    },
    elevation: 1,
    shadowOpacity: 0.5,
    shadowColor: COLORS.black,
  },
  imageStyle2: {
    width: width * 0.9111,
    alignSelf: 'center',
    height: height * 0.28567,
    marginTop: height * 0.0222,
    borderTopRightRadius: width * 0.02222,
    borderTopLeftRadius: width * 0.02222,
  },
  favoriteButtonStyle: {
    width: width * 0.08888,
    height: height * 0.047365,
    borderRadius: width * 0.0222,
    backgroundColor: 'rgba(255,255,255,.5)',
    position: 'absolute',
    marginTop: height * 0.03552,
    marginLeft: width * 0.80222,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerStyle5: {
    marginTop: width * 0.0111,
    width: width * 0.49444,
    height: height * 0.041444,
    marginLeft: width * 0.05833,
  },
  servisTextNameStyle: {
    color: COLORS.mainBlack,
    fontSize: FONTSIZE.large,
    marginTop: scale(13),
    height: height * 0.054796,
    fontFamily: 'Cairo',
  },
  priceTextStyle: {
    color: COLORS.mainBlue,
    fontSize: FONTSIZE.xlarge,
    width: width * 0.1888,
    // height: height * 0.054796,
    marginLeft: width * 0.73333,
    textAlign: 'right',
    lineHeight: width * 0.1027,
    marginTop: -height * 0.029603,
    fontFamily: 'Cairo',
  },
  containerStyle6: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width * 0.3888,
    height: height * 0.03848,
    marginLeft: width * 0.05833,
  },
  profilePhotoStyle: {
    width: width * 0.06667,
    height: height * 0.03554,
    borderRadius: width * 0.03333,
  },
  designerTextStyle: {
    fontSize: FONTSIZE.medium,
    color: COLORS.mainBlack,
    marginLeft: width * 0.02777,
    fontFamily: 'Cairo',
  },
  jobTitleStyle: {
    color: COLORS.gray2,
    fontSize: FONTSIZE.smaller,
    //marginTop: 8,
    width: width * 0.225,
    height: height * 0.0355,
    //paddingHorizontal: 20,
    marginLeft: width * 0.06833,
    fontFamily: 'Cairo',
  },
  btnStyle: {
    width: width * 0.3977,
    height: height * 0.28419,
    marginTop: height * 0.035523,
    alignSelf: 'center',
    marginLeft: width * 0.058333,
  },
  reservationButtonStyle: {
    width: width * 0.1666,
    height: height * 0.05,
    borderRadius: RFValue(8),
    marginLeft: width * 0.4544,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.mainBlue,
  },
  textStyle8: {
    fontSize: FONTSIZE.medium,
    lineHeight: width * 0.07222,
    color: COLORS.white,
    textAlign: 'center',
    fontFamily: 'Cairo',
  },
  containerStyle2: {
    width: width * 0.9111,
    height: height * 0.3241,
    alignSelf: 'center',
    borderRadius: width * 0.02777,
    marginRight: width * 0.0444,
    marginLeft: width * 0.01388,
  },
  imageStyle3: {
    width: width * 0.3027,
    height: height * 0.1613,
    borderWidth: 1,
    borderColor: COLORS.white,
  },
  btnStyle2: {
    width: width * 0.0888,
    height: width * 0.0888,
    borderRadius: width * 0.02777,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.yellow,
    marginLeft: width * 0.0333,
    marginTop: height * 0.13,
  },
  imageStyle4: {
    width: width * 0.0888,
    height: width * 0.0888,
    borderRadius: width * 0.0444,
    marginRight: width * 0.1388,
  },
  textStyle9: {
    fontSize: FONTSIZE.medium,
    color: COLORS.gray1,
    marginTop: height * 0.01184,
    //marginRight: 320,
    marginLeft: -width * 0.0888,
    width: width * 0.2777,
    fontFamily: 'Cairo',
  },
  star2: {
    width: width * 0.02777,
    height: width * 0.02777,
    marginTop: width * 0.03,
  },
  textStyle10: {
    fontSize: FONTSIZE.small,
    color: COLORS.gray1,
    marginTop: height * 0.013,
    marginLeft: width * 0.16666,
    fontFamily: 'Cairo',
  },
  textStyle11: {
    width: width * 0.6888,
    // height: height * 0.03108,
    marginVertical: height * 0.02,
    marginLeft: width * 0.125,
    fontSize: FONTSIZE.smaller,
    color: '#405050',
    fontFamily: 'Cairo',
  },
  viewsStyle3: {
    width: width * 0.7638,
    alignSelf: 'center',
    backgroundColor: 'rgba(174,174,178,0.3)',
    marginTop: height * 0.0177619,
    height: 1,
  },
});
export default styles;