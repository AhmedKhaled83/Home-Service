import {StyleSheet, Dimensions} from 'react-native';
import {FONTSIZE, COLORS} from '../../utils/index';
import {RFValue, RFPercentage} from 'react-native-responsive-fontsize';
const {width, height} = Dimensions.get('screen');
import {scale, moderateScale, verticalScale} from 'react-native-size-matters';
const styles = StyleSheet.create({
  color_stutsBar: {color: COLORS.white},
  color_textInput: {color: COLORS.gray2},
  black2: {color: COLORS.black2},
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
    marginBottom: verticalScale(10),
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
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(16),
    marginRight: -width * 0.09,
  },
  text: {
    fontSize: FONTSIZE.large,
    fontWeight: '400',
    color: COLORS.gray1,
    marginBottom: verticalScale(10),
    fontFamily: 'Cairo',
  },
  containerCalender: {
    marginTop: verticalScale(15),
  },
  footer: {
    marginTop: verticalScale(20),
  },
  ContainerHour: {
    width: '100%',
    height: scale(150),
    borderRadius: scale(10),
    borderWidth: 1,
    borderColor: '#F3B052',
    marginTop: verticalScale(10),
    padding: scale(10),
  },
  day: {
    fontSize: FONTSIZE.xlarge,
    color: COLORS.mainBlue,
    fontFamily: 'Cairo',
  },
  map: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: verticalScale(15),
    justifyContent: 'space-between',
  },
  itemDone: {
    width: scale(60),
    height: scale(30),
    borderRadius: 5,
    backgroundColor: COLORS.blue,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: verticalScale(14),
  },
  item: {
    borderWidth: 1,
    borderColor: COLORS.gray1,
    backgroundColor: COLORS.white,
  },
  textDone: {
    color: COLORS.white,
    fontFamily: 'Cairo',
  },
  text2: {
    color: COLORS.gray1,
    fontFamily: 'Cairo',
  },
});

export default styles;