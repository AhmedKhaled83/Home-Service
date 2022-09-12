import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  ScrollView,
  ImageBackground,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import {Rating, AirbnbRating} from 'react-native-ratings';
import {icons, img, COLORS, FONTSIZE} from '../../utils/index';
import styles from '../../styles/gallery/ServicesDetailsStyle';
import Share from 'react-native-share';
import AntDesign from 'react-native-vector-icons/AntDesign';

function ServiceDetails({navigation, route}) {
  const [item, setItem] = useState(route.params.item);
  const [like, setLike] = useState(item.like);
  const [rating, setRating] = useState(3.5);
  const [data, setData] = useState(item);

  const myShare = async () => {
    const options = {
      // message
      message: 'this is a test message',
      //  link app
      url: 'https://reactnative.dev/docs/share',
      // img => base64 encoded
    };
    try {
      const shareResponse = await Share.open(options);
      console.log(JSON.stringify(shareResponse));
    } catch (e) {
      console.log(e);
    }
  };

  const likeFun = () => {
    let list = data;
    list.like = !like;
    setLike(list.like);
    setItem(list);
  };

  return (
    <>
      <StatusBar
        backgroundColor={styles.color_stutsBar.color}
        barStyle={'dark-content'}
      />
      <View style={styles.container}>
        <ScrollView styles={{flex: 1}} showsVerticalScrollIndicator={false}>
          {/* header */}
          <View style={styles.containerHeader}>
            <TouchableOpacity
              style={styles.viewArrow}
              onPress={() => {
                // navigation.navigate()
                myShare();
              }}>
              <Image source={icons.share} resizeMode="contain" />
            </TouchableOpacity>
            <Text style={styles.header}>خدمة</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
              style={styles.viewIcon}>
              <Feather
                name="chevron-right"
                color={COLORS.mainBlack}
                size={25}
              />
            </TouchableOpacity>
          </View>
          {/* header */}

          {/* backgroundImage */}
          <ImageBackground
            resizeMode="cover"
            source={data.image}
            borderRadius={10}
            style={styles.imgBack}>
            <TouchableOpacity
              style={styles.btnHeart}
              onPress={() => {
                likeFun();
              }}>
              {item.like ? (
                <AntDesign
                  name="heart"
                  color={COLORS.mainBlue}
                  size={FONTSIZE.xxlarge}
                />
              ) : (
                <AntDesign
                  name="hearto"
                  color={COLORS.mainBlue}
                  size={FONTSIZE.xxlarge}
                />
              )}
            </TouchableOpacity>
          </ImageBackground>
          {/* backgroundImage */}

          {/*  */}
          <View style={styles.containerView}>
            <Text style={styles.text}>{data.type}</Text>
            <View style={styles.containerText}>
              <Image resizeMode="contain" source={icons.ellipse} />
              <Text style={styles.textEllipse}>التصميم الداخلي</Text>
            </View>
          </View>

          {/*  */}
          <View style={styles.containerMiddle}>
            <View style={styles.containerUser}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('ProviderScreen');
                }}>
                <Image
                  source={img.user}
                  resizeMode="cover"
                  style={styles.imgUser}
                />
              </TouchableOpacity>

              <Text style={styles.text2}>{data.designer}</Text>
            </View>
            <Text style={styles.money}>{data.salary} ج.م</Text>
          </View>

          {/*  */}

          {/* rating */}
          <View style={styles.containerRate}>
            <Rating
              type="custom"
              imageSize={15}
              ratingCount={5}
              startingValue={rating}
              onFinishRating={rating => {
                setRating(rating);
              }}
              readonly={true}
              ratingColor="#FFC90B"
              ratingBackgroundColor="#AEAEB2"
            />
          </View>
          {/* button */}

          <TouchableOpacity style={styles.viewBtn}>
            <Text style={styles.btnTextbook}>عرض المزيد</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </>
  );
}

export default ServiceDetails;
