import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Image,
  ScrollView,
  TextInput,
  FlatList,
  Dimensions,
  ImageBackground,
} from 'react-native';
const {width, height} = Dimensions.get('screen');
import StarRating from 'react-native-star-rating-widget';
import {Card} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from '../../styles/tab/Home.screen.style';
import {COLORS, FONTSIZE, icons, img} from '../../utils/index';
import {scale} from 'react-native-size-matters';

const HomeScreen = ({navigation}) => {
  const [search, setSearch] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [allData, AllData] = useState([
    {
      id: 1,
      image: img.bathroom,
      type: 'تصميم الحمام',
    },
    {
      id: 2,
      image: img.kitchen,
      type: 'تصميم المطابخ',
    },
    {
      id: 3,
      image: img.clean,
      type: 'التنظيف',
    },
    {
      id: 4,
      image: img.paint,
      type: 'النقاشة',
    },
    {
      id: 5,
      image: img.electric,
      type: 'الكهرباء',
    },
    {
      id: 6,
      image: img.garden,
      type: 'المناظر الطبيعية والحدائق',
    },
    {
      id: 7,
      image: img.rectangle2,
      type: 'التصميم الداخلي',
    },
  ]);
  const [offers, setOffers] = useState([
    {
      id: 1,
      image: img.carpenter,
      price: 256,
      designer: 'المصمم/إبراهيم',
      designType: 'تصميم داخلي',
      servisType: 'تصميم غرفة للأطفال 2 طفل',
      fav: false,
      specialist: 'نجار',
    },
  ]);
  const [rating, setRating] = useState(4);
  const [differentServise, setDifferentServise] = useState([
    {
      id: 1,
      image: img.carpenter,
      price: 256,
      profileImage: img.carpenter,
      designer: 'المصمم/إبراهيم',
      designType: 'تصميم داخلي',
      servisType: 'تصميم غرفة للأطفال ',
      specialist: 'نجار',
    },
    {
      id: 2,
      image: img.carpenter,
      price: 256,
      profileImage: img.carpenter,
      designer: 'المصمم/إبراهيم',
      designType: 'تصميم داخلي',
      servisType: 'تصميم غرفة للأطفال ',
      specialist: 'نجار',
    },
    {
      id: 3,
      image: img.carpenter,
      price: 256,
      profileImage: img.carpenter,
      designer: 'المصمم/إبراهيم',
      designType: 'تصميم داخلي',
      servisType: 'تصميم غرفة للأطفال ',
      specialist: 'نجار',
    },
    {
      id: 4,
      image: img.carpenter,
      price: 256,
      profileImage: img.carpenter,
      designer: 'المصمم/إبراهيم',
      designType: 'تصميم داخلي',
      servisType: 'تصميم غرفة للأطفال ',
      specialist: 'نجار',
    },
  ]);

  const [galleryService, setGalleryService] = useState([
    {
      id: 1,
      image: img.design1,
      price: 256,
      profileImage: img.design1,
      designer: 'المصمم/إبراهيم',
      designType: 'تصميم داخلي',
      servisType: 'تصميم غرفة معيشة ',
      fav: false,
      specialist: 'نجار',
    },
    {
      id: 2,
      image: img.design1,
      price: 256,
      profileImage: img.carpenter,
      designer: 'المصمم/إبراهيم',
      designType: 'تصميم داخلي',
      servisType: 'تصميم غرفة معيشة ',
      fav: false,
      specialist: 'نجار',
    },
    {
      id: 3,
      image: img.design1,
      price: 256,
      profileImage: img.carpenter,
      designer: 'المصمم/إبراهيم',
      designType: 'تصميم داخلي',
      servisType: 'تصميم غرفة معيشة ',
      fav: false,
      specialist: 'نجار',
    },
    {
      id: 4,
      image: img.design1,
      price: 256,
      profileImage: img.carpenter,
      designer: 'المصمم/إبراهيم',
      designType: 'تصميم داخلي',
      servisType: 'تصميم غرفة معيشة ',
      fav: false,
      specialist: 'نجار',
    },
    {
      id: 5,
      image: img.design1,
      price: 256,
      profileImage: img.carpenter,
      designer: 'المصمم/إبراهيم',
      designType: 'تصميم داخلي',
      servisType: 'تصميم غرفة معيشة ',
      fav: false,
      specialist: 'نجار',
    },
    {
      id: 6,
      image: img.design1,
      price: 256,
      profileImage: img.carpenter,
      designer: 'المصمم/إبراهيم',
      designType: 'تصميم داخلي',
      servisType: 'تصميم غرفة معيشة ',
      fav: false,
      specialist: 'نجار',
    },
  ]);

  const onPressHandler = id => {
    let renderData = [...offers];
    for (let data of renderData) {
      if (data.id == id) {
        data.selected = data.selected == null ? true : !data.selected;
        break;
      }
    }
    setOffers(renderData);
  };
  const onPressHandler2 = id => {
    let renderData = [...galleryService];
    for (let data of renderData) {
      if (data.id == id) {
        data.selected = data.selected == null ? true : !data.selected;
        break;
      }
    }
    setGalleryService(renderData);
  };
  return (
    <>
      <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />
      <View style={styles.containerStyle}>
        <View style={styles.headerStyle}>
          <TouchableOpacity style={styles.buttonIconStyle} onPress={() => {}}>
            <Image
              source={icons.message}
              style={[styles.iconStyle, {marginLeft: -width * 0.0666}]}
            />
          </TouchableOpacity>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              style={styles.ViewSearchStyle}
              onPress={() => {
                navigation.navigate('Search');
              }}>
              <AntDesign name={'search1'} size={18} color={COLORS.gray2} />
              <Text style={styles.textSearch}>ابحث عن ما تريده</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.buttonIconStyle}
            onPress={() => {
              navigation.navigate('Notification');
            }}>
            <Image
              source={icons.Bell}
              style={[styles.iconStyle, {marginLeft: -width * 0.05555}]}
            />
          </TouchableOpacity>
        </View>

        <ScrollView>
          <>
            <View style={styles.backgroundImageStyle}>
              <ImageBackground source={img.offer} style={styles.backgroundImageStyle} borderRadius={scale(10)}>
              <Image source={img.rectangle3} style={styles.header_image} resizeMode={'stretch'}/>
              <View style={styles.view}>
                <Text style={styles.text4}>خصم</Text>
                {/* <Text style={styles.textStyle4}>%50</Text> */}
                <Image source={img.presentage} style={{alignSelf:"flex-end",marginRight:scale(10),}}/>
              </View>
              <Text style={styles.textStyle5}>علي</Text>
              <Text style={styles.textStyle6}>تنظيف بيتك بالكامل</Text>
              </ImageBackground>
            </View>
            <View style={styles.containerStyle2}>
              <Text style={styles.textStyle}>اختر خدمتك بسهولة</Text>
              <TouchableOpacity>
                <Text style={styles.textStyle2}>عرض الكل</Text>
              </TouchableOpacity>

            </View>
            <View style={{padding: width * 0.02777}}>
              <FlatList
                data={allData}
                horizontal={true}
                keyExtractor={(item, index) => index}
                showsHorizontalScrollIndicator={true}
                renderItem={({item}) => (
                  <>
                    <View style={styles.containerStyle3}>
                      <TouchableOpacity
                      activeOpacity={0.8}
                        onPress={() => {
                          navigation.navigate('CategoryScreen', {
                            title: item.type,
                          });
                        }}
                        style={styles.viewItemStyle}>
                        <Card style={{backgroundColor:"#fff",borderTopStartRadius:scale(10),borderTopEndRadius:scale(10)}}>
                          <Image
                            style={styles.imageStyle}
                            source={item.image}
                          />
                          <Text style={styles.textStyle7}>{item.type}</Text>
                        </Card>
                      </TouchableOpacity>
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
            <View style={{paddingHorizontal: width * 0.02777}}>
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
                          <Text style={styles.jobTitleStyle}>
                            {item.designType}
                          </Text>
                        </View>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                          }}>
                          <View style={styles.containerStyle6}>
                            <TouchableOpacity
                              onPress={() => {
                                navigation.navigate('ProviderScreen');
                              }}>
                              <Image
                                source={item.image}
                                style={styles.profilePhotoStyle}
                                resizeMode="contain"
                              />
                            </TouchableOpacity>

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

            <View style={[styles.containerStyle4, {marginTop: scale(10)}]}>
              <Text style={styles.textStyle}>الخدمات المختلفة </Text>
              <TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.textStyle2}>عرض الكل</Text>
                </TouchableOpacity>
              </TouchableOpacity>
            </View>
            <View style={{padding: width * 0.02777}}>
              <FlatList
                data={differentServise}
                keyExtractor={(item, index) => index}
                showsVerticalScrollIndicator={false}
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
                          <TouchableOpacity
                            onPress={() => {
                              navigation.navigate('ProviderScreen');
                            }}>
                            <Image
                              source={item.profileImage}
                              style={styles.image}
                              resizeMode="contain"
                            />
                          </TouchableOpacity>

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
                          style={[
                            styles.reservationButtonStyle,
                            {marginLeft: 0},
                          ]}>
                          <Text style={styles.textStyle3}>حجز</Text>
                        </TouchableOpacity>
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
                showsHorizontalScrollIndicator={false}
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
      </View>
    </>
  );
};
export default HomeScreen;
