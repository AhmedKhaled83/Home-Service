import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Image,
  Dimensions,
} from 'react-native';
import styles from '../../styles/profile/ProfileModification.screen.style';
import {COLORS, FONTSIZE, icons, img} from '../../utils/index';
import {PermissionsAndroid} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import * as ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Foundation from 'react-native-vector-icons/Foundation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ActionSheet, {SheetManager} from 'react-native-actions-sheet';
import DialogInput from 'react-native-dialog-input';
import Feather from 'react-native-vector-icons/Feather';

const {width, height} = Dimensions.get('screen');

const ProfileModificationScreen = ({navigation}) => {
  const [photo_data, setPhoto_Data] = useState('');
  const [photo_uri, setPhoto_Uri] = useState('');
  const [myname, setMyname] = useState('احمد حسن');
  const [myPhone, setMyPhone] = useState('01033333333');
  const [myEmail, setMyEmail] = useState('mono2022@gmail.com');
  const [visable, setVisable] = useState(false);
  const [hint, setHint] = useState(false);
  const [title, setTitle] = useState('');

  useEffect(() => {
    requestCameraPermission();
  });
  useEffect(() => {
    getPhoto();
  }, [photo_uri]);

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
            <Text style={styles.headerTextStyle}>تعديل الملف الشخصي</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            SheetManager.show('helloworld_sheet');
          }}
          style={styles.viewImageStyle}>
          {!photo_uri ? (
            <Image
              source={icons.profile2}
              style={[styles.imageStyle]}
              resizeMode="cover"
            />
          ) : (
            <Image
              source={{uri: photo_uri}}
              style={styles.imageStyle}
              resizeMode="cover"
            />
          )}
        </TouchableOpacity>

        <Text style={styles.textStyle4}>اسم المستخدم</Text>
        <TouchableOpacity
          onPress={() => {
            setVisable(true);
            setTitle('اسم المستخدم');
            setHint(myname);
          }}
          style={styles.viewStyle4}>
          <Text style={styles.viewTextStyle}>{myname}</Text>
        </TouchableOpacity>
        <DialogInput
          isDialogVisible={visable}
          title={title}
          hintInput={hint}
          initValueTextInput={
            title == 'اسم المستخدم'
              ? myname
              : title == 'البريد الالكتروني'
              ? myEmail
              : title == 'رقم الهاتف'
              ? myPhone
              : ''
          }
          textInputProps={{
            maxLength: title == 'phone' ? 11 : 50,
            keyboardType: title == 'phone' ? 'phone-pad' : 'default',
          }}
          submitInput={inputText => {
            if (title == 'اسم المستخدم') {
              setMyname(inputText);
            } else if (title == 'رقم الهاتف') {
              setMyPhone(inputText);
            } else if (title == 'البريد الالكتروني') {
              setMyEmail(inputText);
            }
            setVisable(false);
          }}
          submitText="تم"
          closeDialog={() => {
            setVisable(false);
          }}
          cancelText="الغاء"
          // textInputProps={{autoCorrect:true}}
        ></DialogInput>
        <Text style={[styles.textStyle4, {marginTop: height * 0.0177619}]}>
          رقم الهاتف
        </Text>
        <TouchableOpacity
          onPress={() => {
            setVisable(true);
            setTitle('رقم الهاتف');
            setHint(myPhone);
          }}
          style={styles.viewStyle4}>
          <Text style={styles.viewTextStyle}>{myPhone}</Text>
          <Icon
            name="phone-alt"
            color={COLORS.gray2}
            size={17}
            style={styles.iconStyle}
          />
        </TouchableOpacity>
        <Text style={[styles.textStyle4, {marginTop: height * 0.0177619}]}>
          البريد الالكتروني
        </Text>
        <TouchableOpacity
          onPress={() => {
            setVisable(true);
            setTitle('البريد الالكتروني');
            setHint(myEmail);
          }}
          style={styles.viewStyle4}>
          <Text style={styles.viewTextStyle}>{myEmail}</Text>
          <Fontisto
            name="email"
            color={COLORS.gray2}
            size={FONTSIZE.xxlarge}
            style={styles.iconStyle}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonStyle2}>
          <Text style={styles.textStyle5}>حفظ التعديل</Text>
        </TouchableOpacity>
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
    </>
  );
};
export default ProfileModificationScreen;
