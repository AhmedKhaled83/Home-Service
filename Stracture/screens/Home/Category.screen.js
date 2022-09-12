import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Image,
  Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('screen');

const initialLayout = {width: Dimensions.get('window').width};
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import styles from '../../styles/Home/Category.screen.style';
import {COLORS, FONTSIZE, icons, img} from '../../utils/index';
import CategoryList from '../../components/CategoryList';
const CategoryScreen = ({navigation, route}) => {
  const title = route.params.title;
  const [rating, setRating] = useState(4);
  const [selectedItem, setSelectedItem] = useState(null);
  const [childrenRoom, setChildrenRoom] = useState([
    {
      id: 1,
      image: img.carpenter,
      price: 256,
      profileImage: img.carpenter,
      designer: 'المصمم/إبراهيم',
      designType: 'تصميم داخلي',
      servisType: 'تصميم غرفة للأطفال ',
      fav: false,
    },
    {
      id: 2,
      image: img.carpenter,
      price: 256,
      profileImage: img.carpenter,
      designer: 'المصمم/إبراهيم',
      designType: 'تصميم داخلي',
      servisType: 'تصميم غرفة للأطفال ',
      fav: false,
    },
    {
      id: 3,
      image: img.carpenter,
      price: 256,
      profileImage: img.carpenter,
      designer: 'المصمم/إبراهيم',
      designType: 'تصميم داخلي',
      servisType: 'تصميم غرفة للأطفال ',
      fav: false,
    },
  ]);

  const [index, setIndex] = useState(0);
  const [routes, setRoutes] = useState([
    {key: 'first', title: 'تصميم غرفه للأطفال', id: 0},
    {key: 'second', title: 'تصميم غرفة نوم', id: 1},
    {key: 'third', title: 'تصميم غرفة معيشة', id: 2},
    {key: 'fourth', title: 'تصميم غرفه للأطفال', id: 3},
    {key: 'fifth', title: 'تصميم غرفة معيشة', id: 4},
  ]);

  const [bedRoom, setBedRoom] = useState([
    {
      id: 1,
      image: img.carpenter,
      price: 256,
      profileImage: img.carpenter,
      designer: 'المصمم/إبراهيم',
      designType: 'تصميم داخلي',
      servisType: 'تصميم غرفة للأطفال ',
      fav: false,
    },
    {
      id: 2,
      image: img.carpenter,
      price: 256,
      profileImage: img.carpenter,
      designer: 'المصمم/إبراهيم',
      designType: 'تصميم داخلي',
      servisType: 'تصميم غرفة للأطفال ',
      fav: false,
    },
    {
      id: 3,
      image: img.carpenter,
      price: 256,
      profileImage: img.carpenter,
      designer: 'المصمم/إبراهيم',
      designType: 'تصميم داخلي',
      servisType: 'تصميم غرفة للأطفال ',
      fav: false,
    },
  ]);
  const [livingRoom, setLivingRoom] = useState([
    {
      id: 1,
      image: img.carpenter,
      price: 256,
      profileImage: img.carpenter,
      designer: 'المصمم/إبراهيم',
      designType: 'تصميم داخلي',
      servisType: 'تصميم غرفة للأطفال ',
      fav: false,
    },
    {
      id: 2,
      image: img.carpenter,
      price: 256,
      profileImage: img.carpenter,
      designer: 'المصمم/إبراهيم',
      designType: 'تصميم داخلي',
      servisType: 'تصميم غرفة للأطفال ',
      fav: false,
    },
    {
      id: 3,
      image: img.carpenter,
      price: 256,
      profileImage: img.carpenter,
      designer: 'المصمم/إبراهيم',
      designType: 'تصميم داخلي',
      servisType: 'تصميم غرفة للأطفال ',
      fav: false,
    },
  ]);
  const [Kitchen, setKitchen] = useState([
    {
      id: 1,
      image: img.carpenter,
      price: 256,
      profileImage: img.carpenter,
      designer: 'المصمم/إبراهيم',
      designType: 'تصميم داخلي',
      servisType: 'تصميم غرفة للأطفال ',
      fav: false,
    },

    {
      id: 2,
      image: img.carpenter,
      price: 256,
      profileImage: img.carpenter,
      designer: 'المصمم/إبراهيم',
      designType: 'تصميم داخلي',
      servisType: 'تصميم غرفة للأطفال ',
      fav: false,
    },
    {
      id: 3,
      image: img.carpenter,
      price: 256,
      profileImage: img.carpenter,
      designer: 'المصمم/إبراهيم',
      designType: 'تصميم داخلي',
      servisType: 'تصميم غرفة للأطفال ',
      fav: false,
    },
  ]);
  const [holl, setHoll] = useState([
    {
      id: 1,
      image: img.carpenter,
      price: 256,
      profileImage: img.carpenter,
      designer: 'المصمم/إبراهيم',
      designType: 'تصميم داخلي',
      servisType: 'تصميم غرفة للأطفال ',
      fav: false,
    },
    {
      id: 2,
      image: img.carpenter,
      price: 256,
      profileImage: img.carpenter,
      designer: 'المصمم/إبراهيم',
      designType: 'تصميم داخلي',
      servisType: 'تصميم غرفة للأطفال ',
      fav: false,
    },
    {
      id: 3,
      image: img.carpenter,
      price: 256,
      profileImage: img.carpenter,
      designer: 'المصمم/إبراهيم',
      designType: 'تصميم داخلي',
      servisType: 'تصميم غرفة للأطفال ',
      fav: false,
    },
  ]);

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

  const FirstRoute = () => (
    <CategoryList
      data={childrenRoom}
      offers={offers}
      galleryService={galleryService}
      navigation={navigation}
      onPressHandler={onPressHandler}
      onPressHandler2={onPressHandler2}
      rating={rating}
      selectedItem={selectedItem}
      setRating={setRating}
    />
  );
  const SecondRoute = () => (
    <CategoryList
      data={childrenRoom}
      offers={offers}
      galleryService={galleryService}
      navigation={navigation}
      onPressHandler={onPressHandler}
      onPressHandler2={onPressHandler2}
      rating={rating}
      selectedItem={selectedItem}
      setRating={setRating}
    />
  );
  const ThirdRoute = () => (
    <CategoryList
      data={childrenRoom}
      offers={offers}
      galleryService={galleryService}
      navigation={navigation}
      onPressHandler={onPressHandler}
      onPressHandler2={onPressHandler2}
      rating={rating}
      selectedItem={selectedItem}
      setRating={setRating}
    />
  );
  const FourthRoute = () => (
    <CategoryList
      data={childrenRoom}
      offers={offers}
      galleryService={galleryService}
      navigation={navigation}
      onPressHandler={onPressHandler}
      onPressHandler2={onPressHandler2}
      rating={rating}
      selectedItem={selectedItem}
      setRating={setRating}
    />
  );
  const FifthRoute = () => (
    <CategoryList
      data={childrenRoom}
      offers={offers}
      galleryService={galleryService}
      navigation={navigation}
      onPressHandler={onPressHandler}
      onPressHandler2={onPressHandler2}
      rating={rating}
      selectedItem={selectedItem}
      setRating={setRating}
    />
  );

  renderTabBar = props => (
    <TabBar
      {...props}
      tabStyle={styles.tabStyle}
      style={{elevation: 0, marginLeft: width * 0.027777}}
      scrollEnabled={true}
      onSwipeStart={true}
      bounces={true}
      activeColor={COLORS.white}
      inactiveColor={COLORS.gray2}
      renderLabel={({route, focused, color}) => (
        <View
          style={{
            backgroundColor: focused ? COLORS.yellow : COLORS.white,
            width: 'auto',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: width * 0.03055,
            borderRadius: width * 0.02222,
            shadowColor: '#black',
            shadowOpacity: 0.9,
            elevation: focused ? 4 : 0.5,
            shadowRadius: 5,
            shadowOffset: {width: width * 0.15555, height: height * 0.019242},
            padding: 8,
          }}>
          <Text
            style={{color, margin: width * 0.00555, fontSize: FONTSIZE.medium}}>
            {route.title}
          </Text>
        </View>
      )}
    />
  );

  return (
    <>
      <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />
      <View style={styles.containerStyle}>
        <View style={styles.headerStyle}>
          <TouchableOpacity>
            <Image source={icons.message} resizeMode="contain" />
          </TouchableOpacity>
          <Text style={styles.headerTextStyle}>{title}</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Notification');
            }}>
            <Image source={icons.Bell} resizeMode="contain" />
          </TouchableOpacity>
        </View>
        <TabView
          navigationState={{index: index, routes: routes}}
          renderScene={SceneMap({
            first: FirstRoute,
            second: SecondRoute,
            third: ThirdRoute,
            fourth: FourthRoute,
            fifth: FifthRoute,
          })}
          onIndexChange={index => setIndex}
          initialLayout={initialLayout}
          renderTabBar={renderTabBar}
        />
      </View>
    </>
  );
};
export default CategoryScreen;
