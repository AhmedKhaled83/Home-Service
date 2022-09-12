import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Image,
  FlatList,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from '../../styles/tab/myServis.screen.style';
import {COLORS, img} from '../../utils/index';
import Feather from 'react-native-vector-icons/Feather';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {verticalScale} from 'react-native-size-matters';

const MyServisScreen = ({navigation}) => {
  const [myServis, setMyServis] = useState([
    {
      id: 1,
      image: img.carpenter,
      price: 256,
      designer: 'المصمم/إبراهيم',
      designType: 'تصميم داخلي',
      servisType: 'تصميم غرفة للأطفال 2 طفل',
    },
  ]);
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
            <Text style={styles.headerTextStyle}>خدماتي</Text>
          </View>
        </View>
        <FlatList
          data={myServis}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item, index}) => (
            <View style={styles.viewList}>
              <Image
                style={styles.imageStyle}
                source={img.carpenter}
                resizeMode="cover"
              />
              <View style={styles.containerStyle2}>
                <Text style={styles.servisTextNameStyle}>
                  تصميم غرفة للأطفال 2 طفل
                </Text>
              </View>
              <Text style={styles.priceTextStyle}>256 ج.م</Text>
              <View style={styles.containerStyle3}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('ProviderScreen');
                  }}>
                  <Image
                    source={img.carpenter}
                    style={styles.profileImageStyle}
                    resizeMode="cover"
                  />
                </TouchableOpacity>
                <Text style={styles.profileNameStyle}>المصمم/ ابراهيم</Text>
              </View>
              <Text style={styles.jobTitleStyle}>التصميم الداخلي</Text>
            </View>
          )}
        />
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            navigation.navigate('AddServices');
          }}>
          <Text style={styles.textButtonStyle}>+ اضافه خدمة جديد </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
export default MyServisScreen;
