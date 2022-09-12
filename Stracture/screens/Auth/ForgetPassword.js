import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  StatusBar,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import {icons} from '../../utils/index';
import styles from '../../styles/Auth/ForgetPassStyle';
import * as Animatable from 'react-native-animatable';
const ForgetPassword = ({navigation}) => {
  const radio_props = [
    {label: 'رقم الهاتف', value: 0},
    {label: 'البريد الالكتروني', value: 1},
  ];
  const [choice, setChoice] = useState(0);
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [check_phone, setCheck_Phone] = useState(true);
  const [check_email, setCheck_Email] = useState(true);

  const validatePhoneNumber = input_str => {
    let pho = /^01[0125][0-9]{8}$/gm;
    return pho.test(input_str);
  };

  const ValidEmail = email => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  const check_submit = () => {
    if (choice == 0) {
      validatePhoneNumber(phone) ? setCheck_Phone(true) : setCheck_Phone(false);
    } else {
      ValidEmail(email) ? setCheck_Email(true) : setCheck_Email(false);
    }
  };

  return (
    <>
      <StatusBar
        backgroundColor={styles.color_stutsBar.color}
        barStyle={'dark-content'}
      />
      <Animatable.View animation="fadeInRight" style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.containerHeader}>
            <Text style={styles.text}>نسيت كلمة المرور</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
              style={styles.viewArrow}>
              <Image source={icons.arrow_right} />
            </TouchableOpacity>
          </View>

          <RadioForm formHorizontal={true} animation={true}>
            {/* To create radio buttons, loop through your array of options */}
            <View style={styles.containerRadio}>
              {radio_props.map((obj, i) => (
                <RadioButton labelHorizontal={true} key={i}>
                  {/*  start RadioButtonLabel  */}
                  <RadioButtonInput
                    obj={obj}
                    index={i}
                    isSelected={choice == i}
                    onPress={value => {
                      setChoice(value);
                    }}
                    borderWidth={2}
                    buttonInnerColor={styles.botton_radiobotton.color}
                    buttonOuterColor={styles.botton_radiobotton.color}
                    buttonSize={10}
                    buttonOuterSize={20}
                  />
                  <RadioButtonLabel
                    obj={obj}
                    index={i}
                    labelHorizontal={true}
                    onPress={value => {
                      setChoice(value);
                    }}
                    labelStyle={styles.labelRadio}
                  />
                </RadioButton>
              ))}
            </View>
          </RadioForm>

          {/* end  RadioButtonLabel before RadioButtonInput */}

          {choice == 0 ? (
            <>
              {/* phone */}
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
              {check_phone ? (
                <Text style={{color: styles.white.color}}> رقم الهاتف خطأ</Text>
              ) : (
                <Text style={styles.textError}>رقم الهاتف خطأ</Text>
              )}
              {/* phone */}
            </>
          ) : (
            <>
              {/* email */}

              <View style={styles.ViewInput}>
                <View style={styles.inputStyle}>
                  <TextInput
                    placeholder="user@gmail.com"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={value => {
                      setEmail(value);
                    }}
                    placeholderTextColor={styles.color_textInput.color}
                    style={styles.insideTextInput}
                  />
                </View>

                <View style={styles.container_icons}>
                  <Image source={icons.mail} />
                </View>
              </View>
              {check_email ? (
                <Text style={{color: styles.white.color}}>
                  البريد الالكتروني غير صحيح
                </Text>
              ) : (
                <Text style={styles.textError}>البريد الالكتروني غير صحيح</Text>
              )}
              {/* email */}
            </>
          )}

          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              check_submit();
              navigation.navigate('CheckingPassword');
            }}>
            <Text style={styles.btnText}>ارسال</Text>
          </TouchableOpacity>
        </ScrollView>
      </Animatable.View>
    </>
  );
};

export default ForgetPassword;
