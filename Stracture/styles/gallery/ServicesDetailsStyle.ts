import {StyleSheet, Dimensions} from 'react-native';
import {FONTSIZE, COLORS} from '../../utils/index';
import {RFValue, RFPercentage} from 'react-native-responsive-fontsize';
const {width, height} = Dimensions.get('screen');
import {scale, moderateScale, verticalScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  color_stutsBar: {color: COLORS.white},
  color_textInput: {color: COLORS.gray2},
  color_Heart: {color: COLORS.mainBlue},
  container: {
    backgroundColor: COLORS.white,
    paddingHorizontal: RFValue(15),
    paddingTop: RFValue(25),
    flex: 1,
  },
  containerHeader: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  header: {
    color: COLORS.mainBlack,
    fontSize: FONTSIZE.xxlarge,
    fontWeight: '500',
    fontFamily: 'Cairo',
  },
  imgArrow: {
    tintColor: COLORS.mainBlack,
  },
  imgBack: {
    width: '100%',
    height: height * 0.2,
    marginTop: verticalScale(45),
  },
  containerText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textEllipse: {
    color: COLORS.gray4,
    fontSize: FONTSIZE.smaller,
    marginLeft: scale(8),
    fontFamily: 'Cairo',
  },
  imgUser: {
    width: scale(35),
    height: scale(35),
  },
  btnHeart: {
    alignSelf: 'flex-end',
    margin: scale(10),
    backgroundColor: 'rgba(255,255,255,.5)',
    width: width * 0.08888,
    height: height * 0.047365,
    borderRadius: width * 0.0222,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: verticalScale(16),
  },
  text: {
    fontSize: FONTSIZE.medium,
    fontWeight: '500',
    color: COLORS.gray1,
    fontFamily: 'Cairo',
  },

  containerRate: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(5),
  },
  containerMiddle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerUser: {
    flexDirection: 'row',
    width: '42%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text2: {
    fontSize: FONTSIZE.medium,
    fontWeight: '400',
    color: COLORS.gray1,
    fontFamily: 'Cairo',
    marginLeft: width * 0.02,
  },

  money: {
    fontSize: FONTSIZE.xxlarge,
    fontWeight: '500',
    color: COLORS.mainBlue,
    marginTop: verticalScale(20),
    fontFamily: 'Cairo',
  },

  viewBtn: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: RFValue(42),
    backgroundColor: COLORS.mainBlue,
    borderRadius: RFValue(8),
    marginTop: RFValue(170),
    paddingHorizontal: scale(10),
  },
  btnTextbook: {
    fontSize: FONTSIZE.medium,
    color: COLORS.white,
    fontFamily: 'Cairo',
  },
});

export default styles;
