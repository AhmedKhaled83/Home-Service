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
import styles from '../../styles/profile/MyFavorites.screen.style';
import {COLORS, FONTSIZE, icons, img} from '../../utils/index';
import Feather from 'react-native-vector-icons/Feather';

const MyFavoritesScreen = ({navigation}) => {
  const [myFavorites, setMyFavorites] = useState([
    {
      id: 1,
      image: img.carpenter,
      profileImage: img.carpenter,
      price: 256,
      designer: 'المصمم/إبراهيم',
      designType: 'تصميم داخلي',
      servisType: 'تصميم غرفة للأطفال 2 طفل',
    },
  ]);

  const delet = id => {
    const fav = myFavorites.filter(item => item.id !== id);
    setMyFavorites(fav);
  };

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
            <Text style={styles.headerTextStyle}>المفضله</Text>
          </View>
        </View>
        <FlatList
          data={myFavorites}
          keyExtractor={(item, index) => index}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <View>
              <View>
                <Image source={item.image} style={styles.imageStyle} />
                <TouchableOpacity
                  onPress={() => delet(item.id)}
                  style={styles.favoriteButtonStyle}>
                  <AntDesign
                    name="heart"
                    color={COLORS.mainBlue}
                    size={FONTSIZE.xxlarge}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.containerStyle2}>
                <Text style={styles.servisTextNameStyle}>
                  {item.servisType}
                </Text>
              </View>
              <Text style={styles.priceTextStyle}>
                {item.price}
                {'ج.م'}
              </Text>

              <View style={styles.containerStyle3}>
                <Image
                  source={item.profileImage}
                  style={styles.profilePhotoStyle}
                  resizeMode="cover"
                />
                <Text style={styles.designerTextStyle}>{item.designer}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.jobTitleStyle}>{item.designType}</Text>
                <TouchableOpacity style={styles.reservationButtonStyle}>
                  <Text style={styles.textStyle}>حجز</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>
    </>
  );
};
export default MyFavoritesScreen;
