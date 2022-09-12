import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {COLORS, FONTSIZE, icons, img} from '../utils/index';
import styles from '../styles/tab/Gallery.screen.style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Card} from 'react-native-paper';
import {scale} from 'react-native-size-matters';

function GalleryList({navigation, data, setData}) {
  const onPressHandler = id => {
    let renderData = [...data];
    for (let data of renderData) {
      if (data.id == id) {
        data.selected = data.selected == null ? true : !data.selected;
        break;
      }
    }
    setData(renderData);
  };
  return (
    <FlatList
      numColumns={2}
      data={data}
      keyExtractor={item => item.id.toString()}
      showsHorizontalScrollIndicator={false}
      renderItem={({item, index}) => (
        <View style={styles.containerStyle2}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ServiceDetails', {
                item: item,
              });
            }}>
            <Card style={styles.cardStyle}>
              <ImageBackground
                borderRadius={scale(10)}
                source={item.image}
                style={styles.imageStyle}>
                <TouchableOpacity
                  style={[styles.btnHeart]}
                  onPress={() => onPressHandler(item.id)}>
                  {item.selected == true ? (
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
                <View style={styles.viewTextStyle}>
                  <Text style={styles.textStyle}>{item.type}</Text>
                </View>
              </ImageBackground>
            </Card>
          </TouchableOpacity>
        </View>
      )}
    />
  );
}

export default GalleryList;
