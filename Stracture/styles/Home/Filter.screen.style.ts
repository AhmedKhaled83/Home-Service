import {StyleSheet, Dimensions} from 'react-native';
import {FONTSIZE, COLORS} from '../../utils/fonts.util';
import {RFValue, RFPercentage} from 'react-native-responsive-fontsize';
import {scale} from 'react-native-size-matters';
const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  headerStyle: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-around',
    marginTop: height * 0.0148015,
  },
  iconViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: width * 0.01111,
    width: width * 0.0888,
    height: width * 0.0888,
    backgroundColor: COLORS.white,
    marginRight: RFValue(2),
    borderRadius: RFValue(8),
    shadowOffset: {
      width: width * 0.0111,
      height: width * 0.0111,
    },
    elevation: width * 0.0166,
    flexDirection: 'row',
  },
  arrowIconStyle: {
    color: COLORS.mainBlack,
    alignSelf: 'center',
    fontSize: FONTSIZE.medium,
    fontFamily: 'Cairo',
  },
  textViewStyle: {
    width: width * 0.8,
    height: width * 0.0888,
    lineHeight: width * 0.1023,
    alignSelf: 'center',
    justifyContent: 'center',
    marginRight: RFValue(20),
  },
  headerTextStyle: {
    color: COLORS.mainBlue,
    fontSize: FONTSIZE.xxlarge,
    textAlign: 'center',
    fontFamily: 'Cairo',
  },
  buttonStyle: {
    width: width * 0.9,
    height: height < 600 ? RFValue(48) : RFValue(42),
    backgroundColor: COLORS.mainBlue,
    borderRadius: RFValue(8),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: RFValue(10),
    alignSelf: 'center',
  },

  skipButtonStyle: {
    width: width * 0.9,
    height: height < 600 ? RFValue(48) : RFValue(42),
    backgroundColor: COLORS.white,
    borderRadius: RFValue(8),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: RFValue(8),
    alignSelf: 'center',
    // borderWidth: 1,
    // borderColor: COLORS.mainBlue,
  },
  textButtonStyle: {fontSize: FONTSIZE.xlarge * 0.9, color: COLORS.white},
  textStyle: {
    textAlign: 'center',
    fontSize: FONTSIZE.smaller,
    fontFamily: 'Cairo',

    color: COLORS.gray4,
    marginTop: RFValue(8),
  },
  containerStyle2: {
    marginTop: width * 0.0222,
    marginLeft: RFValue(15),
  },

  unSelectItemStyle: {
    borderRadius: RFValue(8),
    backgroundColor: COLORS.white,
    marginLeft: width * 0.0111,
    marginBottom: RFValue(5),
    shadowOffset: {
      width: width * 0.0111,
      height: width * 0.0111,
    },
  },
  imageStyle: {
    width: width * 0.4222,
    alignSelf: 'center',
    height: height * 0.177619,
    borderRadius: RFValue(8),
  },
  containerStyle3: {
    width: width * 0.4222,
    height: height * 0.04736,
  },
  viewPlusIconStyle: {
    position: 'absolute',
    marginTop: height * 0.018955,
    backgroundColor: COLORS.yellow,
    marginLeft: width * 0.3472,
    borderRadius: width * 0.0277,
    width: width * 0.05555,
    height: width * 0.05555,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusIconStyle: {
    fontSize: FONTSIZE.medium,
    color: COLORS.white,
    alignSelf: 'center',
    justifyContent: 'center',
    fontFamily: 'Cairo',
  },
});
export default styles;
