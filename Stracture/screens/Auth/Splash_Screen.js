import React from 'react';
import {View, Image, StatusBar, Text} from 'react-native';
import {img} from '../../utils/index';

import styles from '../../styles/Auth/splashStyle';

const Splash_Screen = () => {
  return (
    <>
      <StatusBar
        backgroundColor={styles.color_stutsBar.color}
        barStyle={'light-content'}
      />
      <View style={styles.container}>
        <Image source={img.splash} resizeMode={'contain'} />
        <Text style={styles.text}>MONO</Text>
      </View>
    </>
  );
};

export default Splash_Screen;
