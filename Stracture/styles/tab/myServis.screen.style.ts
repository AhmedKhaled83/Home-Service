import {StyleSheet, Dimensions} from 'react-native';
import {FONTSIZE, COLORS} from '../../utils/fonts.util';
import {RFValue, RFPercentage} from 'react-native-responsive-fontsize';
const {width, height} = Dimensions.get('screen');
import {scale, moderateScale, verticalScale} from 'react-native-size-matters';
const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerStyle: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-around',
    marginTop: verticalScale(10),
    marginBottom: verticalScale(20),
  },

  viewIcon: {
    width: scale(32),
    height: scale(32),
    borderColor: COLORS.mainBlack,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(16),
    marginRight: -width * 0.05,
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
    color: COLORS.mainBlack,
    fontSize: FONTSIZE.xxlarge,
    textAlign: 'center',
    fontFamily: 'Cairo',
    fontWeight: '500',
  },
  imageStyle: {
    width: width * 0.9111,
    alignSelf: 'center',
    height: height * 0.28567,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  containerStyle2: {
    marginTop: width * 0.0111,
    height: height * 0.041444,
  },
  servisTextNameStyle: {
    color: COLORS.mainBlack,
    fontSize: FONTSIZE.smaller * 1.1,
    lineHeight: width * 0.07222,
    textAlign: 'left',
    marginLeft: width * 0.02,
    fontFamily: 'Cairo',
  },
  priceTextStyle: {
    color: COLORS.mainBlue,
    fontSize: FONTSIZE.xlarge,
    width: width * 0.1888,
    marginLeft: width * 0.68,
    textAlign: 'right',
    lineHeight: width * 0.1027,
    marginTop: -verticalScale(25),
    fontFamily: 'Cairo',
  },
  profileImageStyle: {
    width: width * 0.06667,
    height: height * 0.03554,
    borderRadius: width * 0.03333,
  },
  profileNameStyle: {
    fontSize: FONTSIZE.medium,
    color: COLORS.mainBlack,
    marginLeft: scale(10),
    fontFamily: 'Cairo',
  },
  containerStyle3: {
    flexDirection: 'row',
    //marginTop: 10,
    //paddingHorizontal: 20,
    alignItems: 'center',
    height: height * 0.03848,
    marginLeft: width * 0.02,
  },
  buttonStyle: {
    width: width * 0.9111,
    height: height < 600 ? RFValue(48) : RFValue(42),
    backgroundColor: '#3A82F8',
    borderRadius: RFValue(8),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: RFValue(10),
    alignSelf: 'center',
  },
  viewList: {
    width: '90%',
    backgroundColor: COLORS.white,
    alignSelf: 'center',
    elevation: 1,
    marginBottom: verticalScale(10),
    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    borderRadius: scale(5),
  },
  textButtonStyle: {
    fontSize: FONTSIZE.xlarge * 0.9,
    color: COLORS.white,
    fontFamily: 'Cairo',
  },
  jobTitleStyle: {
    color: COLORS.gray2,
    fontSize: FONTSIZE.smaller,
    marginTop: verticalScale(3),
    height: height * 0.0355,
    marginLeft: width * 0.02,
    fontFamily: 'Cairo',
  },
});
export default styles;
