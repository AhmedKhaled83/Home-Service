import {StyleSheet} from 'react-native';
import {FONTSIZE, COLORS} from '../../utils/index';

const styles = StyleSheet.create({
  color_stutsBar: {color: COLORS.mainBlue},
  container: {
    flex: 1,
    backgroundColor: COLORS.mainBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: FONTSIZE.xxlarge,
    color: COLORS.white,
    marginTop: FONTSIZE.smaller,
  },
});

export default styles;
