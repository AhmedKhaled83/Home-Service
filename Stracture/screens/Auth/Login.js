import React, {useState} from 'react';
import {
  View,
  TextInput,
  StatusBar,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {icons} from '../../utils/index';
import Dialog from 'react-native-dialog';
import styles from '../../styles/Auth/LoginStyle';
import {LogIn} from '../../store/CycleAppSlice';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const [phone, setPhone] = useState('');

  const [password, setPassword] = useState('');

  const [secure, setSecure] = useState(true);

  const [Error, setError] = useState(false);

  // function PhoneNumber
  const validatePhoneNumber = phone => {
    var pho = /^01[0125][0-9]{8}$/gm;
    return pho.test(phone);
  };

  // function PassWord
  const ValidatePassword = password => {
    var pass = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return pass.test(password);
  };

  // function Login in app
  const LoginApp = async () => {
    await AsyncStorage.setItem('tokenUser', 'خخخ');
    await AsyncStorage.setItem('tokenBoarding', 'خخخ');
    dispatch(LogIn('خخخ'));
  };

  // function check

  const check_login = async () => {
    const validation = validatePhoneNumber(phone) && ValidatePassword(password);
    validation ? LoginApp() : setError(true);
  };

  const dialog_cancel = () => {
    setError(false);
  };

  return (
    <>
      <StatusBar
        backgroundColor={styles.color_stutsBar.color}
        barStyle={'dark-content'}
      />
      <Animatable.View animation="slideInLeft" style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.heading}>تسجيل الدخول</Text>

          <Text style={styles.heading2}>مرحبا بعودتك</Text>

          <Text style={[styles.heading2, {color: styles.bottn_back.color}]}>
            رقم الهاتف
          </Text>

          {/* start TextInput  */}

          <View style={styles.ViewInput}>
            <View style={styles.inputStyle}>
              <TextInput
                placeholder="01087624658"
                keyboardType="numeric"
                value={phone}
                onChangeText={value => {
                  setPhone(value);
                }}
                placeholderTextColor={styles.color_textInput.color}
                style={styles.insideTextInput}
              />
            </View>
            <View style={styles.container_icons}>
              <Image source={icons.call} />
            </View>
          </View>
          {/* end TextInput  */}

          <Text style={[styles.heading2, {color: styles.bottn_back.color}]}>
            كلمة السر
          </Text>
          {/* start textInput */}
          <View style={styles.ViewInput}>
            <View style={styles.inputStyle}>
              <TextInput
                placeholder="********"
                value={password}
                onChangeText={value => {
                  setPassword(value);
                }}
                placeholderTextColor={styles.color_textInput.color}
                // dataDetectorTypes={'phoneNumber'}
                secureTextEntry={secure}
                style={styles.insideTextInput}
              />
            </View>
            <TouchableOpacity
              style={styles.container_icons}
              onPress={() => {
                setSecure(!secure);
              }}>
              {secure ? (
                <Image source={icons.eye_slash} />
              ) : (
                <Image source={icons.eye} />
              )}
            </TouchableOpacity>
          </View>
          {/* end textInput */}

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ForgetPassword');
            }}>
            <Text style={styles.textError}>نسيت كلمة السر</Text>
          </TouchableOpacity>

          {/* {Error ? (null) : ( */}

          <Dialog.Container visible={Error}>
            <Dialog.Title>تسجيل الدخول</Dialog.Title>
            <Dialog.Description>
              يوجد خطأ , الرجاء التاكد من صحه رقم الهاتف و كلمه السر
            </Dialog.Description>
            <Dialog.Button label="Cancel" onPress={dialog_cancel} />
          </Dialog.Container>

          {/* )} */}

          {/* login */}

          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              // check_login();
              navigation.navigate('TabStack',{screen:'HomeStack'})
            }}>
            <Text style={styles.btnTextLogin}>تسجيل الدخول</Text>
          </TouchableOpacity>

          {/* login */}

          <Text style={[styles.social]}>
            التسجيل بواسطة وصائل التواصل الاجتماعي
          </Text>

          {/* icons facebook and google */}

          <View style={styles.viewIcon}>
            <TouchableOpacity style={styles.container_soical_icons}>
              <Image source={icons.facebook} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.container_soical_icons}>
              <Image source={icons.google} />
            </TouchableOpacity>
          </View>

          <View style={styles.foundOrNot}>
            <TouchableOpacity onPress={() => {}}>
              <Text style={styles.textNotFound}>ليس لدي حساب</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SignUp');
             
              }}>
              <Text style={[styles.textFound]}>انشاء حساب</Text>
            </TouchableOpacity>
          </View>

          {/* icons facebook and google */}

          <TouchableOpacity
            style={[styles.btn, styles.btnVisitor]}
            onPress={() => {}}>
            <Text style={styles.btnTextVisitor}>تصفح كزائر</Text>
          </TouchableOpacity>
        </ScrollView>
      </Animatable.View>
    </>
  );
};

export default Login;
