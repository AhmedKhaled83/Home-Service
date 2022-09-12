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
    paddingHorizontal: RFValue(15),
    paddingTop: RFValue(25),
  },
  heading: {
    color: COLORS.mainBlack,
    fontSize: FONTSIZE.xxlarge,
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
  },
  heading2: {
    color: COLORS.mainBlue,
    fontSize: FONTSIZE.xlarge,
    fontWeight: '500',
    marginTop: RFValue(15),
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
    marginTop: height * 0.02,
  },
  insideTextInput: {
    color: COLORS.black,
    fontSize: RFPercentage(2),
    textAlign: 'right',
    marginLeft: RFValue(2),
  },
  inputStyle: {
    width: width * 0.77,
    color: COLORS.gray2,
    fontSize: FONTSIZE.xlarge,
    justifyContent: 'center',
    paddingHorizontal: RFValue(2.5),
    borderBottomLeftRadius: RFValue(8),
    borderTopLeftRadius: RFValue(8),
  },
  container_icons: {
    width: width * 0.13,
    height: height < 600 ? RFValue(50) : RFValue(40),
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomRightRadius: RFValue(8),
    borderTopRightRadius: RFValue(8),
  },

  btn: {
    width: width * 0.9,
    height: height < 600 ? RFValue(48) : RFValue(37),
    backgroundColor: '#3A82F8',
    borderRadius: RFValue(8),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: RFValue(28),
    alignSelf: 'center',
  },
  social: {
    color: COLORS.gray4,
    textAlign: 'center',
    fontSize: FONTSIZE.medium,
    marginTop: RFValue(30),
  },
  viewIcon: {
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: width * 0.32,
    justifyContent: 'space-between',
    marginTop: RFValue(40),
  },
  container_soical_icons: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
    width: width * 0.13,
    height: height < 600 ? RFValue(40) : RFValue(30),
    shadowColor: COLORS.mainBlack,
    borderRadius: RFValue(5),
    shadowOffset: {
      width: scale(10),
      height: verticalScale(10),
    },
    elevation: 0.5,
  },
  foundOrNot: {
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    alignSelf: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: RFValue(15),
  },
  textNotFound: {
    color: COLORS.mainBlack,
    textAlign: 'center',
    fontSize: FONTSIZE.smaller,
    fontWeight: 'bold',
  },
  textFound: {
    textAlign: 'center',
    fontSize: FONTSIZE.smaller,
    fontWeight: 'bold',
    color: COLORS.mainBlue,
    marginLeft: RFValue(13),
  },
  btnTextLogin: {
    fontSize: FONTSIZE.xlarge * 0.9,
    color: COLORS.white,
  },
  btnTextVisitor: {
    fontSize: FONTSIZE.large,
    color: COLORS.mainBlue,
  },
  btnVisitor: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.mainBlue,
    borderWidth: moderateScale(1),
    marginTop: RFValue(35),
  },
  textError: {
    color: COLORS.black,
    textAlign: 'right',
    fontSize: FONTSIZE.medium,
    fontWeight: 'bold',
    marginTop: RFValue(15),
  },
});

export default styles;
