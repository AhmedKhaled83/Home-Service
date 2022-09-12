import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  StatusBar,
  Image,
  ScrollView,
} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {scale} from 'react-native-size-matters';
import {icons} from '../../utils/index';
import styles from '../../styles/Auth/NewPassStyle';
import * as Animatable from 'react-native-animatable';

function NewPass({navigation}) {
  const [password, setPassword] = useState('');
  const [Confirm_Password, setConfirm_Password] = useState('');
  const [security, setSecurity] = useState(true);
  const [Confirm_security, setConfirm_security] = useState(true);
  const [error_pass, setError_pass] = useState(false);

  const check_pass = () => {
    if (Confirm_Password != password) {
      setError_pass(true);
    } else {
      setError_pass(false);
      navigation.navigate('Login');
    }
  };

  return (
    <>
      <StatusBar
        backgroundColor={styles.color_stutsBar.color}
        barStyle={'dark-content'}
      />

      <Animatable.View
        animation="fadeInRight"
        style={styles.style_container_page}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Login');
              }}
              style={styles.style_button_back}>
              <FontAwesome5
                name="arrow-right"
                size={scale(18)}
                color={styles.bottn_back.color}
                style={{alignSelf: 'center'}}
              />
            </TouchableOpacity>

            <Text style={styles.style_text_Enter_newpass}>
              ادخل كلمة سر جديدة
            </Text>
          </View>

          <Text style={styles.pass_text}>كلمة السر</Text>

          <View style={styles.ViewInput}>
            <View style={styles.inputStyle}>
              <TextInput
                placeholder="● ● ● ● ● ● "
                value={password}
                onChangeText={value => {
                  setPassword(value);
                }}
                placeholderTextColor={styles.color_textInput.color}
                secureTextEntry={security}
                style={styles.insideTextInput}
              />
            </View>
            <TouchableOpacity
              style={styles.container_icons}
              onPress={() => {
                setSecurity(!security);
              }}>
              {security ? (
                <Image source={icons.eye_slash} />
              ) : (
                <Image source={icons.eye} />
              )}
            </TouchableOpacity>
          </View>

          <Text style={styles.pass_text}>تأكيد كلمة السر</Text>

          <View style={styles.ViewInput}>
            <View style={styles.inputStyle}>
              <TextInput
                placeholder="● ● ● ● ● ● "
                value={Confirm_Password}
                onChangeText={value => {
                  setConfirm_Password(value);
                }}
                placeholderTextColor={styles.color_textInput.color}
                secureTextEntry={security}
                style={styles.insideTextInput}
              />
            </View>
            <TouchableOpacity
              style={styles.container_icons}
              onPress={() => {
                setConfirm_security(!Confirm_security);
              }}>
              {Confirm_security ? (
                <Image source={icons.eye_slash} />
              ) : (
                <Image source={icons.eye} />
              )}
            </TouchableOpacity>
          </View>

          {error_pass ? (
            <Text style={styles.textError}>
              خطأ, من فضلك أعد كتابه كلمه السر بطريقه صحيحه
            </Text>
          ) : null}

          <TouchableOpacity
            onPress={() => {
              check_pass();
            }}
            style={styles.style_container_confirm}>
            <Text style={styles.style_text_confirm}> تأكيد </Text>
          </TouchableOpacity>
        </ScrollView>
      </Animatable.View>
    </>
  );
}
export default NewPass;
