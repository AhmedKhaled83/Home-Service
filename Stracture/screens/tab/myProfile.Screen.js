import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Image,
  ScrollView,
} from 'react-native';
import {PermissionsAndroid} from 'react-native';
import Foundation from 'react-native-vector-icons/Foundation';
import * as ImagePicker from 'react-native-image-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import ActionSheet, {SheetManager} from 'react-native-actions-sheet';
import styles from '../../styles/tab/myProfile.screen.style';
import {COLORS, FONTSIZE, icons, img} from '../../utils/index';
import {LogOut} from '../../store/CycleAppSlice';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MyProfileScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [photo_data, setPhoto_Data] = useState('');
  const [photo_uri, setPhoto_Uri] = useState('');

  useEffect(() => {
    requestCameraPermission();
  });
  useEffect(() => {
    getPhoto();
  }, [photo_uri]);

  const getDataUser = async () => {
    let name = await AsyncStorage.getItem('name');
    let email = await AsyncStorage.getItem('email');
    let phone = await AsyncStorage.getItem('phone');
    setEmail(email);
    setName(name);
    setPhone(phone);
  };

  useEffect(() => {
    getDataUser();
  });

  const LogoutApp = async () => {
    await AsyncStorage.removeItem('tokenUser');
    dispatch(LogOut());
  };

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  const selectFromGallery = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary({options, includeBase64: true}, res => {
      // console.log('Response = ', res);
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        setPhoto(res.assets[0].uri);
        setPhoto_Data(res.assets[0]);
        setPhoto_Uri(res.assets[0].uri);
      }
    });
  };
  const launchCamera = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchCamera(options, res => {
      console.log('Response = ', res);

      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        setPhoto(res.assets[0].uri);
        setPhoto_Uri(res.assets[0].uri);
        setPhoto_Data(res.assets[0]);
      }
    });
  };
  const setPhoto = async uri => {
    await AsyncStorage.setItem('photo', uri);
  };

  const getPhoto = async () => {
    let photo = await AsyncStorage.getItem('photo');
    if (photo) {
      setPhoto_Uri(photo);
    }
  };
  const removePhoto = async () => {
    await AsyncStorage.setItem('photo', '');
    setPhoto_Uri('');
  };

  return (
    <>
      <StatusBar backgroundColor={COLORS.black} barStyle={'light-content'} />
      <ScrollView>
        <View style={styles.containerStyle}>
          <View style={styles.viewStyle}></View>
          <TouchableOpacity
            onPress={() => {
              SheetManager.show('helloworld_sheet');
            }}
            style={styles.viewImageStyle}>
            {!photo_uri ? (
              <Image source={icons.profile} style={styles.imageStyle} />
            ) : (
              <Image source={{uri: photo_uri}} style={styles.imageStyle} />
            )}
          </TouchableOpacity>
          <Text style={styles.welcomeTextStyle}>مرحبا بك</Text>
          <Text style={styles.textStyle}>
            قم بإنشاء حسابك و احصل علي عروضنا
          </Text>
          <TouchableOpacity
            style={styles.loginButtonStyle}
            onPress={() => {
              LogoutApp();
            }}>
            <Text style={styles.loginTextStyle}>تسجيل الدخول </Text>
          </TouchableOpacity>
          <ScrollView>
            <TouchableOpacity
              style={styles.containerStyle2}
              onPress={() => {
                navigation.navigate('walletProfile');
              }}>
              <AntDesign name="wallet" style={styles.iconStyle} />
              <Text style={styles.textNameStyle}>المحفظة</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.containerStyle2}
              onPress={() => {
                navigation.navigate('AddressProfile');
              }}>
              <Ionicons name="location-outline" style={styles.iconStyle} />
              <Text style={styles.textNameStyle}>العنوان</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.containerStyle2}
              onPress={() => {
                navigation.navigate('MyFavoritesScreen');
              }}>
              <AntDesign name="hearto" style={styles.iconStyle} />
              <Text style={styles.textNameStyle}>المفضلة</Text>
            </TouchableOpacity>

            <View style={styles.lineStyle}></View>

            <TouchableOpacity
              style={styles.containerStyle2}
              onPress={() => {
                navigation.navigate('ShareCodeScreen');
              }}>
              <Fontisto
                name="share-a"
                style={[styles.iconStyle, {fontSize: FONTSIZE.xlarge}]}
              />
              <Text style={styles.textNameStyle}>كود المشاركة</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.containerStyle2}
              onPress={() => {
                navigation.navigate('ProfileModificationScreen');
              }}>
              <AntDesign name="setting" style={styles.iconStyle} />
              <Text style={styles.textNameStyle}>الإعدادات</Text>
            </TouchableOpacity>
            <View style={styles.lineStyle}></View>
            <TouchableOpacity
              style={styles.containerStyle2}
              onPress={() => {
                navigation.navigate('AboutMonoScreen');
              }}>
              <AntDesign name="wallet" style={styles.iconStyle} />
              <Text style={styles.textNameStyle}>عن مونو</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.containerStyle2}>
              <Ionicons name="location-outline" style={styles.iconStyle} />
              <Text style={styles.textNameStyle}>اتصل بنا </Text>
            </TouchableOpacity>
          </ScrollView>
          <ActionSheet
            containerStyle={styles.containerStyle3}
            id="helloworld_sheet">
            <View>
              <View style={styles.viewStyle2}>
                <Text style={styles.textStyle2}>الصوره الشخصيه</Text>
                <TouchableOpacity
                  onPress={() => {
                    removePhoto();
                    SheetManager.hideAll();
                  }}>
                  <Foundation
                    name="trash"
                    color={COLORS.mainBlack}
                    size={FONTSIZE.xxlarge}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.viewStyle3}>
                <TouchableOpacity
                  style={styles.buttonStyle}
                  onPress={() => {
                    SheetManager.hideAll();
                    selectFromGallery();
                  }}>
                  <Text style={styles.textStyle3}>المعرض</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.buttonStyle}
                  onPress={() => {
                    SheetManager.hideAll();
                    launchCamera();
                  }}>
                  <Text style={styles.textStyle3}>الكاميرا</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ActionSheet>
        </View>
      </ScrollView>
    </>
  );
};
export default MyProfileScreen;
