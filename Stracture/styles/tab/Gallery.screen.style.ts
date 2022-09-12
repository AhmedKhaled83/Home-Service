import {StyleSheet, Dimensions} from 'react-native';
import {FONTSIZE, COLORS} from '../../utils/fonts.util';
import {RFValue, RFPercentage} from 'react-native-responsive-fontsize';
const {width, height} = Dimensions.get('screen');
import {scale, moderateScale, verticalScale} from 'react-native-size-matters';
const styles = StyleSheet.create({
  color_Heart: {color: COLORS.mainBlue},

  containerStyle: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  headerStyle: {
    width: width * 0.275,
    height: height * 0.0444,
    marginTop: height * 0.01184,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTextStyle: {
    fontSize: FONTSIZE.xlarge,
    color: COLORS.black,
    fontWeight: '500',
    lineHeight: height * 0.0444,
    fontFamily: 'Cairo',
  },
  containerStyle2: {marginTop: width * 0.0222, marginLeft: width * 0.04166},
  cardStyle: {
    borderRadius: width * 0.0222,
    backgroundColor: COLORS.white,
    marginLeft: width * 0.0111,
    marginBottom: height * 0.0074,
    shadowOffset: {
      width: width * 0.0111,
      height: width * 0.0111,
    },
  },
  imageStyle: {
    width: width * 0.4222,
    alignSelf: 'center',
    height: scale(220),
    borderRadius: width * 0.0222,
  },
  viewTextStyle: {
    width: width * 0.4222,
    height: height * 0.047365,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.8,
    position: 'absolute',
    bottom: 0,
  },
  textStyle: {
    fontSize: FONTSIZE.small,
    color: COLORS.mainBlack,
    opacity: 1,
    fontFamily: 'Cairo',
  },
  tabStyle: {
    backgroundColor: COLORS.white,
    width: 'auto',
  },
  buttonStyle: {
    width: width * 0.1222,
    height: width * 0.1222,
    borderRadius: width * 0.0611,
    backgroundColor: COLORS.mainBlue,
    position: 'absolute',
    marginTop: height * 0.76228,
    marginLeft: width * 0.08333,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconStyle: {
    color: COLORS.white,
    fontSize: FONTSIZE.medium,
    fontWeight: 'bold',
  },
  item: {
    width: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: scale(11),
    shadowColor: 'black',
    shadowOpacity: 0.9,
    shadowRadius: 5,
    padding: scale(8),
    shadowOffset: {width: 56, height: 13},
  },
  btnHeart: {
    alignSelf: 'flex-end',
    margin: scale(10),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,.5)',
    width: width * 0.08888,
    height: height * 0.047365,
    borderRadius: width * 0.0222,
  },
});
export default styles;
