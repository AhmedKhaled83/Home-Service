import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Image,
  TextInput,
  Dimensions,
  FlatList,
} from 'react-native';
import {scale} from 'react-native-size-matters';
const initialLayout = {width: Dimensions.get('window').width};
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from '../../styles/tab/myRequest.screen.style';
import {COLORS, img, icons} from '../../utils/index';
const MyRequestsScreen = ({navigation}) => {
  const [search, setSearch] = useState('');
  const [myWaitRequest, setMyWaitRequest] = useState([
    {
      id: 1,
      image: img.carpenter,
      price: 256,
      designer: 'المصمم/إبراهيم',
      designType: 'تصميم داخلي',
      servisType: 'تصميم غرفة للأطفال 2 طفل',
    },
  ]);
  const [myCurrentRequest, setMyCurrentRequest] = useState([
    {
      id: 1,
      image: img.carpenter,
      price: 256,
      designer: 'المصمم/إبراهيم',
      designType: 'تصميم داخلي',
      servisType: 'تصميم غرفة للأطفال 2 طفل',
    },
  ]);
  const [myComfirmRequest, setMyComfirmRequest] = useState([
    {
      id: 1,
      image: img.carpenter,
      price: 256,
      designer: 'المصمم/إبراهيم',
      designType: 'تصميم داخلي',
      servisType: 'تصميم غرفة للأطفال 2 طفل',
    },
  ]);

  const FirstRoute = () => (
    <View style={styles.containerStyle}>
      {!myWaitRequest.length > 0 ? (
        <FlatList
          data={myWaitRequest}
          keyExtractor={(item, index) => index}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <View>
              <Image source={item.image} style={styles.imageStyle} />
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
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('ProviderScreen');
                  }}>
                  <Image
                    source={item.image}
                    style={styles.profilePhotoStyle}
                    resizeMode="cover"
                  />
                </TouchableOpacity>
                <Text style={styles.designerTextStyle}>{item.designer}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.jobTitleStyle}>{item.designType}</Text>
                <View style={styles.waitViewStyle}>
                  <Text style={[styles.textStyle]}>
                    بإنتظار الموافقة علي طلبك
                  </Text>
                </View>
              </View>
            </View>
          )}
        />
      ) : (
        <View style={styles.empty}>
          <Image source={img.empty} resizeMode="contain" />
          <Text style={styles.textEmpty}>ليس لديك طلبات بعد</Text>
        </View>
      )}
    </View>
  );
  const SecondRoute = () => (
    <View style={styles.containerStyle}>
      {myCurrentRequest.length > 0 ? (
        <FlatList
          data={myCurrentRequest}
          keyExtractor={(item, index) => index}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <View>
              <Image source={item.image} style={styles.imageStyle} />
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
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('ProviderScreen');
                  }}>
                  <Image source={item.image} style={styles.profilePhotoStyle} />
                </TouchableOpacity>
                <Text style={styles.designerTextStyle}>{item.designer}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.jobTitleStyle}>{item.designType}</Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('ServicesDetailsMore', {
                      item: item,
                    });
                  }}
                  style={styles.reservationButtonStyle}>
                  <Text style={[styles.textStyle, {color: COLORS.white}]}>
                    حجز
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      ) : (
        <View style={styles.empty}>
          <Image source={img.empty} resizeMode="contain" />
          <Text style={styles.textEmpty}>ليس لديك طلبات بعد</Text>
        </View>
      )}
    </View>
  );
  const ThirdRoute = () => (
    <View style={styles.containerStyle}>
      {myComfirmRequest.length > 0 ? (
        <FlatList
          data={myComfirmRequest}
          keyExtractor={(item, index) => index}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <View>
              <Image source={item.image} style={styles.imageStyle} />
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
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('ProviderScreen');
                  }}>
                  <Image source={item.image} style={styles.profilePhotoStyle} />
                </TouchableOpacity>
                <Text style={styles.designerTextStyle}>{item.designer}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.jobTitleStyle}>{item.designType}</Text>
                <View style={styles.deletViewStyle}>
                  <Text style={styles.textStyle}>ملغية</Text>
                </View>
              </View>
            </View>
          )}
        />
      ) : (
        <View style={styles.empty}>
          <Image source={img.empty} resizeMode="contain" />
          <Text style={styles.textEmpty}>ليس لديك طلبات بعد</Text>
        </View>
      )}
    </View>
  );

  const [index, setIndex] = useState(0);
  const [routes, setRoutes] = useState([
    {key: 'first', title: 'المنتظرة'},
    {key: 'second', title: 'السارية'},
    {key: 'third', title: 'المنتهية'},
  ]);

  const renderTabBar = props => (
    <TabBar
      {...props}
      style={{backgroundColor: 'white'}}
      activeColor={COLORS.mainBlue}
      inactiveColor={COLORS.gray2}
      indicatorStyle={{backgroundColor: COLORS.mainBlue}}
      // {...props}
      // tabStyle={{
      //   backgroundColor: COLORS.white,
      //   height: 50,
      //   width: 120,
      // }}
      // //style={{marginLeft: 10}}
      // scrollEnabled={true}
      // activeColor={COLORS.mainBlue}
      // inactiveColor={COLORS.gray2}
      // indicatorStyle={{backgroundColor: '#f00', width: 5}}
      renderLabel={({route, focused, color}) => (
        <View
          style={{
            //backgroundColor: '#fff',
            //width: 120,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color,
              margin: scale(2),
              fontSize: scale(14),
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
          <TouchableOpacity style={styles.buttonIconStyle} onPress={() => {}}>
            <Image source={icons.message} style={[styles.iconStyle]} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Search');
            }}
            style={{alignItems: 'center'}}>
            <View style={styles.ViewSearchStyle}>
              <View style={styles.textInputStyle}>
                <AntDesign name={'search1'} size={18} color={COLORS.gray2} />
                <Text style={styles.textSearch}>ابحث عن ما تريد</Text>
              </View>
              <Image
                source={icons.filter}
                size={16}
                color={COLORS.gray2}
                style={{marginLeft: scale(90)}}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonIconStyle}
            onPress={() => {
              navigation.navigate('Notification');
            }}>
            <Image
              source={icons.Bell}
              style={[styles.iconStyle, {marginLeft: -scale(40)}]}
            />
          </TouchableOpacity>
        </View>
        <TabView
          navigationState={{index: index, routes: routes}}
          renderScene={SceneMap({
            first: FirstRoute,
            second: SecondRoute,
            third: ThirdRoute,
          })}
          onIndexChange={index => setIndex}
          initialLayout={initialLayout}
          renderTabBar={renderTabBar}
          /// نفس اللون دلوقتي لكن الخط اللي تحت التابه مش بيتشال؟  نايس
        />
      </View>
    </>
  );
};
export default MyRequestsScreen;

// <View style={{alignItems: 'center'}}>
//   <View style={styles.ViewSearchStyle}>
//     <AntDesign name={'search1'} size={18} color={COLORS.gray2} />
//     <TextInput
//       style={styles.textInputStyle}
//       placeholderTextColor={COLORS.gray2}
//       placeholder="ابحث عن ما تريده"
//       value={search}
//       onChangeText={value => {
//         setSearch(value);
//       }}
//     />
//     <Image
//       source={icons.filter}
//       size={16}
//       color={COLORS.gray2}
//       style={{marginLeft: scale(90)}}
//     />
//   </View>
// </View>;
