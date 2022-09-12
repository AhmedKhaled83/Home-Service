import {StyleSheet, Dimensions} from 'react-native';
import {FONTSIZE, COLORS} from '../../utils/fonts.util';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {verticalScale, scale, moderateScale} from 'react-native-size-matters';

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  color_stutsBar: {color: COLORS.white},
  bottn_back: {color: COLORS.black},
  color_textInput: {color: COLORS.gray2},
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: RFValue(25),
  },
  style_container_border: {
    flexDirection: 'row',
    width: width,
    height: height * 0.06,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  style_text_check: {
    fontSize: FONTSIZE.xxlarge,
    fontWeight: '500',
    color: COLORS.mainBlack,
    marginLeft: width * 0.2,
  },

  style_button_back: {
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
  },

  style_text_message: {
    fontSize: scale(18),
    color: COLORS.mainBlack,
    textAlign: 'center',
    paddingHorizontal: width * 0.1,
    marginTop: height * 0.04,
  },
  countDown: {
    width: width * 0.15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },

  style_container_text_returnSend: {
    flexDirection: 'row',
    margin: moderateScale(15),
    padding: 2,
    alignSelf: 'flex-end',
  },

  style_text_returnSend: {fontSize: scale(17), color: COLORS.mainBlack},

  style_time: {
    fontSize: scale(15),
    color: COLORS.mainBlack,
    fontWeight: '500',
    letterSpacing: 0.25,
  },

  codeFieldRoot: {
    marginTop: RFValue(30),
    width: width * 0.9,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cell: {
    width: width * 0.13,
    height: height < 600 ? RFValue(55) : RFValue(42),
    marginHorizontal: moderateScale(5),
    backgroundColor: COLORS.white,
    borderRadius: 10,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: verticalScale(20),
    },
    shadowOpacity: 0.25,
    shadowRadius: 0,
    color: COLORS.black,
    elevation: 5,
    lineHeight: 38,
    fontSize: scale(24),
    borderWidth: 2,
    borderColor: COLORS.white,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  focusCell: {
    borderColor: COLORS.mainBlue,
  },

  style_container_confirm: {
    width: width * 0.9,
    height: height < 600 ? RFValue(48) : RFValue(37),
    backgroundColor: COLORS.mainBlue,
    borderRadius: RFValue(8),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: RFValue(28),
    alignSelf: 'center',
  },
  style_text_confirm: {fontSize: FONTSIZE.xlarge, color: COLORS.white},
});

export default styles;
