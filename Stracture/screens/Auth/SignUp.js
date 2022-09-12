import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Image,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Dialog from 'react-native-dialog';
import {icons} from '../../utils/index';
import styles from '../../styles/Auth/SignupStyle';

const SignUp = ({navigation}) => {
  const [phone, setPhone] = useState('');

  const [pass, setPass] = useState('');

  const [name, setName] = useState('');

  const [checkPhone, setCheckPhone] = useState(false);

  const [Checkname, setCheckname] = useState(false);

  const [checkPassword, setCheckPassword] = useState(false);

  const [showPass, setShowPass] = useState(false);

  const isValidname = name => {
    const re = /^([a-zA-Z0-9\s_\u0600-\u06FF]).{0,30}$/;
    //  /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    return re.test(String(name).toLowerCase());
  };

  // function Phone Number
  const validatePhoneNumber = phone => {
    let pho = /^01[0125][0-9]{8}$/gm;
    return pho.test(phone);
  };

  // function Password
  const ValidatePassword = password => {
    var pass = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return pass.test(password);
  };

  // function sigup

  const SignUp = () => {
    if (validatePhoneNumber(phone)) {
      setCheckPhone(false);

      if (isValidname(name)) {
        setCheckname(false);

        if (ValidatePassword(pass)) {
          setCheckPassword(false);
        } else {
          setCheckPassword(true);
        }
      } else {
        setCheckname(true);
      }
    } else {
      setCheckPhone(true);
    }
  };

  const dialog_cancel_phone = () => {
    setCheckPhone(false);
  };

  const dialog_cancel_name = () => {
    setCheckname(false);
  };

  const dialog_cancel_password = () => {
    setCheckPassword(false);
  };

  return (
    <>
      <StatusBar
        backgroundColor={styles.color_stutsBar.color}
        barStyle={'dark-content'}
      />

      <Animatable.View animation="slideInRight" style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.containerHeader}>
            <TouchableOpacity
              activeOpacity={0.4}
              style={styles.IconView}
              onPress={() => {
                navigation.goBack();
              }}>
              <AntDesign
                name="arrowright"
                size={16}
                color={styles.bottn_back.color}
              />
            </TouchableOpacity>
            <View style={styles.header}>
              <Text style={styles.text_header}>انشاء حساب جديد</Text>
            </View>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.WelcomeText}>مرحباً اهلاً بك</Text>

            <Text style={[styles.WelcomeText, , styles.heading2]}>
              رقم الهاتف
            </Text>

            {/* // phone  */}

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

            {/* // name user  */}

            <Text style={[styles.WelcomeText, styles.heading2]}>
              اسم المستخدم
            </Text>

            <View style={styles.ViewInput}>
              <View style={styles.inputStyle_userName}>
                <TextInput
                  placeholder="أحمد حسن"
                  keyboardType="name-phone-pad"
                  value={name}
                  onChangeText={value => {
                    setName(value);
                  }}
                  placeholderTextColor={styles.color_textInput.color}
                  style={styles.insideTextInput}
                />
              </View>
            </View>

            {/* // password  */}

            <Text style={[styles.WelcomeText, styles.heading2]}>كلمة السر</Text>

            <View style={styles.ViewInput}>
              <View style={styles.inputStyle}>
                <TextInput
                  placeholder="********"
                  value={pass}
                  onChangeText={value => {
                    setPass(value);
                  }}
                  placeholderTextColor={styles.color_textInput.color}
                  secureTextEntry={showPass}
                  style={styles.insideTextInput}
                />
              </View>
              <TouchableOpacity
                style={styles.container_icons}
                onPress={() => {
                  setShowPass(!showPass);
                }}>
                {showPass ? (
                  <Image source={icons.eye_slash} />
                ) : (
                  <Image source={icons.eye} />
                )}
              </TouchableOpacity>
            </View>

            {/* botton sign up */}

            <TouchableOpacity
              activeOpacity={0.4}
              style={styles.button}
              onPress={() => {
                SignUp();
                navigation.navigate('Bottom_Tab');
              }}>
              <Text style={styles.buttonText}>انشاء حساب</Text>
            </TouchableOpacity>

            <Text style={styles.SocialText}>
              التسجيل بواسطه وسائل التواصل الاجتماعي
            </Text>

            <View style={styles.viewIcon}>
              <TouchableOpacity style={styles.container_soical_icons}>
                <Image source={icons.facebook} />
              </TouchableOpacity>

              <TouchableOpacity style={styles.container_soical_icons}>
                <Image source={icons.google} />
              </TouchableOpacity>
            </View>

            <View style={styles.viewIconLogin}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Login');
                }}>
                <Text style={styles.textIcon}>تسجيل الدخول</Text>
              </TouchableOpacity>

              <Text style={[styles.textIcon, styles.textIconLogin]}>
                لدي حساب بالفعل
              </Text>
            </View>

            <TouchableOpacity style={[styles.button, styles.btnVisitor]}>
              <Text style={[styles.btnText, styles.btnTextVisitor]}>
                تصفح كزائر
              </Text>
            </TouchableOpacity>
          </ScrollView>

          {/* // Errors */}

          {checkPhone == true ? (
            <View>
              <Dialog.Container visible={checkPhone}>
                <Dialog.Title>إنشاء حساب جديد </Dialog.Title>
                <Dialog.Description>
                  يوجد خطأ , يجيب الا يقل رقم الهاتف عن 11 رقم
                </Dialog.Description>
                <Dialog.Button label="Cancel" onPress={dialog_cancel_phone} />
              </Dialog.Container>
            </View>
          ) : Checkname == true ? (
            <View>
              <Dialog.Container visible={Checkname}>
                <Dialog.Title>إنشاء حساب جديد </Dialog.Title>
                <Dialog.Description>
                  يوجد خطأ , يجيب ان يكون الاسم مثل 'mono'
                </Dialog.Description>
                <Dialog.Button label="Cancel" onPress={dialog_cancel_name} />
              </Dialog.Container>
            </View>
          ) : checkPassword == true ? (
            <View>
              <Dialog.Container visible={checkPassword}>
                <Dialog.Title>إنشاء حساب جديد </Dialog.Title>
                <Dialog.Description>
                  يوجد خطأ , يجيب ان تحتوى كلمه السر علي ارقام و حروف و رموز مثل
                  'mono123#%'
                </Dialog.Description>
                <Dialog.Button
                  label="Cancel"
                  onPress={dialog_cancel_password}
                />
              </Dialog.Container>
            </View>
          ) : null}
        </ScrollView>
      </Animatable.View>
    </>
  );
};

export default SignUp;
