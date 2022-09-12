import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from 'react-native';
const {width, height} = Dimensions.get('screen');
const initialLayout = {width: Dimensions.get('window').width};
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {scale} from 'react-native-size-matters';
import GalleryList from '../../components/GalleryList';
import styles from '../../styles/tab/Gallery.screen.style';
import {COLORS, FONTSIZE, img, icons} from '../../utils/index';
const GalleryScreen = ({navigation}) => {
  const [allData, setAllData] = useState([
    {
      id: 1,
      image: img.gallery,
      type: 'تصميم غرفة للأطفال 2 طفل',
      like: false,
      designer: 'المصممم / ابراهيم',
      salary: 256,
    },
    {
      id: 2,
      image: img.gallery,
      type: 'تصميم غرفة للأطفال 2 طفل',
      like: false,
      designer: 'المصممم / ابراهيم',
      salary: 256,
    },
    {
      id: 3,
      image: img.gallery,
      type: 'تصميم غرفة للأطفال 2 طفل',
      like: false,
      designer: 'المصممم / ابراهيم',
      salary: 256,
    },
    {
      id: 4,
      image: img.gallery,
      type: 'تصميم غرفة للأطفال 2 طفل',
      like: false,
      designer: 'المصممم / ابراهيم',
      salary: 256,
    },
    {
      id: 5,
      image: img.gallery,
      type: 'تصميم غرفة للأطفال 2 طفل',
      like: false,
      designer: 'المصممم / ابراهيم',
      salary: 256,
    },
    {
      id: 6,
      image: img.gallery,
      type: 'تصميم غرفة للأطفال 2 طفل',
      like: false,
      designer: 'المصممم / ابراهيم',
      salary: 256,
    },
  ]);
  const [index, setIndex] = useState(0);
  const [routes, setRoutes] = useState([
    {key: 'first', title: 'الكل', id: 0},
    {key: 'second', title: 'التصميم الداخلي', id: 1},
    {key: 'third', title: 'المناظر الطبيعية والحدائق', id: 2},
    {key: 'fourth', title: 'الكهرباء', id: 3},
    {key: 'fifth', title: 'النقاشة', id: 4},
  ]);
  const [design, setDesign] = useState([
    {
      id: 1,
      image: img.design,
      type: 'تصميم غرفة للأطفال 2 طفل',
      like: false,
      designer: 'المصممم / ابراهيم',
      salary: 256,
    },
    {
      id: 2,
      image: img.design,
      type: 'تصميم غرفة للأطفال 2 طفل',
      like: false,
      designer: 'المصممم / ابراهيم',
      salary: 256,
    },
    {
      id: 3,
      image: img.design,
      type: 'تصميم غرفة للأطفال 2 طفل',
      like: false,
      designer: 'المصممم / ابراهيم',
      salary: 256,
    },
    {
      id: 4,
      image: img.design,
      type: 'تصميم غرفة للأطفال 2 طفل',
      like: false,
      designer: 'المصممم / ابراهيم',
      salary: 256,
    },
    {
      id: 5,
      image: img.design,
      type: 'تصميم غرفة للأطفال 2 طفل',
      like: false,
      designer: 'المصممم / ابراهيم',
      salary: 256,
    },
    {
      id: 6,
      image: img.design,
      type: 'تصميم غرفة للأطفال 2 طفل',
      like: false,
      designer: 'المصممم / ابراهيم',
      salary: 256,
    },
  ]);
  const [garden, setGarden] = useState([
    {
      id: 1,
      image: img.garden,
      type: 'تصميم غرفة للأطفال 2 طفل',
      like: false,
      designer: 'المصممم / ابراهيم',
      salary: 256,
    },
    {
      id: 2,
      image: img.garden,
      type: 'تصميم غرفة للأطفال 2 طفل',
      like: false,
      designer: 'المصممم / ابراهيم',
      salary: 256,
    },
    {
      id: 3,
      image: img.garden,
      type: 'تصميم غرفة للأطفال 2 طفل',
      like: false,
      designer: 'المصممم / ابراهيم',
      salary: 256,
    },
    {
      id: 4,
      image: img.garden,
      type: 'تصميم غرفة للأطفال 2 طفل',
      like: false,
      designer: 'المصممم / ابراهيم',
      salary: 256,
    },
    {
      id: 5,
      image: img.garden,
      type: 'تصميم غرفة للأطفال 2 طفل',
      like: false,
      designer: 'المصممم / ابراهيم',
      salary: 256,
    },
    {
      id: 6,
      image: img.garden,
      type: 'تصميم غرفة للأطفال 2 طفل',
      like: false,
      designer: 'المصممم / ابراهيم',
      salary: 256,
    },
  ]);
  const [electric, setElectric] = useState([
    {
      id: 1,
      image: img.electric,
      type: 'تصميم غرفة للأطفال 2 طفل',
      like: false,
      designer: 'المصممم / ابراهيم',
      salary: 256,
    },
    {
      id: 2,
      image: img.electric,
      type: 'تصميم غرفة للأطفال 2 طفل',
      like: false,
      designer: 'المصممم / ابراهيم',
      salary: 256,
    },
    {
      id: 3,
      image: img.electric,
      type: 'تصميم غرفة للأطفال 2 طفل',
      like: false,
      designer: 'المصممم / ابراهيم',
      salary: 256,
    },
    {
      id: 4,
      image: img.electric,
      type: 'تصميم غرفة للأطفال 2 طفل',
      like: false,
      designer: 'المصممم / ابراهيم',
      salary: 256,
    },
    {
      id: 5,
      image: img.electric,
      type: 'تصميم غرفة للأطفال 2 طفل',
      like: false,
      designer: 'المصممم / ابراهيم',
      salary: 256,
    },
    {
      id: 6,
      image: img.electric,
      type: 'تصميم غرفة للأطفال 2 طفل',
      like: false,
      designer: 'المصممم / ابراهيم',
      salary: 256,
    },
  ]);
  const [paint, setPaint] = useState([
    {
      id: 1,
      image: img.paint,
      type: 'تصميم غرفة للأطفال 2 طفل',
      like: false,
      designer: 'المصممم / ابراهيم',
      salary: 256,
    },
    {
      id: 2,
      image: img.paint,
      type: 'تصميم غرفة للأطفال 2 طفل',
      like: false,
      designer: 'المصممم / ابراهيم',
      salary: 256,
    },
    {
      id: 3,
      image: img.paint,
      type: 'تصميم غرفة للأطفال 2 طفل',
      like: false,
      designer: 'المصممم / ابراهيم',
      salary: 256,
    },
    {
      id: 4,
      image: img.paint,
      type: 'تصميم غرفة للأطفال 2 طفل',
      like: false,
      designer: 'المصممم / ابراهيم',
      salary: 256,
    },
    {
      id: 5,
      image: img.paint,
      type: 'تصميم غرفة للأطفال 2 طفل',
      like: false,
      designer: 'المصممم / ابراهيم',
      salary: 256,
    },
    {
      id: 6,
      image: img.paint,
      type: 'تصميم غرفة للأطفال 2 طفل',
      like: false,
      designer: 'المصممم / ابراهيم',
      salary: 256,
    },
  ]);

  const FirstRoute = () => (
    <GalleryList navigation={navigation} data={allData} setData={setAllData} />
  );
  const SecondRoute = () => (
    <GalleryList navigation={navigation} data={design} setData={setDesign} />
  );
  const ThirdRoute = () => (
    <GalleryList navigation={navigation} data={garden} setData={setGarden} />
  );
  const FourthRoute = () => (
    <GalleryList
      navigation={navigation}
      data={electric}
      setData={setElectric}
    />
  );
  const FifthRoute = () => (
    <GalleryList navigation={navigation} data={paint} setData={setPaint} />
  );
  const [active, setActive] = useState(index);
  renderTabBar = props => (
    <TabBar
      {...props}
      tabStyle={styles.tabStyle}
      style={{elevation: 0, marginLeft: scale(10)}}
      scrollEnabled={true}
      onSwipeStart={true}
      bounces={true}
      activeColor={COLORS.white}
      inactiveColor={COLORS.gray2}
      renderLabel={({route, focused, color}) => (
        <View
          style={[
            {
              backgroundColor: focused ? COLORS.yellow : '#fff',
              elevation: focused ? 4 : 0.5,
            },
            styles.item,
          ]}>
          <Text
            style={{
              color,
              margin: 2,
              fontSize: FONTSIZE.medium,
              fontFamily: 'Cairo',
            }}>
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
          <Text style={styles.headerTextStyle}>معرض الأعمال</Text>
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
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            navigation.navigate('AddGallery');
          }}>
          <AntDesign name="plus" style={styles.iconStyle} />
        </TouchableOpacity>
      </View>
    </>
  );
};
export default GalleryScreen;
