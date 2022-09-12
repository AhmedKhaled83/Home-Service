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
  },
  header: {
    width: '100%',
    color: COLORS.mainBlack,
    fontSize: FONTSIZE.xxlarge,
    fontWeight: 'bold',
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
  viewList: {
    marginTop: verticalScale(30),
    height: height * 0.75,
  },
  containerList: {
    flexDirection: 'row',
    marginBottom: verticalScale(20),
    backgroundColor: COLORS.white,
    width: '100%',
    height: scale(88),
    shadowColor: COLORS.mainBlack,
    shadowOpacity: 0.5,
    shadowOffset: {
      width: scale(10),
      height: verticalScale(10),
    },
    elevation: 2,
    alignItems: 'center',
    paddingHorizontal: verticalScale(10),
  },
  title: {
    color: COLORS.mainBlack,
    fontSize: FONTSIZE.smaller,
    fontWeight: '400',
    marginLeft: width * 0.03,
    width: '85%',
    lineHeight: scale(26),
    fontFamily: 'Cairo',
  },
  pen: {
    tintColor: COLORS.gray4,
    marginTop: verticalScale(40),
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    width: '37%',
    justifyContent: 'space-between',
  },
  textBtn: {
    color: COLORS.mainBlue,
    fontWeight: '500',
    fontSize: FONTSIZE.medium,
    fontFamily: 'Cairo',
  },
  plus: {
    tintColor: COLORS.mainBlue,
    width: scale(14),
    height: scale(14),
  },
});
export default styles;
