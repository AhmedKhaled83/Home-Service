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
  style_container_page: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: RFValue(15),
  },
  // container: {
  //   alignSelf: "flex-start",
  //   marginTop: RFValue(25),
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  // },

  style_text_Enter_newpass: {
    fontSize: FONTSIZE.xxlarge,
    fontWeight: '500',
    textAlign: 'center',
    color: COLORS.mainBlack,
    marginLeft: width * 0.15,
  },

  style_button_back: {
    width: width * 0.0888,
    height: width * 0.0888,
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

    elevation: 5,
  },
  style_container: {
    width: width * 0.9,
    paddingVertical: verticalScale(7),
    backgroundColor: COLORS.white,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: moderateScale(10),
    marginTop: height * 0.045,
    shadowColor: COLORS.black,
    shadowRadius: moderateScale(10),
    shadowOpacity: 0.8,
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: verticalScale(3),
    },
  },
  num_phone_securty: {
    fontSize: FONTSIZE.xlarge * 0.9,
    color: COLORS.mainBlack,
    textAlign: 'right',
    marginRight: moderateScale(5),
    marginTop: height * 0.0111,
    fontWeight: '500',
  },
  style_phone_eye: {
    width: width * 0.15,
    height: height * 0.1,
    borderRadius: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
  },

  text_style: {
    width: width * 0.75,
    height: height * 0.1,
    justifyContent: 'center',
  },

  style_container_confirm: {
    width: width * 0.9,
    height: height < 600 ? RFValue(48) : RFValue(37),
    backgroundColor: COLORS.mainBlue,
    borderRadius: RFValue(8),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: RFValue(45),
    alignSelf: 'center',
  },
  style_text_confirm: {fontSize: FONTSIZE.xlarge, color: COLORS.white},

  pass_text: {
    fontWeight: '400',
    fontSize: FONTSIZE.large,
    marginTop: RFValue(25),
    color: COLORS.mainBlack,
  },
  ViewInput: {
    width: width * 0.9,
    height: height < 600 ? RFValue(50) : RFValue(40),
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
    marginTop: height * 0.01,
  },
  inputStyle: {
    width: width * 0.77,
    color: COLORS.gray2,
    fontSize: FONTSIZE.xlarge,
    justifyContent: 'center',
    paddingHorizontal: RFValue(2.5),
    borderBottomLeftRadius: RFValue(8),
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
    fontSize: FONTSIZE.large * 0.9,
    color: COLORS.red,
    textAlign: 'right',
    marginRight: width * 0.06,
    marginTop: RFValue(5),
  },
  insideTextInput: {
    color: COLORS.black,
    fontSize: RFPercentage(2),
    textAlign: 'right',
    marginLeft: RFValue(2),
  },
});

export default styles;
