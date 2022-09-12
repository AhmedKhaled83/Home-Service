import {StyleSheet, Dimensions} from 'react-native';
import {FONTSIZE, COLORS} from '../../utils/index';
import {RFValue, RFPercentage} from 'react-native-responsive-fontsize';
const {width, height} = Dimensions.get('screen');
import {scale, moderateScale, verticalScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  color_stutsBar: {color: COLORS.white},
  bottn_back: {color: COLORS.black},
  color_textInput: {color: COLORS.gray2},
  white: {color: COLORS.white},
  black: {color: COLORS.mainBlack},

  botton_radiobotton: {color: COLORS.mainBlue},
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
  text: {
    width: '100%',
    color: COLORS.mainBlack,
    fontSize: FONTSIZE.xxlarge,
    fontWeight: '500',
    textAlign: 'center',
    alignSelf: 'center',
    fontFamily: 'Cairo',
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
  containerRadio: {
    flexDirection: 'row',
    flex: 1,
    marginTop: height * 0.05,
    paddingRight: width * 0.24,
    justifyContent: 'space-between',
    marginBottom: scale(22),
  },
  labelRadio: {
    fontSize: FONTSIZE.large,
    color: COLORS.mainBlack,
    marginLeft: moderateScale(10),
  },
  dropdown: {
    padding: width * 0.01111,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: RFValue(10),
    borderTopRightRadius: RFValue(10),
    borderBottomLeftRadius: RFValue(0),
    borderBottomRightRadius: RFValue(0),
    height: scale(55),
    borderColor: COLORS.gray2,
    borderWidth: 1,
  },

  dropDownContainerStyle: {
    backgroundColor: COLORS.white,
    color: COLORS.mainBlue,
    borderColor: COLORS.gray2,
    borderWidth: 1,
  },
  placeholderStyle: {
    color: COLORS.mainBlack,
    fontSize: FONTSIZE.large,
  },
  selectedItemContainer: {
    backgroundColor: COLORS.mainBlue,
  },
  selectedItemLabel: {
    color: COLORS.white,
  },
  listItemLabelStyle: {
    color: COLORS.mainBlue,
  },

  imgMap: {
    width: width,
    height: scale(180),
    paddingTop: scale(10),
    paddingLeft: scale(15),
    marginTop: scale(20),
  },
  close: {
    width: scale(15),
    height: scale(15),
  },
  viewList: {
    height: height * 0.45,
    marginBottom: verticalScale(20),
  },
  // footer: {marginTop: height * 0.45},
  btnImage: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    width: '42%',
    justifyContent: 'space-between',
    marginBottom: verticalScale(20),
  },

  btnTextImage: {
    fontSize: FONTSIZE.large,
    color: COLORS.gray2,
  },

  btn: {
    width: scale(187),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: RFValue(48),
    backgroundColor: COLORS.mainBlue,
    borderRadius: RFValue(8),
    alignSelf: 'center',
    marginBottom: verticalScale(20),
  },
  btnText: {
    fontSize: FONTSIZE.xlarge,
    color: COLORS.white,
  },
});

export default styles;
