import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from '../../styles/Home/Provider.screen.style';
const {width, height} = Dimensions.get('screen');
import {COLORS, FONTSIZE} from '../../utils/fonts.util';
import img from '../../utils/img';
import StarRating from 'react-native-star-rating-widget';
import {ScrollView} from 'react-native-gesture-handler';
import {icons} from '../../utils';
const ProviderScreen = ({navigation}) => {
  const [rating, setRating] = useState(4);
  const [personalInformation, setPersonalInformation] = useState({
    name: 'محمد أحمد',
    numberOfOrder: 30,
    job: 'مصمم ديكور',
    aboutHim:
      'مثال للنص يمكن تغيره مثال للنص يمكن تغيره مثال للنص يمكن تغيره مثال للنص مثال للنص يمكن تاغيره',
    profileImage: img.workshop,
  });
  const [offers, setOffers] = useState([
    {
      id: 1,
      image: img.carpenter,
      profileImage: img.carpenter,
      price: 256,
      designer: 'المصمم/إبراهيم',
      designType: 'تصميم داخلي',
      servisType: 'تصميم غرفة للأطفال 2 طفل',
      fav: false,
    },
    {
      id: 2,
      image: img.carpenter,
      profileImage: img.carpenter,
      price: 256,
      designer: 'المصمم/إبراهيم',
      designType: 'تصميم داخلي',
      servisType: 'تصميم غرفة للأطفال 2 طفل',
      fav: false,
    },
  ]);
  const [gallery, setGallery] = useState([
    {
      id: 1,
      img1: img.design1,
      img2: img.design1,
      img3: img.design1,
      img4: img.design1,
      img5: img.design1,
      img6: img.design1,
    },
    {
      id: 2,
      img1: img.design1,
      img2: img.design1,
      img3: img.design1,
      img4: img.design1,
      img5: img.design1,
      img6: img.design1,
    },
    {
      id: 3,
      img1: img.design1,
      img2: img.design1,
      img3: img.design1,
      img4: img.design1,
      img5: img.design1,
      img6: img.design1,
    },
  ]);
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: 'أحمد محمد',
      review: 'مثال للنص يمكن تغيره مثال للنص',
      date: '3 مايو',
      profileImage: img.review,
    },
    {
      id: 2,
      name: 'أحمد محمد',
      review: 'مثال للنص يمكن تغيره مثال للنص',
      date: '3 مايو',
      profileImage: img.review,
    },
    {
      id: 3,
      name: 'أحمد محمد',
      review: 'مثال للنص يمكن تغيره مثال للنص',
      date: '3 مايو',
      profileImage: img.review,
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

  return (
    <ScrollView>
      <>
        <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />
        <View style={styles.containerStyle}>
          <View style={styles.headerStyle}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
              style={styles.iconViewStyle}>
              <Image source={icons.arrow_right} resizeMode="contain" />
            </TouchableOpacity>
            <View style={styles.textViewStyle}>
              <Text style={styles.headerTextStyle}>
                {personalInformation.name}
              </Text>
            </View>
          </View>
          <Text style={styles.textStyle}>({personalInformation.job})</Text>
          <Image
            source={personalInformation.profileImage}
            style={styles.imageStyle}
          />
          <View style={styles.viewsStyle}>
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
          <Text style={styles.textStyle2}>عدد الخدمات المكتملة</Text>
          <Text style={[styles.textStyle, {marginTop: 0}]}>(30خدمة)</Text>
          <View style={styles.viewsStyle2}>
            <TouchableOpacity style={styles.buttonStyle}>
              <Image
                source={icons.call2}
                style={styles.iconStyle}
                resizeMode="contain"
              />
              <Text style={styles.textStyle3}>بدء المحادثة</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Dates');
              }}
              style={styles.buttonStyle2}>
              <Image
                source={icons.calender2}
                style={styles.iconStyle}
                resizeMode="contain"
              />
              <Text style={[styles.textStyle3, {color: COLORS.mainBlue}]}>
                جدول المواعيد
              </Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.viewsStyle2, styles.viewsStyle]}>
            <Image
              source={icons.handBag}
              style={styles.iconStyle}
              resizeMode="contain"
            />
            <Text style={styles.textStyle4}>طلب خدمة مختلفة</Text>
          </View>
          <Text style={[styles.textStyle4, {marginLeft: 16}]}>
            عن مقدم الخدمة
          </Text>

          <Text style={styles.textStyle5}>{personalInformation.aboutHim}</Text>
          <View style={styles.containerStyle4}>
            <Text style={styles.textStyle6}>الخدمات</Text>
            <TouchableOpacity>
              <Text style={styles.textStyle7}>عرض الكل</Text>
            </TouchableOpacity>
          </View>
          <View style={{padding: width * 0.02777}}>
            <FlatList
              data={offers}
              keyExtractor={(item, index) => index}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => (
                <>
                  <View style={styles.containerStyle3}>
                    <View>
                      <Image source={item.image} style={styles.imageStyle2} />
                      <TouchableOpacity
                        style={styles.favoriteButtonStyle}
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
                      </View>
                      <Text style={styles.priceTextStyle}>
                        {item.price}
                        {'ج.م'}
                      </Text>

                      <View style={styles.containerStyle6}>
                        <Image
                          source={item.profileImage}
                          style={styles.profilePhotoStyle}
                        />
                        <Text style={styles.designerTextStyle}>
                          {item.designer}
                        </Text>
                      </View>

                      <View style={{flexDirection: 'row'}}>
                        <Text style={styles.jobTitleStyle}>
                          {item.designType}
                        </Text>
                        <TouchableOpacity style={styles.reservationButtonStyle}>
                          <Text style={styles.textStyle8}>حجز</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </>
              )}
            />
          </View>
          <View style={styles.containerStyle4}>
            <Text style={styles.textStyle6}>معرض الأعمال</Text>
            <TouchableOpacity>
              <Text style={styles.textStyle7}>عرض الكل</Text>
            </TouchableOpacity>
          </View>
          <View style={{padding: width * 0.02777}}>
            <FlatList
              data={gallery}
              horizontal={true}
              keyExtractor={(item, index) => index.toString()}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => (
                <>
                  <View style={styles.containerStyle2}>
                    <View style={{flexDirection: 'row'}}>
                      <Image source={item.img1} style={styles.imageStyle3} />
                      <Image source={item.img2} style={styles.imageStyle3} />
                      <Image source={item.img3} style={styles.imageStyle3} />
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <Image source={item.img4} style={styles.imageStyle3} />
                      <Image source={item.img5} style={styles.imageStyle3} />
                      <Image source={item.img6} style={styles.imageStyle3} />
                    </View>
                    <TouchableOpacity style={styles.btnStyle2}>
                      <Image source={icons.right} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[styles.btnStyle2, {marginLeft: 281}]}>
                      <Image source={icons.left} />
                    </TouchableOpacity>
                  </View>
                </>
              )}
            />
          </View>

          <View style={styles.containerStyle4}>
            <View style={styles.containerStyle0}>
              <Text style={styles.textStyle6}>التقيمات</Text>
              <Text style={styles.textStyle0}>(30 تقييما)</Text>
            </View>

            <TouchableOpacity>
              <Text style={styles.textStyle7}>عرض الكل</Text>
            </TouchableOpacity>
          </View>
          <View style={{padding: width * 0.02777}}>
            <FlatList
              data={reviews}
              keyExtractor={(item, index) => index.toString()}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => (
                <>
                  <View style={{marginTop: height * 0.01924}}>
                    <View style={{flexDirection: 'row'}}>
                      <Image
                        source={item.profileImage}
                        style={styles.imageStyle4}
                        resizeMode="contain"
                      />
                      <Text style={styles.textStyle9}>{item.name}</Text>
                      <StarRating
                        rating={rating}
                        onChange={setRating}
                        color={'rgba(255,201,11,1)'}
                        starStyle={styles.star2}
                        enableHalfStar={true}
                        starSize={FONTSIZE.large}
                        maxStars={5}
                        style={{marginLeft: -width * 0.0555}}
                      />
                      <Text style={styles.textStyle10}>{item.date}</Text>
                    </View>
                    <View>
                      <Text style={styles.textStyle11}>{item.review}</Text>
                      <View style={styles.viewsStyle3}></View>
                    </View>
                  </View>
                </>
              )}
            />
          </View>
        </View>
      </>
    </ScrollView>
  );
};
export default ProviderScreen;
