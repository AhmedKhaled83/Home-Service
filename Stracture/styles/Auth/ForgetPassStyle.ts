import {StyleSheet, Dimensions} from 'react-native';
import {FONTSIZE, COLORS} from '../../utils/fonts.util';

import {RFValue, RFPercentage} from 'react-native-responsive-fontsize';
const {width, height} = Dimensions.get('screen');
import {scale, moderateScale, verticalScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  color_stutsBar: {color: COLORS.white},
  bottn_back: {color: COLORS.black},
  color_textInput: {color: COLORS.gray2},
  white: {color: COLORS.white},
  botton_radiobotton: {color: COLORS.mainBlue},
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: RFValue(15),
    paddingTop: RFValue(25),
  },
  containerHeader: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  text: {
    width: '100%',
    color: COLORS.mainBlack,
    fontSize: FONTSIZE.xxlarge,
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
  },
  viewArrow: {
    width: width * 0.0888,
    height: width * 0.0888,
    backgroundColor: COLORS.white,
    marginHorizontal: width * 0.07,
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

    elevation: 5,
    marginRight: -width * 0.09,
  },
  text1: {
    color: COLORS.mainBlue,
    fontSize: FONTSIZE.xlarge,
    fontWeight: 'bold',
    marginTop: moderateScale(20),
  },
  containerRadio: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flex: 1,
    marginTop: height * 0.08,
    marginHorizontal: RFValue(5),
  },
  labelRadio: {
    fontSize: FONTSIZE.xlarge * 0.9,
    color: COLORS.mainBlack,
    marginLeft: moderateScale(10),
  },
  ViewInput: {
    width: width * 0.9,
    height: height < 600 ? RFValue(55) : RFValue(45),
    backgroundColor: COLORS.white,
    borderRadius: RFValue(8),
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: COLORS.mainBlack,
    shadowOpacity: 0.5,
    alignSelf: 'center',

    shadowOffset: {
      width: scale(10),
      height: verticalScale(10),
    },
    elevation: 5,
    marginTop: height * 0.12,
  },
  inputStyle: {
    width: width * 0.77,
    color: COLORS.gray2,
    fontSize: scale(18),
    justifyContent: 'center',
    paddingHorizontal: RFValue(3),
    borderBottomLeftRadius: RFValue(8),
  },
  insideTextInput: {
    color: COLORS.gray2,
    fontSize: RFPercentage(2.1),
    textAlign: 'right',
  },
  container_icons: {
    width: width * 0.13,
    height: height < 600 ? RFValue(50) : RFValue(40),
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomRightRadius: RFValue(8),
    borderTopRightRadius: RFValue(8),
  },
  textError: {
    color: 'red',
    marginTop: moderateScale(10),
  },
  btn: {
    width: width * 0.9,
    height: height < 600 ? RFValue(48) : RFValue(37),
    backgroundColor: COLORS.mainBlue,
    borderRadius: RFValue(8),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: RFValue(28),
    alignSelf: 'center',
  },

  btnText: {
    fontSize: FONTSIZE.xlarge * 0.9,
    color: '#fff',
  },
});

export default styles;
