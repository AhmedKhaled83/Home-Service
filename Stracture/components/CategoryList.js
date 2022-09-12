import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  Dimensions,
} from 'react-native';
import StarRating from 'react-native-star-rating-widget';
import {COLORS, FONTSIZE, icons, img} from '../utils/index';
import styles from '../styles/Home/Category.screen.style';
import AntDesign from 'react-native-vector-icons/AntDesign';

const {width, height} = Dimensions.get('screen');

const CategoryList = ({
  data,
  offers,
  galleryService,
  navigation,
  onPressHandler,
  onPressHandler2,
  rating,
  setRating,
}) => (
  <ScrollView>
    <>
      <View style={styles.containerStyle4}>
        <Text style={styles.textStyle}>الاكثر شهرة</Text>
        <Text style={styles.textStyle2}>تصنيف</Text>
        <TouchableOpacity>
          <Image
            source={icons.filter}
            style={styles.filter}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <View style={{padding: width * 0.02777}}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <>
              <View style={{flexDirection: 'row'}}>
                <Image source={item.image} style={styles.image2} />
                <View style={{marginLeft: width * 0.02222}}>
                  <Text style={styles.text3}>{item.servisType}</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      width: width * 0.23,
                    }}>
                    <Image source={icons.ellipse} resizeMode="contain" />
                    <Text style={styles.text2}>{item.designType}</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginLeft: width * 0.01388,
                    }}>
                    <Image
                      source={item.profileImage}
                      style={styles.image}
                      resizeMode="contain"
                    />
                    <Text style={styles.text}>{item.designer}</Text>
                  </View>
                  <StarRating
                    rating={rating}
                    onChange={setRating}
                    color={'rgba(255,201,11,1)'}
                    starStyle={styles.star}
                    enableHalfStar={true}
                    starSize={FONTSIZE.large}
                    maxStars={5}
                  />
                </View>
                <View>
                  <Text style={styles.priceText}>
                    {item.price}
                    {'ج.م'}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('ServicesDetailsMore', {
                        item: item,
                      });
                    }}
                    style={[styles.reservationButtonStyle, {marginLeft: 0}]}>
                    <Text style={styles.textStyle3}>حجز</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </>
          )}
        />
      </View>
      <View style={styles.containerStyle4}>
        <Text style={styles.textStyle}>العروض و الباقات</Text>
        <TouchableOpacity>
          <Text style={styles.textStyle2}>عرض الكل</Text>
        </TouchableOpacity>
      </View>

      <View style={{padding: width * 0.02777}}>
        <FlatList
          data={offers}
          keyExtractor={(item, index) => index}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <>
              <View style={styles.containerStyle3}>
                <View>
                  <Image source={item.image} style={styles.imageStyle2} />
                  <TouchableOpacity
                    style={[styles.favoriteButtonStyle]}
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
                  <View style={styles.containerStyle5}>
                    <Text style={styles.servisTextNameStyle}>
                      {item.servisType}
                    </Text>
                    <Text style={styles.priceTextStyle}>
                      {item.price}
                      {'ج.م'}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Image source={icons.ellipse} resizeMode="contain" />
                    <Text style={styles.jobTitleStyle}>{item.designType}</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <View style={styles.containerStyle6}>
                      <Image
                        source={item.image}
                        style={styles.profilePhotoStyle}
                        resizeMode="contain"
                      />
                      <Text style={styles.designerTextStyle}>
                        {item.designer}
                      </Text>
                    </View>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('ServicesDetailsMore', {
                          item: item,
                        });
                      }}
                      style={styles.reservationButtonStyle}>
                      <Text style={styles.textStyle3}>حجز</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </>
          )}
        />
      </View>
      <View style={styles.containerStyle4}>
        <Text style={styles.textStyle}>معرض الأعمال</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('GalleryStack');
          }}>
          <Image source={icons.filter2} resizeMode="contain" />
        </TouchableOpacity>
      </View>

      <View style={{padding: width * 0.02777}}>
        <FlatList
          data={galleryService}
          numColumns={2}
          keyExtractor={(item, index) => index}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <>
              <TouchableOpacity style={styles.btnStyle}>
                <Image
                  source={item.image}
                  resizeMode="contain"
                  style={styles.galleryImg}
                />
                <TouchableOpacity
                  style={[styles.favoriteButtonStyle, styles.heart]}
                  onPress={() => onPressHandler2(item.id)}>
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
                <View style={styles.viewContainer}>
                  <Text style={styles.textStyle8}>{item.servisType}</Text>
                </View>
              </TouchableOpacity>
            </>
          )}
        />
      </View>
    </>
  </ScrollView>
);
export default CategoryList;
