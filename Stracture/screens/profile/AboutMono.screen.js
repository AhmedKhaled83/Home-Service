import React, {useState} from 'react';
import {Text, View, TouchableOpacity, StatusBar, Image} from 'react-native';
import styles from '../../styles/profile/AboutMono.screen.style';
import {COLORS, icons, img} from '../../utils/index';
import Feather from 'react-native-vector-icons/Feather';

const AboutMonoScreen = ({navigation}) => {
  const [text, setText] = useState(
    'للنص يمكن تغيره مثال للنص يمكن تغيره مثال للنص يمكن تغيره مثال للنص يمكن تغيره مثال',
  );
  return (
    <>
      <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />
      <View style={styles.containerStyle}>
        <View style={styles.headerStyle}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={styles.viewIcon}>
            <Feather name="chevron-right" color={COLORS.mainBlack} size={25} />
          </TouchableOpacity>
          <View style={styles.textViewStyle}>
            <Text style={styles.headerTextStyle}>عن مونو</Text>
          </View>
        </View>

        <Image
          source={icons.logo}
          style={styles.MonoIconStyle}
          resizeMode="contain"
        />
        {/* <Image
          source={img.MONO}
          style={styles.MonoTextStyle}
          resizeMode="contain"
        /> */}

        <View style={styles.containerStyle2}>
          <View style={styles.iconViewStyle2}>
            <Image source={icons.whatsApp} />
          </View>
          <View style={styles.iconViewStyle2}>
            <Image source={icons.youtube} />
          </View>
          <View style={styles.iconViewStyle2}>
            <Image source={icons.instagram} />
          </View>
          <View style={styles.iconViewStyle2}>
            <Image source={icons.facebook2} />
          </View>
        </View>

        <View style={styles.containerStyle3}>
          <Text style={styles.textStyle}>{text}</Text>
        </View>
      </View>
    </>
  );
};
export default AboutMonoScreen;
