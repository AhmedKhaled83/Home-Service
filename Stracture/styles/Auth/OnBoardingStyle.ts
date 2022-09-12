import {StyleSheet, Dimensions} from 'react-native';
import {FONTSIZE, COLORS} from '../../utils/fonts.util';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {verticalScale, scale, moderateScale} from 'react-native-size-matters';

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  color_stutsBar: {color: COLORS.white},

  Color_VisPoint: {color: COLORS.gray3},

  containerSlide: {
    width: width,
    height: RFValue(311),
    backgroundColor: COLORS.white,
    marginTop: RFValue(50),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  imgSlide: {
    width,
    height: RFValue(311),
  },
  containerFooter: {
    height: height * 0.2,
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(20),
    marginBottom: verticalScale(15),
    backgroundColor: COLORS.white,
  },
  viewPoint: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(15),
  },
  subtitle: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: FONTSIZE.large,
    lineHeight: width * 0.0833,
    textAlign: 'center',
    color: COLORS.gray2,
  },
  title: {
    fontSize: FONTSIZE.larger,
    color: COLORS.mainBlack,
    fontWeight: '400',
    lineHeight: width * 0.1249,
    textAlign: 'center',
  },
  indicator: {
    height: FONTSIZE.small * 0.9,
    width: FONTSIZE.small * 0.9,
    backgroundColor: COLORS.gold,
    marginHorizontal: 3,
    borderRadius: scale(5),
  },
  btnContinue: {
    width: width * 0.9,
    height: height < 600 ? RFValue(45) : RFValue(42),
    marginVertical: verticalScale(5),
    borderRadius: scale(8),
    backgroundColor: COLORS.mainBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContinueUp: {
    marginTop: -verticalScale(95),
  },
  textBtnContinue: {
    fontWeight: 'bold',
    fontSize: FONTSIZE.large,
    color: COLORS.white,
  },
  btnSkip: {
    width: width * 0.9,
    height: height < 600 ? RFValue(45) : RFValue(42),
    marginVertical: verticalScale(5),
    borderRadius: scale(8),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.mainBlue,
  },
  textBtnSkip: {
    fontWeight: 'bold',
    fontSize: FONTSIZE.large,
    color: COLORS.mainBlue,
  },
  animatedView: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  flatList: {
    height: height * 0.6,
    backgroundColor: COLORS.white,
  },
});

export default styles;
