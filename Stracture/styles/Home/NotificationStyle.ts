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
    marginBottom: verticalScale(25),
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
    width: scale(32),
    height: scale(32),
    borderColor: COLORS.mainBlack,
    borderWidth: scale(1),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(16),
    marginRight: -width * 0.091,
  },
  ellipse: {
    position: 'absolute',
    zIndex: 1000,
    marginLeft: scale(6),
    marginTop: -verticalScale(5),
  },
  img: {
    width: scale(100),
    height: scale(100),
    borderRadius: scale(10),
  },
  containerList: {
    marginTop: verticalScale(19),
  },
  container2: {
    backgroundColor: COLORS.light,
    width: '100%',
    height: scale(100),
    flexDirection: 'row',
    borderRadius: scale(10),
  },
  container3: {
    paddingHorizontal: scale(10),
    width: '70%',
  },
  container4: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: verticalScale(10),
    marginBottom: verticalScale(5),
  },
  status: {
    fontWeight: '400',
    fontSize: FONTSIZE.large,
    color: COLORS.mainBlack,
    fontFamily: 'Cairo',
  },
  time: {
    fontWeight: '400',
    fontSize: FONTSIZE.small,
    color: COLORS.mainBlack,
    fontFamily: 'Cairo',
  },
  order: {
    fontWeight: '400',
    fontSize: FONTSIZE.smaller,
    color: COLORS.mainBlack,
    lineHeight: scale(22),
    fontFamily: 'Cairo',
  },
  viewList: {
    marginBottom: verticalScale(20),
  },
});

export default styles;
