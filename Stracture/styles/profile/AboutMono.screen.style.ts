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
    marginTop: verticalScale(10),
  },
  textViewStyle: {
    width: width * 0.8,
    height: width * 0.0888,
    lineHeight: width * 0.1023,
    alignSelf: 'center',
    justifyContent: 'center',
    marginRight: RFValue(20),
    marginTop: -height * 0.0444,
  },
  headerTextStyle: {
    color: COLORS.mainBlack,
    fontSize: FONTSIZE.xxlarge,
    textAlign: 'center',
    fontFamily: 'Cairo',
    fontWeight: '500',
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
  MonoIconStyle: {
    width: scale(100),
    height: scale(80),
    marginTop: height * 0.01184,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  MonoTextStyle: {
    width: width * 0.2555,
    height: height * 0.0488,
    lineHeight: height * 0.04884,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: height * 0.01184,
  },
  containerStyle2: {
    flexDirection: 'row',
    marginTop: height * 0.03552,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconViewStyle2: {
    width: width * 0.0888,
    height: width * 0.0888,
    borderRadius: width * 0.02777,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    marginLeft: width * 0.0333,
    justifyContent: 'center',
    shadowOffset: {
      width: width * 0.0111,
      height: width * 0.0111,
    },
    elevation: width * 0.0166,
  },
  containerStyle3: {
    width: width * 0.91111,
    marginTop: height * 0.03552,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  textStyle: {
    fontSize: FONTSIZE.large,
    textAlign: 'center',
    color: '#4f5050',
    fontFamily: 'Cairo',
  },
});
export default styles;
